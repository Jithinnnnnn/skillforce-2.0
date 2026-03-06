import { LoadingOverlay } from "@/components/shared/LoadingOverlay";

export default function AppLoading() {
  // Next.js will render this between route transitions / suspense boundaries.
  return <LoadingOverlay isLoading />;
}


