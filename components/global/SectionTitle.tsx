import React from 'react'

function SectionTitle({ text, eyebrow }: { text: string; eyebrow?: string }) {
  return (
    <div className='mb-10 flex items-end justify-between gap-4 border-b pb-4'>
      <div>
        {eyebrow && <p className='eyebrow mb-3'>{eyebrow}</p>}
        <h2 className='text-4xl sm:text-5xl tracking-tight capitalize'>
          {text}
        </h2>
      </div>
    </div>
  )
}

export default SectionTitle
