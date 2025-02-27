import { Calendar, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

// This would typically come from an API or CMS
const post = {
  title: 'The Future of Cloud Native Infrastructure',
  excerpt: 'Explore how cloud native technologies are reshaping the future of infrastructure and application deployment.',
  content: `
    <p>Cloud native technologies have revolutionized how we build and deploy applications. In this comprehensive guide, we'll explore the latest trends and best practices in cloud native infrastructure.</p>

    <h2>The Evolution of Cloud Infrastructure</h2>
    <p>Over the past decade, we've seen a dramatic shift in how organizations approach infrastructure management. The rise of containerization, microservices, and declarative APIs has fundamentally changed the landscape of modern application deployment.</p>

    <h2>Key Components of Cloud Native Architecture</h2>
    <p>A truly cloud native architecture encompasses several key components:</p>
    <ul>
      <li>Containerization and orchestration</li>
      <li>Service mesh for communication</li>
      <li>Declarative APIs</li>
      <li>Immutable infrastructure</li>
    </ul>

    <h2>Best Practices for Implementation</h2>
    <p>When implementing cloud native infrastructure, consider the following best practices:</p>
    <ol>
      <li>Start with containerization</li>
      <li>Implement robust monitoring</li>
      <li>Automate everything</li>
      <li>Use infrastructure as code</li>
    </ol>

    <h2>Looking Ahead</h2>
    <p>The future of cloud native infrastructure looks promising, with emerging trends in:</p>
    <ul>
      <li>Edge computing integration</li>
      <li>AI-driven operations</li>
      <li>Enhanced security measures</li>
    </ul>
  `,
  category: 'Cloud Infrastructure',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600',
  author: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    role: 'Cloud Infrastructure Lead',
    bio: 'Sarah has over 10 years of experience in cloud infrastructure and DevOps practices.'
  },
  date: 'Mar 15, 2024',
  readTime: '8 min read',
  tags: ['Cloud Native', 'Infrastructure', 'DevOps', 'Kubernetes', 'Containers'],
  relatedPosts: [
    {
      title: 'Kubernetes Best Practices for Production',
      excerpt: 'Learn essential best practices for running Kubernetes in production environments.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800&h=500',
      category: 'Kubernetes',
      date: 'Mar 12, 2024',
      readTime: '10 min read'
    },
    {
      title: 'Optimizing Container Resource Usage',
      excerpt: 'Tips and strategies for optimizing resource allocation in containerized environments.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500',
      category: 'DevOps',
      date: 'Mar 10, 2024',
      readTime: '6 min read'
    }
  ]
};

export function BlogPost() {
  const [heroRef, heroInView] = useInView();
  const [contentRef, contentInView] = useInView();
  const [authorRef, authorInView] = useInView();
  const [relatedRef, relatedInView] = useInView();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`relative pt-32 pb-20 overflow-hidden ${heroInView ? 'fade-in' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <a
              href="/blog"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </a>
            
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-600">
                {post.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {post.title}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium text-foreground">{post.author.name}</div>
                  <div className="text-xs">{post.author.role}</div>
                </div>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-8">
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[2/1] object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <section 
        ref={contentRef}
        className={`py-16 relative ${contentInView ? 'fade-in' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 not-prose">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engagement */}
              <div className="flex items-center gap-6 mt-8 not-prose">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Bookmark className="h-4 w-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <div 
                ref={authorRef}
                className={`bg-card border rounded-xl p-6 ${authorInView ? 'fade-in' : ''}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.author.bio}
                </p>
                <button className="w-full bg-primary text-primary-foreground rounded-full py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                  Follow
                </button>
              </div>

              {/* Related Posts */}
              <div 
                ref={relatedRef}
                className={`space-y-6 ${relatedInView ? 'fade-in' : ''}`}
              >
                <h3 className="font-semibold text-lg">Related Articles</h3>
                {post.relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.title} className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0" />
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="aspect-[2/1] object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}