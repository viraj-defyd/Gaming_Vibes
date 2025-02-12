import { useState, useEffect, useRef } from 'react';
import "./Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SliderProps {
  url: string;
  title: string;
}

interface Slide {
  slides: SliderProps[];
}

const ImageSlider = ({ slides }: Slide) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [slides.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  return (
    <div className='sliderStyles'>
      <div className="leftArrowStyles" onClick={goToPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="rightArrowStyles" onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className='slideStyles' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
      </div>
    </div>
  );
};

export default ImageSlider;
