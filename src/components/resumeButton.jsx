import React from 'react'

export default function ResumeButton() {
  return (
    <div>
      <a
  href="/resume.pdf"
  download
  className="mt-6 mb-10 inline-flex items-center gap-2 bg-cyan-400/10 backdrop-blur-md border border-cyan-400/40 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/20 transition-all duration-300"
>
  Download Resume ⬇
</a>

    </div>
  )
}
