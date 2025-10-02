import { QueryClient } from "@tanstack/react-query";

// Custom configuration for React Query
// This setup helps manage API request behavior effectively.
//
// Parameters:
// - retry: Automatically retries the request up to 'n' times if it fails.
// - refetchOnWindowFocus: If true, refetches data when the window regains focus.
// - staleTime: Duration (in milliseconds) during which fetched data is considered fresh.
//              Prevents unnecessary refetching within this time frame.

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minute
    },
  },
});
