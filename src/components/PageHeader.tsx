
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradientFrom: string;
  gradientTo: string;
}

const PageHeader = ({ title, subtitle, gradientFrom, gradientTo }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Festival Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        {/* Enhanced overlay for better contrast */}
        <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 dark:from-black/70 dark:via-black/50 dark:to-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo} drop-shadow-lg`}>
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
