const Header = () => {
  return (
    <header className="border-b border-border bg-background fixed top-0 w-full z-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <a
          href="/"
          className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Simple Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
