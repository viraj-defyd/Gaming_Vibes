import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
interface CardProps{
    id: number,
    url: string;
    title: string,
    desc: string
}
interface GameCard{
    cards: CardProps[];
    onCardClick: (id:number) => void;
}
const GameCardSlider = ({cards, onCardClick}: GameCard) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious=()=>{
        const isFirstCard = currentIndex === 0;
        if(isFirstCard===true){
            alert("can't go behind that!!");
        }else{
            setCurrentIndex(currentIndex-1);
        }
    };
    const goToNext=()=>{
        const isFirstCard = currentIndex === cards.length-3;
        if(isFirstCard===true){
            alert("can't go after that!!");
        }else{
            setCurrentIndex(currentIndex+1);
        }
    };
  return (
    <div className="CardStyles">
        <div className="leftArrowStyles" onClick={goToPrevious}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="rightArrowStyles" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
        <div className="CardSlider">
                {cards.map((g,index)=>(
                    (
                        index >= currentIndex &&
                        index <= currentIndex+2
                    )
                    && 
                    <div className="Card" onClick={()=> onCardClick(g.id)}>  
                        <div className="CardImage">
                            <img src={g.url} alt="" className='responsive-image' />
                        </div>
                        <div className="CardTitle">
                            <p>{g.title}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default GameCardSlider