import { BreadcrumbPath } from "@/types/common";

const routeNameMap: Record<string, string> = {
  blog: "Blog",
  work: "Work",
  career: "Career",
  contact: "Contact Us",
  service: "Service",
};

export function getBreadcrumbs(pathname: string): BreadcrumbPath[] {
  if (!pathname || pathname === "/") {
    return [{ name: "Home", href: "/", active: true }];
  }

  const segments = pathname.split("/").filter(Boolean);
  const paths: BreadcrumbPath[] = [{ name: "Home", href: "/" }];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    
    // Check if the segment is a dynamic route parameter (e.g. numeric ID)
    const isNumeric = !isNaN(Number(segment));
    
    let displayName = "";
    if (isNumeric) {
      const parentSegment = index > 0 ? segments[index - 1] : "";
      if (parentSegment.toLowerCase() === "blog") {
        displayName = "Blog Details";
      } else if (parentSegment.toLowerCase() === "work") {
        displayName = "Work Details";
      } else {
        displayName = "Details";
      }
    } else {
      const lowerSegment = segment.toLowerCase();
      if (routeNameMap[lowerSegment]) {
        displayName = routeNameMap[lowerSegment];
      } else {
        // Fallback: replace hyphens with spaces and capitalize each word
        displayName = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }
    }

    paths.push({
      name: displayName,
      href: isLast ? undefined : currentPath,
      active: isLast,
    });
  });

  return paths;
}
