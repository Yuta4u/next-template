"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b ">
      <div className="max-w-2xl w-full mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* 404 Icon */}
          <div className="relative">
            <Search className="w-32 h-32 mx-auto text-gray-400" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-600">
              404
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-600 sm:text-4xl">
              Page not found
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved or doesn't exist.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors dark:bg-white dark:hover:bg-slate-100 dark:text-zinc-900"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:hover:bg-zinc-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
