import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/src/components/ui/navbar";

export const metadata: Metadata = {
  title: "Flipkart SCOA — Home",
};

// Home page — minimal placeholder.

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1
            className="font-display text-ink text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Flipkart Supply Chain<br />
            <span className="text-primary">Operations Academy</span>
          </h1>
          <p className="text-muted text-lg mb-8">
            Free training &amp; certification in e-commerce logistics, warehousing, and delivery operations.
          </p>
          <Link
            href="/login"
            className="btn-primary btn px-8 py-3.5 text-base inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
