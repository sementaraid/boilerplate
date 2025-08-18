export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "The Art of Simple Design",
    excerpt:
      "Exploring how minimalism in design can lead to better user experiences and cleaner interfaces that focus on what truly matters.",
    content: `
      <h2>Why Simple Design Matters</h2>
      <p>In a world full of distractions, simple design cuts through the noise. It allows users to focus on what's important without being overwhelmed by unnecessary elements.</p>
      
      <h2>Principles of Minimalism</h2>
      <p>Good design is often about what you leave out, not what you put in. Every element should serve a purpose and contribute to the overall user experience.</p>
      
      <h2>The Power of White Space</h2>
      <p>White space isn't empty space – it's breathing room for your content. It helps guide the eye and creates a sense of elegance and sophistication.</p>
      
      <h2>Typography That Works</h2>
      <p>Clean typography is the foundation of readable content. Choose fonts that are easy to read and create a clear hierarchy with your headings and body text.</p>
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Building Better Reading Experiences",
    excerpt:
      "How to create digital content that's comfortable to read and keeps users engaged from start to finish.",
    content: `
      <h2>The Science of Reading</h2>
      <p>Reading on screen is different from reading on paper. Understanding how our eyes process digital text helps us create better experiences.</p>
      
      <h2>Line Length and Spacing</h2>
      <p>The optimal line length for reading is between 45-75 characters. Too short and the eye has to jump too often; too long and it's hard to track back to the beginning of the next line.</p>
      
      <h2>Contrast and Color</h2>
      <p>Sufficient contrast between text and background is crucial for readability. Dark text on light backgrounds generally works best for long-form content.</p>
      
      <h2>Breaking Up Content</h2>
      <p>Use headings, paragraphs, and white space to break up long blocks of text. This makes content more scannable and less intimidating.</p>
    `,
    date: "March 10, 2024",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "The Future of Clean Web Design",
    excerpt:
      "Looking ahead at trends that prioritize user experience over flashy effects and complex animations.",
    content: `
      <h2>Less is More</h2>
      <p>The future of web design is moving towards cleaner, more focused experiences. Users want to accomplish their goals quickly and efficiently.</p>
      
      <h2>Performance Matters</h2>
      <p>Fast-loading sites with clean code are becoming more important than ever. Users won't wait for heavy animations or complex layouts to load.</p>
      
      <h2>Accessibility First</h2>
      <p>Designing for accessibility from the start creates better experiences for everyone. Simple, clean designs are often more accessible by default.</p>
      
      <h2>Content-Driven Design</h2>
      <p>The best designs let the content shine. The design should support and enhance the message, not distract from it.</p>
    `,
    date: "March 5, 2024",
    readTime: "3 min read",
  },
];
