import { useRef, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';
import LineupBar from './LineupBar';
// Video is served from the root of the public directory
const videoSource = '/3792293-hd_1920_1080_24fps.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Fallback background in case video doesn't load
  const fallbackBackground = (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80" />
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Update status function
    const updateStatus = (message: string, isError = false) => {
      const statusElement = document.getElementById('video-status');
      if (statusElement) {
        statusElement.textContent = message;
        statusElement.className = isError ? 'text-red-400' : 'text-green-400';
      }
      console.log(`Video status: ${message}`);
    };

    // Set video properties
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    // Handle video load
    const handleLoadedData = () => {
      updateStatus('Video loaded, attempting to play...');
      playVideo().catch(console.error);
    };

    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
        updateStatus('Playing');
      } catch (err) {
        updateStatus(`Playback error: ${err instanceof Error ? err.message : String(err)}`, true);
        console.error('Video play error:', err);
      }
    };
    
    // Handle video end to ensure looping works
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(err => {
        updateStatus(`Loop error: ${err instanceof Error ? err.message : String(err)}`, true);
      });
    };
    
    // Handle errors
    const handleError = (e: Event) => {
      updateStatus(`Error: ${video.error?.message || 'Unknown error'}`, true);
      console.error('Video error:', video.error);
    };
    
    // Handle visibility change to restart video when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        updateStatus('Tab visible, resuming playback...');
        video.play().catch(console.error);
      }
    };
    
    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Initial status
    updateStatus('Loading video...');
    
    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-black pt-24 md:pt-32 z-10 pb-40 md:pb-48">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-visible bg-black">
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-80"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
          onError={(e) => {
            console.error('Video error:', e);
            const video = e.target as HTMLVideoElement;
            const errorDetails = {
              error: video.error,
              networkState: video.networkState,
              readyState: video.readyState,
              src: video.currentSrc,
              sources: Array.from(video.querySelectorAll('source')).map(s => ({
                src: s.src,
                type: s.type
              }))
            };
            console.error('Video error details:', errorDetails);
            // Update the debug status display
            const statusElement = document.getElementById('video-status');
            if (statusElement) {
              statusElement.textContent = `Failed to load video: ${video.error?.message || 'Unknown error'}`;
              statusElement.className = 'text-red-400';
            }
          }}
          onLoadedMetadata={() => console.log('Video metadata loaded')}
          onCanPlay={() => console.log('Video can play')}
          onLoadStart={() => console.log('Video load started')}
          onLoadedData={() => {
            console.log('Video loaded data');
            const statusElement = document.getElementById('video-status');
            if (statusElement) {
              statusElement.textContent = 'Video loaded, attempting to play...';
              statusElement.className = 'text-green-400';
            }
            videoRef.current?.play().catch(err => {
              console.error('Play error:', err);
              if (statusElement) {
                statusElement.textContent = `Play failed: ${err instanceof Error ? err.message : String(err)}`;
                statusElement.className = 'text-red-400';
              }
            });
          }}
        >
          <source 
            src={videoSource}
            type="video/mp4" 
            onError={(e) => console.error('Source error:', e)}
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" style={{ zIndex: 1 }} />
        {/* Debug info - remove in production */}
        <div className="absolute top-4 right-4 bg-black/70 text-white p-2 text-xs rounded z-50">
          Video Debug
          <div className="text-green-400" id="video-status">Loading...</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8">
          {/* Logo */}
          <div className="w-full max-w-4xl mb-8 md:mb-16">
            <div className="transform transition-all duration-500 mb-8">
              <img 
                src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
                alt="AGNW FEST 2026" 
                className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Full width LineupBar with adjusted spacing */}
          <div className="w-full mb-12 px-0">
            <LineupBar />
          </div>
        </div>
        
        {/* Bottom Gradient for Carousel */}
        <div className="h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;