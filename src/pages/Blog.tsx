import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { extractFirstParagraph } from "@/lib/helpers/removeHTMLTags";
import { BlogLoadingSkeleton } from "@/components/BlogLoadingSkeleton";
import { Link } from "react-router-dom";

export interface BlogPost {
  guid: string;
  link: string;
  title: string;
  content: string;
  description: any;
  author: string;
  pubDate: string;
  categories: string[];
}

export function BlogPage() {
  const [heroRef, heroInView] = useInView();
  const [featuredRef, featuredInView] = useInView();
  const [postsRef, postsInView] = useInView();
  const [newsletterRef, newsletterInView] = useInView();
  const [blogs, setBlogs] = useState<{
    feed: { link: string };
    items: BlogPost[];
  }>();
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/HostSpaceng&api_key=vwuasxg9iloky36e5wienphw61n0vfvxpmz9ov9s&count=${20}`,
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
        const allCats = [
          ...new Set(data.items.flatMap((item: BlogPost) => item.categories)),
        ];
        setCategories(allCats as string[]);

        console.log(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getBlogs();
  }, []);

  const processedBlogs = blogs?.items?.map((blog: any) => {
    const firstParagraph = extractFirstParagraph(blog?.content); // Use the new function
    return { ...blog, content: firstParagraph };
  });

  const filteredBlogs = processedBlogs?.filter((blog) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      blog?.title?.toLowerCase().includes(lowerCaseQuery) ||
      blog?.author?.toLowerCase().includes(lowerCaseQuery) ||
      blog?.content?.toLowerCase().includes(lowerCaseQuery);

    const matchesCategory =
      activeCategory === "All Posts" ||
      blog.categories.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

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
          {isLoading ? (
            <BlogLoadingSkeleton />
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredBlogs?.slice(0, 2).map((blog) => (
                <article key={blog.title} className="group text-left">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10" />
                    <img
                      src={blog?.description?.match(/<img.*?src="(.*?)"/)[1]}
                      alt={blog.title}
                      className="aspect-[2/1] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      {blog.categories.slice(0, 3).map((category: string) => (
                        <span className="capitalize mr-1.5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border flex items-center justify-center p-1.5 overflow-hidden">
                          {blog.author
                            .split(" ")
                            .map((word: string) => word[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                        <span className="text-sm font-medium">
                          {blog.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {blog.pubDate}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {blog.content}
                    </p>
                    <Link to={blog.link}>
                      <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All Posts */}
      <section
        ref={postsRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          postsInView ? "fade-in" : ""
        }`}
      >
        {isLoading ? (
          <BlogLoadingSkeleton />
        ) : (
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Sidebar */}
              <div className="w-full md:w-64 shrink-0 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-2 h-96 overflow-scroll">
                    {categories?.map((category) => {
                      const count = blogs?.items?.filter((blog) =>
                        blog.categories.includes(category)
                      ).length;

                      return (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`capitalize block w-full text-left px-4 py-2 rounded-md  ${
                            activeCategory === category
                              ? "bg-blue-600 text-white"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {category}{" "}
                          <span className="font-mono text-xs"> ({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredBlogs?.slice(2).map((blog) => (
                    <article key={blog.title} className="group text-left">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10" />
                        <img
                          src={
                            blog?.description?.match(/<img.*?src="(.*?)"/)[1]
                          }
                          alt={blog.title}
                          className="aspect-[2/1] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-20">
                          {blog.categories
                            .slice(0, 3)
                            .map((category: string) => (
                              <span className="capitalize mr-1.5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                                {category}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <div className="w-full h-full object-cover border p-1 rounded-full text-center flex items-center justify-center">
                                <span className="text-muted-foreground text-xs">
                                  {blog.author
                                    .split(" ")
                                    .map((word: string) => word[0])
                                    .join("")
                                    .toUpperCase()}
                                </span>
                              </div>
                            </div>
                            <span className="text-sm font-medium">
                              {blog.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {blog.pubDate}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {blog.content}
                        </p>
                        <Link to={blog.link}>
                          <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read More <ArrowRight className="h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link to={blogs?.feed?.link ?? "#"}>
                    <button className="cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                      Go to Medium
                      <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className={`py-24 relative hidden ${newsletterInView ? "fade-in" : ""}`}
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
