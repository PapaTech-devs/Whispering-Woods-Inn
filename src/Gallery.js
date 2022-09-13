import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Gallery.css"
import { useParams } from "react-router-dom"

const Gallery = () => {
  const params = useParams()
  return (
    <div className="background">
      <Carousel
        swipeable={true}
        emulateTouch={true}
        autoPlay
        className="carousel"
        dynamicHeight
        labels={false}
        showThumbs={false}
        showStatus={false}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index}>
            <img
              className="image"
              alt={`${params.roomName} interiors in the hotel`}
              src={`/${params.roomName}/picture${index + 1}.JPG`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery
