import "./About.css";
let About = () => {
  return (
    //  <!-- About Section -->
    <section id="about">
      <h1 className="heading">About US</h1>
      <div className="container">
        <div className="about_text">
          <p>
            Reading improves your conversational skills because reading
            increases your vocabulary and your knowledge of how to currently use
            new words and articulate what you want to say. The knowledge you
            gain from reading also gives you alot to talk about with others
          </p>
        </div>
        <div className="about_image">
          <img src="gifty.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
