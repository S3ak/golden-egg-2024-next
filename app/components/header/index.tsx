"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

import "./index.css";

export default function Header() {
  return (
    <motion.header
      className="flex items-center justify-between w-full py-2 pl-3 space-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Link
        href="/"
        className="flex w-[150px] h-[72px] justify-center items-center shrink-0"
      >
        <Image src="/Logo-Golden-Egg.png" width={150} height={72} alt="Logo" />
      </Link>

      <button
        data-cy="home-icon"
        className="hamburger-button w-[72px] h-[72px] p-4"
      >
        <FiMenu className="w-full h-full text-white" />
      </button>
    </motion.header>
  );
}
