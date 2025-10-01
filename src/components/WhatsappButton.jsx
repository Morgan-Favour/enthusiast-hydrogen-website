'use client'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348000000000" // 👈 replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
