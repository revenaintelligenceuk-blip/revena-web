import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}

export default function Section({ children, className, id, muted }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 px-4 sm:px-6 lg:px-8",
        muted ? "bg-cream" : "bg-white",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
