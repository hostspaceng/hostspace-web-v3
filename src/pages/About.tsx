import { Globe, Shield, Zap, Heart } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stats = [
  {
    number: "99.99%",
    label: "Uptime SLA",
  },
  {
    number: "1000+",
    label: "Active Customers",
  },
  {
    number: "50M+",
    label: "Containers Deployed",
  },
  {
    number: "24/7",
    label: "Expert Support",
  },
];

const timeline = [
  {
    year: "2020",
    title: "HostSpace Web Hosting",
    description:
      "Initially launched, the platform focused on WordPress hosting, static site hosting, and affiliate domain purchases for other businesses.",
  },
  {
    year: "2023",
    title: "HostSpace Cloud Solutions",
    description:
      "Launched cloud consulting to optimize infrastructure and cut costs for businesses and organisations.",
  },
  {
    year: "2024",
    title: "HostSpace Kubernetes Engine",
    description:
      "Launched enterprise-grade Kubernetes solutions for seamless scaling.",
  },
  {
    year: "2024",
    title: "HostSpace Container Services",
    description:
      "Launched our first product for one-click app and service deployment.",
  },

  {
    year: "2025",
    title: "Managed Databases",
    description:
      "Launching fully managed database solutions for seamless operations.",
  },
  {
    year: "2025",
    title: "Monitoring As A Service",
    description:
      "Introducing comprehensive monitoring solutions for proactive management.",
    upcoming: true,
  },
];

const values = [
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "We put our customers first in everything we do, ensuring their success is our success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We constantly push boundaries to create cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "We prioritize the security and reliability of our infrastructure.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "We're building technology that empowers businesses worldwide.",
  },
];

export function AboutPage() {
  const [heroRef, heroInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [missionRef, missionInView] = useInView();
  const [timelineRef, timelineInView] = useInView();
  const [valuesRef, valuesInView] = useInView();

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
              Building the Future of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Cloud Infrastructure
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make cloud infrastructure accessible,
              reliable, and scalable for businesses across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-24 relative ${statsInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className={`py-24 relative ${missionInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At HostSpace, we believe that every business deserves access
                  to world-class cloud infrastructure. We're building the tools
                  and platforms that enable companies of all sizes to harness
                  the power of cloud computing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our focus on simplicity, reliability, scalability, and
                  empowering our partners and users to pay in their local
                  currency has made us the trusted partner for businesses across
                  Nigeria, Africa, and the world. And we're just getting
                  started.
                </p>
              </div>
            </div>
            <div>
              <div className="relative fade-in hover-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=800"
                  alt="Team Collaboration"
                  className="relative rounded-xl shadow-2xl border border-white/10 hover-lift"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          valuesInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className={`py-24 relative ${timelineInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform cloud infrastructure
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className="relative">
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-blue-600" />
                  </div>
                  <div
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="bg-background/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
                        <div className="text-sm font-medium text-blue-600 mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {event.title}
                          {event.upcoming && (
                            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section
        ref={teamRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          teamInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people behind HostSpace's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl text-center hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Want to be part of our journey?
            </p>
            <a
              href="/careers"
              className="cta-button inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
            >
              Join Our Team <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
