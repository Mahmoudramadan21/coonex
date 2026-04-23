import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        {/* 404 Title */}
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}
