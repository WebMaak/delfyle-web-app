// TopMarqueeWrapper.tsx (Server Component)
import TopMarqueeClient from "./TopMarqueeClient";

export default async function TopMarqueeWrapper() {
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/announcement`, {
      next: { revalidate: 60 }, // ISR: refresh every 60s
    });

    if (!res.ok) {
      throw new Error("Failed to fetch announcement");
    }

    const data = await res.json();
    const announcement = data.success && data.announcement?.text
      ? data.announcement.text
      : "Welcome to Delfyle";

    return <TopMarqueeClient announcement={announcement} />;
  } catch {
    return <TopMarqueeClient announcement="Welcome to Delfyle" />;
  }
}
