import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export function SkeletonCard({ count }: { count?: number }) {
  const skeletons = Array.from({ length: count || 1 }).map((_, i) => (
    <Card
      className="hover:border-2 hover:border-black dark:hover:border-white"
      key={i}
    >
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[100px]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
    </Card>
  ));
  return <>{skeletons}</>;
}
