import "./ContactUs.css";
const ContactUs = () => {
  return (
    // <!-- contact section -->
    <section id="contact">
      <div className="container ">
        <div className="text-center py-2">
          <h1 className="title-light text-underline heading">Contact us</h1>
          <p className="lead text-center">
            Got any questions? Just want to say hello? Feel free to contact us!
          </p>
        </div>

        <div className="contact-inner">
          <div className="col-left">
            <form method="POST" className="py-2">
              <div className="email-name-row">
                <div className="form-group col-6">
                  <label for="email">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group col-6">
                  <label for="name">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Enter a message"
                    rows="7"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-light mt-3">
                Send a message
              </button>
            </form>
          </div>

          <div className="col-right py-2">
            <h2>Our informations</h2>
            <p>You can also reach out using:</p>

            <ul className="contact-data py-1">
              <li>
                <p>
                  <i data-feather="phone"></i>
                  <span>
                    <strong>233545555578</strong>
                  </span>
                </p>
              </li>

              <li>
                <p>
                  <i data-feather="mail"></i>
                  <span>
                    <strong>maynow.com</strong>
                  </span>
                </p>
              </li>

              <li>
                <p>
                  <i data-feather="map-pin"></i>
                  <span>
                    <strong>
                      4341 Hohoe, Opposite Goil fillig Station, V/R, 43421
                    </strong>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
