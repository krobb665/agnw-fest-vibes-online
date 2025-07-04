export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "AGNW Fest 2026: First Wave of Artists Announced",
    excerpt: "We're thrilled to reveal the first wave of artists joining us for AGNW Fest 2026, including headliners The Script and Biffy Clyro.",
    date: "2025-06-15",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    category: "Announcement",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "New Stage Added to AGNW Fest 2026",
    excerpt: "Due to popular demand, we're adding a brand new stage to this year's festival, featuring up-and-coming local talent.",
    date: "2025-06-10",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    category: "News",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Sustainability Initiatives for AGNW Fest 2026",
    excerpt: "Learn about our commitment to sustainability and the new green initiatives we're implementing this year.",
    date: "2025-06-05",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Food & Drink Vendors Announced",
    excerpt: "Discover the delicious food and drink options that will be available at this year's festival, featuring local favorites and international cuisine.",
    date: "2025-05-28",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    category: "Food & Drink",
    readTime: "4 min read"
  }
];
