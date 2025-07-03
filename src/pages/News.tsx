
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "15 December 2024",
      time: "2 min read",
      title: "AGNW FEST 2026 Officially Announced",
      excerpt: "We're thrilled to announce the inaugural AGNW FEST coming to Stranraer in May 2026. This exciting new festival will bring world-class music to the heart of Scotland.",
      category: "Announcement"
    },
    {
      date: "10 December 2024",
      time: "3 min read",
      title: "Agnew Park Confirmed as Festival Venue",
      excerpt: "The beautiful Agnew Park in Stranraer has been confirmed as the stunning backdrop for AGNW FEST 2026, offering the perfect setting for an unforgettable festival experience.",
      category: "Venue"
    },
    {
      date: "5 December 2024",
      time: "1 min read",
      title: "Sustainability at the Heart of AGNW FEST",
      excerpt: "Learn about our commitment to making AGNW FEST one of the most sustainable festivals in Scotland, with green initiatives planned from day one.",
      category: "Sustainability"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="NEWS"
        subtitle="Stay up to date with the latest AGNW FEST announcements"
        gradientFrom="from-blue-500"
        gradientTo="to-purple-600"
      />

      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {newsItems.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.time}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.excerpt}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-12 rounded-xl border border-blue-400/30"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Stay Updated</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Don't miss out on the latest news and announcements. Follow us on social media for real-time updates.
              </p>
              <a 
                href="mailto:info@agnwfestival.co.uk"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Subscribe to Newsletter
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
