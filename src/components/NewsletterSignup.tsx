
import { useState } from 'react';
import { FaEnvelope, FaCheck, FaSpinner } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thanks for signing up! You\'ll be the first to know about tickets and lineup announcements.');
      setEmail('');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-400/30">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">STAY IN THE LOOP</h3>
        <p className="text-gray-300">Be the first to know about tickets, lineup announcements, and exclusive offers</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-black font-bold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <FaSpinner className="animate-spin" />
                <span>SIGNING UP...</span>
              </>
            ) : status === 'success' ? (
              <>
                <FaCheck />
                <span>SIGNED UP!</span>
              </>
            ) : (
              <span>SIGN UP</span>
            )}
          </button>
        </div>
        
        {message && (
          <div className={`p-4 rounded-lg text-center ${
            status === 'success' 
              ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
              : 'bg-red-500/20 text-red-400 border border-red-400/30'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;
