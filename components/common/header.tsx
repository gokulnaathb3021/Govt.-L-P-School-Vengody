"use client";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Suspense } from "react";
import CustomUserButton from "./custom-user-button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 bg-accent/95 backdrop-blur supports-backdrop-filter:bg-accent/60 print:hidden py-0 sm:py-4">
        <div className="wrapper">
          <div className="flex items-center justify-between h-22 sm:h-16">
            <div>
              <Menu
                className="size-6 sm:size-8 cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="flex items-center gap-0 sm:gap-3">
              <Image
                src="/Logo-nobg.svg"
                alt="School Logo"
                width={130}
                height={130}
                className="h-26 w-auto sm:h-36"
              />
              <h1 className="text-xs sm:text-2xl font-bold">
                GOVT L P SCHOOL VENGODY
              </h1>
            </div>
            <div className="flex flex-col gap-2 items-center sm:flex-row">
              <Suspense fallback={<div>Loading auth...</div>}>
                <SignedOut>
                  <SignInButton>
                    <Button
                      size="sm"
                      className="text-xs px-1 py-1 sm:text-sm sm:px-4 sm:py-2"
                    >
                      Tr Login
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="text-xs px-1 py-1 sm:text-sm sm:px-4 sm:py-2">
                      Tr Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <CustomUserButton />
                </SignedIn>
              </Suspense>
            </div>
          </div>
        </div>
      </header>
      {open && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          {/* sidebar */}
          <div className="fixed top-0 left-0 h-full w-50 sm:w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
            <button
              className="self-end text-sm cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Close
            </button>

            <Link
              href="/"
              className="text-lg font-medium hover:text-primary"
              onClick={() => {
                setOpen(false);
              }}
            >
              Home
            </Link>
            <SignedIn>
              <Link
                href="/explore"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Explore Students
              </Link>
              <Link
                href="/my-student"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                My-Student
              </Link>
            </SignedIn>
            <a
              href="#school_facilities"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              School facilities
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </>
      )}
    </>
  );
}
