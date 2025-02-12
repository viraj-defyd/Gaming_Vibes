import ImageSlider from './ImageSlider';
import slides from './slides';
import './Carousel.css';


const Carousel = () => {
  return (
    <div>
        <div className="containerStyles">
            <ImageSlider slides={slides}/>
        </div>
    </div>
  )
}

export default Carousel