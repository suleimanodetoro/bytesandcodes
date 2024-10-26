// app/blog/[slug]/components/ShareButtons.tsx
'use client'

import { Twitter, Facebook, Link as LinkIcon } from 'lucide-react'

export default function ShareButtons({ title }: { title: string }) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-secondary-600">Share:</span>
      <div className="flex gap-2">
        <button
          onClick={() => {
            const url = window.location.href
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
              '_blank'
            )
          }}
          className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 
                   transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </button>
        <button
          onClick={() => {
            const url = window.location.href
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
              '_blank'
            )
          }}
          className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 
                   transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </button>
        <button
          onClick={handleCopyLink}
          className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 
                   transition-colors"
          aria-label="Copy link"
        >
          <LinkIcon size={18} />
        </button>
      </div>
    </div>
  )
}