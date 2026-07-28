export default function Footer() {
  return (
    <footer className="bg-background text-muted py-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aadarsh Ravi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
