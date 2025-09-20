// TopMarqueeWrapper.tsx (Server Component)
// import TopMarqueeClient from "./TopMarqueeClient";

// export default async function TopMarqueeWrapper() {
//   try {
//     const res = await fetch(`${process.env.SITE_URL}/api/announcement`, {
//       next: { revalidate: 60 }, // ISR: refresh every 60s
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch announcement");
//     }

//     const data = await res.json();
//     const announcement = data.success && data.announcement?.text
//       ? data.announcement.text
//       : "Welcome to Delfyle";

//     return <TopMarqueeClient announcement={announcement} />;
//   } catch {
//     return <TopMarqueeClient announcement="Welcome to Delfyle" />;
//   }
// }


// TopMarqueeWrapper.tsx (Server Component)
import TopMarqueeClient from "./TopMarqueeClient";
import { dbConnect } from "@/lib/dbConnect";
import Announcement from "@/models/Announcement";

export default async function TopMarqueeWrapper() {
  try {
    await dbConnect(); // connect to MongoDB

    const announcementDoc = await Announcement.findOne().sort({ updatedAt: -1 });
    const announcement = announcementDoc?.text || "Welcome to Delfyle";

    return <TopMarqueeClient announcement={announcement} />;
  } catch (error) {
    console.error("Failed to fetch announcement:", error);
    return <TopMarqueeClient announcement="Welcome to Delfyle" />;
  }
}
