import {
  ArrowRight,
  Building2,
  Users,
  Heart,
  Zap,
  Globe,
  BookOpen,
  Coffee,
  Bike,
  Gift,
  Laptop,
  Plane,
  Smile,
  BadgeCheck,
  Wifi,
  WifiIcon,
  Search,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const departments = [
  {
    name: "Engineering",
    positions: [
      // {
      //   title: "Senior DevOps Engineer",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Join our platform team to build and maintain our cloud infrastructure.",
      // },
      // {
      //   title: "Senior Frontend Engineer",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Create beautiful and performant user interfaces for our cloud platform.",
      // },
      // {
      //   title: "Backend Engineer",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Build scalable backend services and APIs for our cloud platform.",
      // },
    ],
  },
  {
    name: "Product & Design",
    positions: [
      // {
      //   title: "Product Manager",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Drive product strategy and roadmap for our cloud services.",
      // },
      // {
      //   title: "UI/UX Designer",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Design intuitive and beautiful interfaces for our cloud platform.",
      // },
    ],
  },
  {
    name: "Sales & Marketing",
    positions: [
      // {
      //   title: "Technical Sales Engineer",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Help customers understand and implement our cloud solutions.",
      // },
      // {
      //   title: "Content Marketing Manager",
      //   type: "Full-time",
      //   location: "Remote (Nigeria)",
      //   description:
      //     "Create compelling content to drive awareness and adoption.",
      // },
    ],
  },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "We put our customers at the heart of everything we do, ensuring their success is our success.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "We believe in rapid iteration and continuous improvement to stay ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Build with Care",
    description:
      "We take pride in our work and pay attention to every detail in our products.",
  },
  {
    icon: Globe,
    title: "Think Global",
    description:
      "We build for a global audience while understanding local needs and challenges.",
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Work from anywhere in Nigeria with flexible hours.",
  },
  {
    icon: Gift,
    title: "Competitive Pay",
    description: "Attractive salary packages with equity options.",
  },
  {
    icon: Plane,
    title: "Paid Time Off",
    description: "Generous vacation policy and paid public holidays.",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences.",
  },
  {
    icon: WifiIcon,
    title: "Internet Allowance",
    description: "Generous Monthly Budget for your Internet or Wi-Fi.",
  },
  {
    icon: Bike,
    title: "Wellness Program",
    description: "Monthly wellness allowance for gym, yoga, or meditation.",
  },
];

export function CareersPage() {
  const [heroRef, heroInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [benefitsRef, benefitsInView] = useInView();
  const [positionsRef, positionsInView] = useInView();
  const [activeDepartment, setActiveDepartment] = useState("Engineering");

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
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-600">
              We're Hiring!
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Join Us in Building the
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Future of Cloud
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're looking for passionate individuals to help us revolutionize
              cloud infrastructure. Join our team and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="cta-button w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                View Open Positions{" "}
                <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 border border-border hover:border-foreground">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className={`py-24 relative ${valuesInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
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

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          benefitsInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take care of our team with competitive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        ref={positionsRef}
        className={`py-24 relative ${positionsInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help shape the future of cloud infrastructure
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.name}
                onClick={() => setActiveDepartment(dept.name)}
                className={`tab-button px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDepartment === dept.name
                    ? "active bg-blue-600 text-white"
                    : "bg-secondary hover:bg-secondary-foreground/10"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {departments
              ?.find((dept) => dept.name === activeDepartment)
              ?.positions.map((position) => (
                <div
                  key={position.title}
                  className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {position.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <button className="shrink-0 cta-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center justify-center">
                      Apply Now{" "}
                      <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                    </button>
                  </div>
                </div>
              ))}
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  No Open Positions
                </h3>
                <p className="text-muted-foreground mb-8">
                  We don't have any open positions in this department at the
                  moment. Please check back later.
                </p>
                {/* <button className="cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  Join Talent Pool{" "}
                  <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
