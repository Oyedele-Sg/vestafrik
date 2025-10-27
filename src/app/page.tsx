import HomeComposer from "./_home";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  const content = getHomeContent();
  return <HomeComposer content={content} />;
}
