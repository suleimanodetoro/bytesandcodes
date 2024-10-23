'use client'

export default function ShareButtons({ title }: { title: string }) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => {
          const url = window.location.href
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            '_blank'
          )
        }}
        className="bg-blue-400 text-white px-4 py-2 rounded"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => {
          const url = window.location.href
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            '_blank'
          )
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Share on Facebook
      </button>
    </div>
  )
}