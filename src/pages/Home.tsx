import { ArrowRight, Quote, Calendar, User } from "lucide-react";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { extractFirstParagraph } from "@/lib/helpers/removeHTMLTags";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";

export function HomePage() {
  const [heroRef, heroInView] = useInView();
  const [partnersRef, partnersInView] = useInView();
  const [containerRef, containerInView] = useInView();
  const [kubernetesRef, kubernetesInView] = useInView();
  const [databasesRef, databasesInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [blogRef, blogInView] = useInView();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/hostspaceng",
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
        const unProcessedblogs = await response.json();
        const processedBlogs = unProcessedblogs?.items?.map((post: any) => {
          const firstParagraph = extractFirstParagraph(post.content); // Use the new function
          return { ...post, content: firstParagraph };
        });

        setBlogs(processedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    getBlogs();
  }, []);
  return (
    <main className="flex-1 w-full md:max-w-[1200px] mx-auto px-6 pt-48 pb-24">
      <div>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`section-fade-in ${
            heroInView ? "in-view" : ""
          } text-center space-y-8`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Cloud Solutions Built for
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Speed, Security, and Scalability
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deploy, manage, and scale your applications effortlessly with our
            powerful Kubernetes and container services.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <Link to="https://ui.hostspacecloud.com/login" target="_blank">
              <button className="cta-button w-full sm:w-auto bg-primary text-primary-foreground px-4 md:px-8 py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                Start Free Trial{" "}
                <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
              </button>
            </Link>
            <Link to="/pricing">
              <button className="w-full sm:w-auto px-4 md:px-8 py-4 rounded-full text-sm md:text-base font-medium transition-colors duration-300 border border-border hover:border-foreground">
                View Pricing
              </button>
            </Link>
          </div>
        </section>

        {/* Partners Section */}
        <section
          ref={partnersRef}
          className={`section-fade-in ${partnersInView ? "in-view" : ""} mt-24`}
        >
          <p className="text-sm font-medium text-muted-foreground text-center mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <InfiniteSlider />
        </section>

        {/* Product Showcase Section */}
        <section
          ref={containerRef}
          className={`section-fade-in ${
            containerInView ? "in-view" : ""
          } mt-32 relative`}
        >
          <div className="bg-opacity-0 relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 text-left ">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-600">
                  HostSpace Container Services
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Powerful Container Management
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    Made Simple
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience seamless container orchestration with our intuitive
                  dashboard. Monitor, scale, and manage your applications and
                  services with just a few clicks.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Real-time monitoring and alerts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Automated scaling and load balancing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      One-click deployments and rollbacks
                    </span>
                  </li>
                </ul>
                <Link to="products/container-service">
                  <button className="mt-4 cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative fade-in hover-float">
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-xl blur-3xl" /> */}
                {/* <div className="h-[400px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center"> */}
                <img
                  src="/mockups/hcs-mockup-1.png"
                  className="object-contain rounded-2xl  flex items-center justify-center"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Kubernetes Engines Section */}
        <section
          ref={kubernetesRef}
          className={`section-fade-in ${
            kubernetesInView ? "in-view" : ""
          } mt-40 relative`}
        >
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1">
              <div className="relative fade-in hover-float">
                <img
                  src="/mockups/HKE-mockup-4.png"
                  className="object-contain rounded-2xl  flex items-center justify-center"
                />
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-600/10 text-purple-600">
                  HostSpace Kubernetes Engine
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Enterprise-Grade
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Kubernetes Engines
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deploy and manage production-ready Kubernetes clusters with
                  enterprise-grade security, monitoring, and support.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Multi-cluster management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-pink-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Advanced security controls
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      24/7 enterprise support
                    </span>
                  </li>
                </ul>
                <Link to="products/kubernetes-engine">
                  <button className="mt-4 cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Managed Databases Section */}
        <section
          ref={databasesRef}
          className={`section-fade-in ${
            databasesInView ? "in-view" : ""
          } mt-40 relative`}
        >
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-emerald-600/10 text-emerald-600">
                  HostSpace Managed Databases
                  {/* <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                    Coming Soon
                  </span> */}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Fully Managed
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                    Database Solutions
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Focus on your applications while we handle the complexities of
                  database management, scaling, and maintenance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Automated backups and recovery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      High availability and replication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    </div>
                    <span className="ml-3 text-muted-foreground">
                      Automatic scaling and optimization
                    </span>
                  </li>
                </ul>
                <Link to="products/managed-databases">
                  <button className="mt-4 cta-button bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative fade-in hover-float">
                <div className="h-[400px] justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-end  px-[-10px]">
                  {/* <img src="/icons/HCS.svg" className="h-32 w-32" /> */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-xl blur-3xl" />
                  <img
                    src="/mockups/HMD-mockup-1.png"
                    className="object-contain   flex items-center justify-center w-[90%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={testimonialsRef}
          className={`section-fade-in ${
            testimonialsInView ? "in-view" : ""
          } mt-40 relative`}
        >
          <div className="relative">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See what our clients say about their experience with HostSpace
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Testimonial 1 */}
              <div className="text-left relative bg-background/20 backdrop-blur-xl border border-white/10 shadow-xl p-4 md:p-8 rounded-xl">
                <div className="absolute -top-4 -left-4">
                  <Quote className="h-8 w-8 text-blue-600/20" />
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  HostSpace transformed our infrastructure and significantly
                  reduced our costs. Their expertise in DevOps helped us
                  optimize our systems, streamline processes, and leverage cloud
                  services effectively. We now have a scalable and
                  cost-efficient infrastructure that supports our growing
                  business. Highly recommend their services!
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-lg">
                    DS
                  </div>
                  <div>
                    <div className="font-semibold">Dami Sonoiki</div>
                    <div className="text-sm text-muted-foreground">
                      Chief Product & Data Officer, Helium Health
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="text-left relative bg-background/20 backdrop-blur-xl border border-white/10 shadow-xl p-4 md:p-8 rounded-xl">
                <div className="absolute -top-4 -left-4">
                  <Quote className="h-8 w-8 text-purple-600/20" />
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Working with HostSpace was a game-changer for us. Their team
                  understood our unique business requirements and proposed
                  innovative solutions to reduce our infrastructure costs. By
                  implementing their recommendations, we achieved substantial
                  savings while maintaining excellent performance. HostSpace is
                  our go-to partner for all our DevOps needs.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold text-lg">
                    R
                  </div>
                  <div>
                    <div className="font-semibold">Roberts</div>
                    <div className="text-sm text-muted-foreground">
                      CEO, Big-Byte E-commerce Solutions Ltd.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          ref={blogRef}
          className={`section-fade-in ${
            blogInView ? "in-view" : ""
          } mt-40 relative`}
        >
          <div className="relative">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Insights and updates from the world of cloud infrastructure and
                DevOps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs?.slice(0, 3)?.map((blog: any) => {
                return (
                  <article className="group text-left">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10" />
                      <img
                        src={blog.description.match(/<img.*?src="(.*?)"/)[1]}
                        alt={blog.title}
                        className="aspect-[4/2.5] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/90 text-white backdrop-blur-sm capitalize">
                          {blog.categories[0]}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {dayjs(blog.pubDate).format("MMM DD, YYYY")}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" /> {blog.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {blog.content}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button className="cta-button bg-primary text-primary-foreground px-8 py-8 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  View All Posts{" "}
                  <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
