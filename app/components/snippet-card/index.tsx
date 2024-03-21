import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type SnippetCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  slotFooter: React.ReactNode;
};

export default function SnippetCard({
  title,
  description,
  children,
  slotFooter,
}: SnippetCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter>
        <p>{slotFooter}</p>
      </CardFooter>
    </Card>
  );
}
