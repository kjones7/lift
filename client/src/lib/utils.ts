
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and Tailwind CSS classes efficiently,
 * handling conditional classes and resolving conflicts.
 * 
 * @param inputs - Array of class names, objects, or conditional expressions
 * @returns Merged and deduplicated class names string
 * 
 * @example
 * // Basic usage
 * cn("text-red-500", "bg-blue-500")
 * 
 * @example
 * // With conditional classes
 * cn(
 *   "base-style",
 *   isActive && "bg-blue-500",
 *   isBig ? "text-lg" : "text-sm"
 * )
 * 
 * @example
 * // Resolving Tailwind conflicts
 * cn(
 *   "text-gray-500", // Will be overridden
 *   "p-4", // Base padding
 *   isLarge && "p-6", // Conditional padding override
 *   error && "text-red-500" // Conditional text color override
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
