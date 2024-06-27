import { useEffect, useState, useRef } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import '@appnest/masonry-layout'

export default function SimpleGallery(props) {
  const [page, setPage] = useState(0)
  const masonryRef = useRef(null)

  useEffect(() => {
    if (masonryRef.current) {
      masonryRef.current.scheduleLayout()
    }
  }, [page])

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [page])

  const imagesForEachPage = 12
  const imageGroups = []
  for (let i = 0; i < props.images.length; i += imagesForEachPage) {
    imageGroups.push(props.images.slice(i, i + imagesForEachPage))
  }

  const Pagination = () => (
    <div className='flex justify-end p-5'>
      <nav aria-label='Page navigation example'>
        <ul className='flex items-center -space-x-px h-10 text-sm'>
          <li>
            <button
              className='flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
              onClick={() => setPage(page === 0 ? 0 : page - 1)}
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='w-2.5 h-2.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 1 1 5l4 4'
                />
              </svg>
            </button>
          </li>
          {imageGroups.map((_, index) => (
            <li key={index}>
              <button
                className={`flex items-center justify-center px-3 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  page === index
                    ? 'bg-gray-100 text-gray-700'
                    : 'text-gray-500 bg-white'
                }`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className='flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
              onClick={() =>
                setPage(
                  page === imageGroups.length - 1
                    ? imageGroups.length - 1
                    : page + 1
                )
              }
            >
              <span className='sr-only'>Next</span>
              <svg
                className='w-2.5 h-2.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )

  return (
    <div className={props.class}>
      {imageGroups.length > 1 && <Pagination />}
      <div
        class='container mx-auto px-4 grid grid-cols-4 gap-5'
        id={props.galleryID}
      >
        {imageGroups[page].map((image, index) => (
          <a
            href={image.src}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={index}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={image.src}
              alt={`itm-2024-${index}`}
              className='object-cover w-full h-52 rounded-lg'
            />
          </a>
        ))}
      </div>
      {imageGroups.length > 1 && <Pagination />}
    </div>
  )
}
