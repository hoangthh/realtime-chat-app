"use client";

import { useSocket } from "@/components/providers";
import { Badge } from "./ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected)
    return (
      <Badge variant="outline" className="border-none bg-yellow-600 text-white">
        Fallback: Polling every 1s
      </Badge>
    );

  return (
    <Badge variant="outline" className="border-none bg-emerald-600 text-white">
      Live: Real-time updates
    </Badge>
  );
};

export default SocketIndicator;
