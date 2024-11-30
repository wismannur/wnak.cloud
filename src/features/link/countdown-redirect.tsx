"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CountdownRedirectProps {
  destination: string;
  text: string;
}

export function CountdownRedirect({
  destination,
  text,
}: CountdownRedirectProps) {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push(destination);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [destination, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Redirecting... to {text}</h1>
      <p className="text-xl mb-8">
        You will be redirected in {countdown} seconds
      </p>
      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-1000 ease-linear rounded-full"
          style={{ width: `${(countdown / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
