import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sketches/testSketch")({
  component: TestSketchComponent,
});

function TestSketchComponent() {
  return "Hello /sketches/testSketch!";
}
