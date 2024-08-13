import React from 'react'

interface AnchorProps {
  href: string
  label: string
}

const Anchor: React.FC<AnchorProps> = ({ href, label }: AnchorProps) => {
  href
  return <a className='text-tertiary font-normal text-sm underline hover:cursor-pointer'>{label}</a>
}

export default Anchor
