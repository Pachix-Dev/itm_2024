import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { useEffect } from 'react'

export function ToolkitItm(props) {
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
  }, [])
  return (
    <div
      className='mt-10 container mx-auto px-4 grid md:grid-cols-4 gap-5'
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
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
          <p className='font-bold'>{image.alt}</p>
        </a>
      ))}
    </div>
  )
}
