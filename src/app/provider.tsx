"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default Provider;