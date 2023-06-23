import "./Hero.css";
import headphone from "../Assests/vibrating-headphone.png"

const HeroComponent = () => {
    return (
      <div className="hero-container">
        <h1 className="hero-heading">100 Thousands Songs, ad-free <br/> Over Thousands Podcast Episodes</h1>
        <img
          className="hero-image"
          src={headphone}
          alt="hero"
        />
      </div>
    );
  };
  
  export default HeroComponent;