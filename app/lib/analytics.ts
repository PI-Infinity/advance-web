import { logEvent } from "firebase/analytics";
import { initAnalytics } from "./firebase";

export async function trackDownload(platform: "ios" | "android") {
  const analytics = await initAnalytics();
  if (!analytics) return;

  logEvent(analytics, "download_click", { platform });
}
