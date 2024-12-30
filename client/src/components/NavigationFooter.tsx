import { Link, useLocation } from "wouter";
import { History, Dumbbell, ListTodo } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationFooter() {
  const [location] = useLocation();

  const items = [
    {
      icon: History,
      label: "History",
      href: "/history",
    },
    {
      icon: Dumbbell,
      label: "Workout",
      href: "/",
    },
    {
      icon: ListTodo,
      label: "Exercises",
      href: "/exercises",
    },
  ];

  /**
   * Navigation Footer.
   *
   * - Dark background with a backdrop-blur so that content behind the footer creates a "frosted glass" effect (for modern browsers that support it).
   * - The footer is at a fixed position at the bottom of the page.
   */
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-gray-950/90 backdrop-blur supports-[backdrop-filter]:bg-gray-950/75">
      <div className="flex h-16">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex-1 flex flex-col items-center justify-center gap-1",
              "text-sm text-gray-400 hover:text-gray-50 transition-colors",
              location === item.href && "text-gray-50",
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
