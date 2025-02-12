import './Description.css';
import featuredImage from '../../assets/Images/featured_image.jpg';
import featuredVideo from '../../assets/Videos/Recording 2025-02-05 110453.mp4'
import { useRef, useEffect } from 'react';
interface DescriptionProps {
  selectedCard: {
    id: number;
    url: string;
    title: string;
    desc: string;
  } | undefined; 
}
 const Description = ({ selectedCard }: DescriptionProps) => {
  const imgRef= useRef<HTMLImageElement>(null);
  const pRef= useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if(selectedCard){
      if(imgRef.current&&pRef.current){
        imgRef.current.src = selectedCard.url;
        imgRef.current.alt= selectedCard.title;
        pRef.current.innerText=selectedCard.desc;
      }
    }else{
      if(imgRef.current && pRef.current){
        imgRef.current.src = featuredImage;
        imgRef.current.alt="Default";
        pRef.current.innerText="The project contains many 2-D games to be played for fun. You can click on any game you want to play and in the same panal you will get to know about all the rules and video related to it. You need to login for more updates about the upcoming games nd to access the same. In case of any query, you are provided with a chat system on the extreme left panel.";
      }
    }
 },[selectedCard]);
  return (
    <div className="descContainer">
      <div className="verticalDesc">
        <div className="verticalDescImage">
        <img ref={imgRef} src={featuredImage} alt="/" className='descresponse_img'/>
        </div>
        <div className="verticalDescHeader">
        Retro Hub
        </div>
        <div className="verticalDescSubHeader">
        About The Hub
        </div>
        <div className="verticalDescInfo">
          <p ref={pRef}>The project contains many 2-D games to be played for fun.
             You can click on any game you want to play and in the same panal you will get to know about all the rules and video related to it.
              You need to login for more updates about the upcoming games nd to access the same.
             In case of any query, you are provided with a chat system on the extreme left panel.</p>
        </div>
        <div className="verticalDescButton">
          <button>Play</button>
        </div>
        <div className="verticalDescVid">
        <video width="250" height="170" controls>
        <source src={featuredVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </div>
    
  )
}
export default Description;