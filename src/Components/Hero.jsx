import "./Hero.css";
let Hero = () => {
  return (
    //  <!-- Hero Section  -->
    <section id="hero">
      <div className="main-container">
        <div className="hero_text">
          <h1>Once you learn to read, you will be forever free</h1>
          <a href="#">Read More...</a>
        </div>
        <div className="hero_image">
          <img src="maria.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
