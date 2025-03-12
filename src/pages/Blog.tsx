import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

const categories = [
  { name: "All Posts", count: 24 },
  { name: "Cloud Infrastructure", count: 8 },
  { name: "DevOps", count: 6 },
  { name: "Kubernetes", count: 5 },
  { name: "Security", count: 3 },
  { name: "Tutorials", count: 2 },
];

const featuredPosts = [
  {
    title: "The Future of Cloud Native Infrastructure",
    excerpt:
      "Explore how cloud native technologies are reshaping the future of infrastructure and application deployment.",
    category: "Cloud Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Kubernetes Best Practices for Production",
    excerpt:
      "Learn essential best practices for running Kubernetes in production environments, from security to monitoring.",
    category: "Kubernetes",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200&h=600",
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 12, 2024",
    readTime: "10 min read",
    featured: true,
  },
];

const posts = [
  {
    title: "Optimizing Container Resource Usage",
    excerpt:
      "Tips and strategies for optimizing resource allocation and usage in containerized environments.",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500",
    author: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 10, 2024",
    readTime: "6 min read",
  },
  {
    title: "Securing Your Cloud Infrastructure",
    excerpt:
      "A comprehensive guide to implementing security best practices in your cloud infrastructure.",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500",
    author: {
      name: "Aisha Patel",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 8, 2024",
    readTime: "12 min read",
  },
  {
    title: "Getting Started with Container Services",
    excerpt:
      "A beginner-friendly guide to understanding and working with container services.",
    category: "Tutorials",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800&h=500",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 5, 2024",
    readTime: "8 min read",
  },
  {
    title: "Monitoring Kubernetes Clusters",
    excerpt:
      "Learn how to set up effective monitoring for your Kubernetes clusters using modern tools.",
    category: "Kubernetes",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    },
    date: "Mar 3, 2024",
    readTime: "7 min read",
  },
];

export function BlogPage() {
  const [heroRef, heroInView] = useInView();
  const [featuredRef, featuredInView] = useInView();
  const [postsRef, postsInView] = useInView();
  const [newsletterRef, newsletterInView] = useInView();
  const [blogs, setBlogs] = useState();
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/HostSpaceng",
          {
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    getBlogs();
  }, []);

  console.log(blogs);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-32 pb-20 overflow-hidden ${
          heroInView ? "fade-in" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Insights from the
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Cloud Frontier
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest in cloud infrastructure, DevOps
              practices, and technology trends
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section
        ref={featuredRef}
        className={`py-24 relative ${featuredInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.title} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[2/1] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section
        ref={postsRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          postsInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category.name
                          ? "bg-blue-600 text-white"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs opacity-70">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article key={post.title} className="group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10" />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-[2/1] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  Load More Articles{" "}
                  <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className={`py-24 relative ${newsletterInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-16 lg:py-24 text-white text-center">
              <div className="mx-auto max-w-2xl space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Stay Updated with Cloud Insights
                </h2>
                <p className="text-lg text-blue-100">
                  Subscribe to our newsletter for the latest updates on cloud
                  infrastructure, DevOps practices, and technology trends.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-blue-100">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
