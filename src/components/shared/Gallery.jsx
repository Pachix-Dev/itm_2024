import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import '@appnest/masonry-layout'

export default function SimpleGallery(props) {
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
    <masonry-layout
      gap='24'
      maxcolwidth='480'
      class='container mx-auto px-4  py-20'
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
          <img src={image.src} alt='' />
        </a>
      ))}
    </masonry-layout>
  )
}
