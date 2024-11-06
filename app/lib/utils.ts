import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to combine.
 * @returns The combined class names as a string.
 * @example cn("c-custom-class", "text-white", someState && "bg-black");
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves the preferred language of the user's browser.
 * If the `navigator.languages` array is available, it returns the first language in the array.
 * Otherwise, it returns the value of `navigator.language` or "no" if it's not available.
 * @returns The preferred language of the user's browser. eg en-US, en, no, nb-NO, etc.
 * @author Peter Mortensen
 * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages
 */
export const getNavigatorLanguage = () => {
  if (typeof window === "undefined") {
    return "no";
  } else {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.language || "no";
    }
  }
};
