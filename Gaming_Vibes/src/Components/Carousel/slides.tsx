import GoldDigger from '../../assets/Images/GoldDiggerSlider.png';
import HollowKnight from '../../assets/Images/HollowKnightSlider.png';
import SunnyLand from '../../assets/Images/SunnyLandSlider.png';
import TheSandBox from '../../assets/Images/TheSandBoxSlider.png';
interface slide{
    url: string,
    title: string
}
const slides: slide[] = [
    {url: GoldDigger, title: 'Gold Digger'},
    {url: HollowKnight, title: 'Hollow Knight'},
    {url: SunnyLand, title: 'Sunny Land'},
    {url: TheSandBox, title: 'The Sand Box'},
];
export default slides;