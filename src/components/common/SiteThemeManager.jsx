import { useEffect } from "react";

/** The whole site uses the guide (cream/ink/gold) theme. */
export default function SiteThemeManager() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === "attributes" && m.attributeName === "data-site-theme") {
          const val = document.documentElement.getAttribute("data-site-theme");
          if (val !== "default") {
            document.documentElement.setAttribute("data-site-theme", "default");
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-site-theme"],
    });

    document.documentElement.setAttribute("data-site-theme", "default");

    return () => observer.disconnect();
  }, []);

  return null;
}
