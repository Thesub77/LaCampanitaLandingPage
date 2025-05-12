"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-6 w-6 text-amber-900" /> : <Menu className="h-6 w-6 text-amber-900" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100"
          >
            <nav className="flex flex-col p-4">
              <Link
                href="#proceso"
                className="py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-md"
                onClick={closeMenu}
              >
                Proceso
              </Link>
              <Link
                href="#certificaciones"
                className="py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-md"
                onClick={closeMenu}
              >
                Certificaciones
              </Link>
              <Link
                href="#testimonios"
                className="py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-md"
                onClick={closeMenu}
              >
                Testimonios
              </Link>
              <Link
                href="#contacto"
                className="py-3 px-4 mt-2 bg-amber-500 text-amber-950 rounded-md hover:bg-amber-600 transition-colors text-center"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
