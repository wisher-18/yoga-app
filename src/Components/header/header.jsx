import HeaderImg from '../../images/header.jpg';
import './header.css';
const Header = () =>{
    return (
        <>  
        <div>
            <div className="header">
                <div className="i">
                   <img src={HeaderImg} alt="" />
                </div>
                <div className="Header_Overlay"></div>
            </div>
            <div className="Header_Content">
                <h6>Yoga Improve <br />Your Life</h6>
                <p>
                Welcome to our yoga journey! At Yoga, 
                we believe in the transformative power of yoga to enhance your life physically, mentally, and spiritually. Through mindful practice and deep breaths, you'll discover improved flexibility, strength, and inner peace. 
                Whether you're a beginner or an experienced yogi, join us in this holistic adventure to unlock your true potential and embrace a healthier, more balanced life. Find your center, elevate your well-being, and embark on a path of self-discovery with us.
                </p>
            </div>
        </div>

        </>
    )
}

export default Header;