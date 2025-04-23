import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-white/10 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-principal border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
 