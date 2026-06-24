import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resume Builder — Create a Professional Resume in Minutes" },
      { name: "description", content: "Build a polished, professional resume with live preview, multiple themes, and one-click PDF download." },
      { property: "og:title", content: "Resume Builder" },
      { property: "og:description", content: "Build a polished, professional resume with live preview, themes, and PDF download." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/resume-builder.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
      Loading Resume Builder…
    </div>
  );
}
