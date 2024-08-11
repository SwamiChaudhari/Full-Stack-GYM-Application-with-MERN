import React from 'react'

const Gallery = () => {
  const Gallery = ["/img1.webp", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img6.jpg", "/img8.jpg"]
  return (
    <section className="gallery">
      <h1>Better beats best</h1>
      <div className="images">
        <div>
          {
            Gallery.slice(0,3).map((element ,index) => (
              <img key={index} src={element} alt="gallery image" />
            ))
          }
        </div>
        <div>
          {
            Gallery.slice(3,6).map((element ,index) => (
              <img key={index} src={element} alt="gallery image" />
            ))
          }
        </div>
        <div>
          {
            Gallery.slice(6,9).map((element ,index) => (
              <img key={index} src={element} alt="gallery image" />
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Gallery