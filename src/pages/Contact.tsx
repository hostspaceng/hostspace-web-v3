import {
  Mail,
  MapPin,
  Globe,
  MessageSquare,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Our friendly team is here to help.",
    value: "admin@hostspacecloud.com",
    link: "mailto:admin@hostspacecloud.com",
  },
  // {
  //   icon: Phone,
  //   title: "Phone",
  //   description: "Mon-Fri from 8am to 5pm.",
  //   value: "+234 (800) 123-4567",
  //   link: "tel:+2348001234567",
  // },
  {
    icon: MapPin,
    title: "Office",
    description: "Come say hello at our office.",
    value: "Lagos, Nigeria",
    link: "#",
    // link: "https://maps.google.com",
  },
];

const faqs = [
  {
    question: "How quickly can I deploy my first container?",
    answer:
      "You can deploy your first container in less than 5 minutes. Our platform provides a simple, intuitive interface for quick deployments.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer 24/7 technical support through email and chat. Enterprise customers get additional phone support and dedicated account managers.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we provide custom solutions tailored to your specific needs. Contact our sales team to discuss your requirements.",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "We implement industry-standard security practices including encryption, firewalls, and regular security audits to protect your data.",
  },
];

export function ContactPage() {
  const [heroRef, heroInView] = useInView();
  const [methodsRef, methodsInView] = useInView();
  const [formRef, formInView] = useInView();
  const [faqRef, faqInView] = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    user_phone: "",
    message: "",
    to_name: "HostSpace Admin",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    from_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors: any = {
      from_name: formData.from_name ? "" : "Full Name is required.",
      user_phone: formData.user_phone ? "" : "Phone Number is required.",

      user_email: /^\S+@\S+\.\S+$/.test(formData.user_email)
        ? ""
        : "A valid Email Address is required.",
      message: formData.message ? "" : "Message cannot be empty.",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    emailjs
      .send(
        "service_pofnd1f",
        "template_meemdp8",
        formData,
        "F_nIEl5I8_V857t1G"
      )
      .then(
        (response) => {
          console.log(response);
          setIsSubmitting(false);
          toast({ title: "Message sent successfully!" });
          setFormData({
            from_name: "",
            user_email: "",
            user_phone: "",
            message: "",
            to_name: "HostSpace Admin",
          });
          setErrors({
            from_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setIsSubmitting(false);
          toast({ title: "Failed to send message. Please try again later." });
        }
      );
  };

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
              Get in Touch
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Let's Start a
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Conversation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our platform? Want to learn more about our
              services? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section
        ref={methodsRef}
        className={`py-24 relative ${methodsInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.link}
                  className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        ref={formRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          formInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Send us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
                  />
                  {errors.from_name && (
                    <p className="text-red-500 font-mono text-xs mt-1">
                      {errors.from_name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
                  />
                  {errors.user_email && (
                    <p className="text-red-500 font-mono text-xs mt-1">
                      {errors.user_email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
                  />
                  {errors.user_phone && (
                    <p className="text-red-500 font-mono text-xs mt-1">
                      {errors.user_phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 font-mono text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  Send Message
                  {isSubmitting ? (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </button>
              </form>
            </div>

            <div className="lg:pl-12 lg:border-l border-border">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Find quick answers to common questions about our services.
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover-lift"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section
        ref={faqRef}
        className={`py-24 relative ${faqInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Live Chat Support
                </h3>
                <p className="text-muted-foreground">
                  Get instant help from our technical support team through live
                  chat.
                </p>
              </div>
            </div>

            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  24/7 Availability
                </h3>
                <p className="text-muted-foreground">
                  Our support team is available round the clock to assist you.
                </p>
              </div>
            </div>

            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Support</h3>
                <p className="text-muted-foreground">
                  Support available in multiple languages across different time
                  zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
