import Link from "next/link";
import { Metadata } from "next";
import Navbar from "../components/ui/navbar";

export const metadata: Metadata = {
  title: "Flipkart SCOA — Home",
};

// Home page — minimal placeholder.

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Flipkart Supply Chain<br />
            <span style={{ color: "#2874F0" }}>Operations Academy</span>
          </h1>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
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
