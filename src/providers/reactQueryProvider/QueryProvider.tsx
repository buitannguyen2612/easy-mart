import { queryClient } from "@/providers/reactQueryProvider/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type React from "react";

interface QueryProviderProps {
  children?: React.ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
