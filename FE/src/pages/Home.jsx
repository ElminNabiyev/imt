import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <main>
        <section className="hero">
          <div className="special_dish">
            <p className="dish">
              Special Dish<span>.</span>
            </p>
            <p className="chef">By Chef Francis Smith</p>
          </div>
        </section>
        <section className="welcome">
          <div className="wlc_div">
            <div>
              <i className="fa-brands fa-stack-overflow"></i>
            </div>
            <div className="lines">
              <div className="line"></div>
              <span>Welcome</span>
              <div className="line"></div>
            </div>
          </div>
          <div className="years">
            <div className="2002">
              <p className="year">2002</p>
              <p className="content">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
            <div className="2010">
              <p className="year">2010</p>
              <p className="content">
                Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
                lobortis leo volutpat. Maecenas sollicitudin est in libero
                pretium.
              </p>
            </div>
            <div className="2018">
              <p className="year">2018</p>
              <p className="content">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp"
              alt=""
            />
          </div>
        </section>
        <section className="testimonials">
          <div className="wlc_div">
            <div>
              <i className="fa-solid fa-ice-cream"></i>
            </div>
            <div className="lines">
              <div className="line"></div>
              <span style={{ color: "white" }}>Testimonials</span>
              <div className="line"></div>
            </div>
          </div>
          <div className="integers">
            <p className="integer">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est feu-giat ut.{" "}
            </p>
            <span>
              Ted Chapman,<span>Client</span>
            </span>
          </div>
        </section>
        <section className="ourservices "></section>
        <div className="wlc_div">
          <div>
            <i className="fa-solid fa-bowl-food"></i>
          </div>
          <div className="lines">
            <div className="line"></div>
            <span>Our Services</span>
            <div className="line"></div>
          </div>
          <div className="services">
            <div className="coffee">
              <i className="fa-solid fa-mug-hot"></i>
              <h3>Breakfast</h3>
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum.
              </p>
            </div>
            <div className="coffee">
              <i className="fa-solid fa-hippo"></i>
              <h3>Brunch</h3>
              <p>
                Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
                eros hendrerit, id lobortis.
              </p>
            </div>
            <div className="coffee">
              <i className="fa-solid fa-soap"></i>
              <h3>Lunch</h3>
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum.
              </p>
            </div>
            <div className="coffee">
              <i className="fa-solid fa-burger"></i>
              <h3>Dinner</h3>
              <p>
                Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui
                fermentum eros hendreri.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
