"use client";

import Link from "next/link";
import "./globals.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white px-6">
      <div className="text-center max-w-md">
        {/* Icon-like circle */}
        <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
          <div className="w-6 h-6 rounded-full bg-red-500" />
        </div>

        {/* Error Title */}
        <h1 className="text-6xl font-bold text-gray-900">Oops</h1>

        {/* Subtitle */}
        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500 leading-relaxed">
          An unexpected error occurred. Please try again or return to the home
          page.
        </p>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {/* Retry */}
          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            Try again
          </button>

          {/* Home */}
          <Link
            href="/"
            className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
