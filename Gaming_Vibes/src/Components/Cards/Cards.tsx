import './Cards.css';
import GameCards from './CardsSources';
import GameCardSlider from './GameCardSlider';
interface CardProps{
  onCardClick: (id: number)=> void;
}
const Cards = ({onCardClick}: CardProps) => {
  return (
    <>
        <div className="CardSliderContainer">
            <GameCardSlider cards={GameCards} onCardClick={onCardClick}/>
        </div>
    </>
  );
}

export default Cards