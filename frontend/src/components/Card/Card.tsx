// src/components/Card.tsx
import React from 'react'

interface CardProps {
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
      <div className='px-12 py-8'>{children}</div>
    </div>
  )
}

export default Card
