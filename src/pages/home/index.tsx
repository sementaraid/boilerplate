import type { Route } from "./+types";
import BlogPost from "../../components/post"
import {blogPosts} from "./data"

const loader = async ({ params }: Route.LoaderArgs) => {
  let team = await Promise.resolve({ name: "React Router Team" });
  return { name: team.name };
}

const Home = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Latest Posts
        </h1>
        <p className="text-muted-foreground">
          Thoughts on design, development, and creating better digital
          experiences.
        </p>
      </div>

      <div className="bg-blog-section border border-blog-section-border rounded-lg p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogPost
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                />
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-background/50 rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                About
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Welcome to my blog where I share insights on design,
                development, and creating meaningful digital experiences.
              </p>
            </div>

            <div className="bg-background/50 rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Recent Topics
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                  React
                </span>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full ml-2">
                  TypeScript
                </span>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                  Design Systems
                </span>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full ml-2">
                  UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export { loader }
export default Home;