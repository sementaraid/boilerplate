import { Link } from "react-router";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogPost = ({ id, title, excerpt, date, readTime }: BlogPostProps) => {
  return (
    <article className="group py-6 border-b border-border last:border-b-0">
      <Link to={`/post/${id}`} className="block">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <time>{date}</time>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed mb-3">
          {excerpt}
        </p>

        <div className="mt-2">
          <span className="text-primary text-xs font-medium group-hover:underline">
            Read more →
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
