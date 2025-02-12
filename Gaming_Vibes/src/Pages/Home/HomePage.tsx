import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import './HomePage.css'
import Carousel from "../../Components/Carousel/Carousel";
import Cards from "../../Components/Cards/Cards";
interface HomePageProps{
  onCardClick: (id: number)=> void;
}
const HomePage = ({onCardClick}: HomePageProps) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="header">
            <div className="headerFirst">
                <div className="greetHeader">
                    <div className="divhi">
                      Hi
                    </div>
                    <div className="divGuys">
                    Guys!!
                    </div>
                </div>
                <div className="headerLogos">
                  <div className="headerLogo">
                  <div className="headerLogoSearch"><FontAwesomeIcon icon={faSearch}/></div>

                  </div>
                  <div className="headerLogo">
                  <div className="headerLogoNotification"><FontAwesomeIcon icon={faBell}/></div>

                  </div>
                  <div className="headerLogo">
                  <div className="headerLogoAccount"><FontAwesomeIcon icon={faUserNinja}/></div>

                  </div>
              </div>
            </div>
            <div className="headerSubheader">
              Welcome back, many games waiting to be played
            </div>
          </div>
          <div className="carousel">
            <Carousel/>
          </div>
          <div className="games">
            <Cards onCardClick={onCardClick}/>
          </div>
        </div>
      </div> 
    </>
  );
}

export default HomePage