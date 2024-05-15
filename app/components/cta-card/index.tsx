"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/hover-border-gradient";

export function CTACard({
  href = "/",
  target = "__blank",
  imgSrc = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  children,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  imgSrc?: string;
}) {
  return (
    <CardContainer className="inter-var h-[186px]">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="20" className="w-full h-full">
          <Image
            src={imgSrc}
            height="186"
            width="280"
            className="object-cover w-full h-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ={100}
          as={Link}
          href={href}
          target={target}
          className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center m-auto text-lg leading-normal text-primary-foreground bg-primary max-h-max"
        >
          <HoverBorderGradient containerClassName="" as="button" className="">
            <span>{children}</span>
          </HoverBorderGradient>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default CTACard;
