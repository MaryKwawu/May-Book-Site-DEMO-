import "./Ourbooks.css";
let Ourbook = () => {
  return (
    // <!-- Books Section -->
    <section id="book">
      <h1 className="heading">Our Books</h1>
      <div className="books">
        <div className="card">
          <img src="Introducing-HTML5.jpg" alt="" />
          <h3>Introduction To HTML5</h3>
          <p>
            This topic covers linking external resourses such as stylesheet and
            script into an HTML.
          </p>
        </div>
        <div className="card">
          <img src="CSS.png" alt="" />
          <h3>CSS in 44 minutes</h3>
          <p>
            Learn how to build your own webpage from scratch with my step by
            guide.
          </p>
        </div>
        <div className="card">
          <img src="Java.jpg" alt="" />
          <h3>Well grounded Java Developer</h3>
          <p>
            This book offers a fresh and pratical look at a new Java seven
            features, new JVM languages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourbook;
