import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-muted mb-4">
        404
      </p>
      <h1 className="text-display-sm font-display font-bold tracking-tight mb-6">
        Project not found
      </h1>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors"
      >
        <ArrowLeft size={16} /> Back to work
      </Link>
    </div>
  );
}
