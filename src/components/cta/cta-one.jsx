import { NavLink } from "react-router-dom";

export default function CtaOne() {
  return (
    <section
      className="cta__area pt-180 pb-155"
      style={{
        background: `url(/assets/img/cta/cta-bg.jpg)`,
      }}
    >
      <div className="container p-relative">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="cta__content text-center">
              <span>We’ve added a new exciting feature in v2.0.</span>
              <h1>Do you have any question? Feel free to contact us</h1>
              <div className="cta__btn">
                <NavLink to="/contact" className="z-btn z-btn-white mb-30">
                  Contact Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className="z-btn z-btn-transparent mb-30"
                >
                  Work with us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
