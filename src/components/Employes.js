import foto1 from "../assets/img/Radek.png";
import foto2 from "../assets/img/Slawek.png";

const Employes = () => (
  <section id="about-us" className="about-us">
    <div className="wrapper about">
      <div className="wrap">
        <div className="team-member">
          <div className="img-container">
            <img src={foto2} alt="" className="profile-picture" />
          </div>
          <div className="employer-details">
            <p className="employer-name">Imię Nazwisko [dział]</p>
            <p className="employer-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              repellat perspiciatis perferendis? Aut modi nostrum architecto
              accusantium quo, perspiciatis, voluptatem, impedit sint soluta rem
              possimus suscipit minima illo fuga eius! Ut soluta necessitatibus
              cumque. Iste cumque provident, ut necessitatibus voluptates
            </p>
          </div>
        </div>
        <div className="team-member">
          <div className="img-container reversed">
            <img src={foto1} alt="" className="profile-picture" />
          </div>
          <div className="employer-details right">
            <p className="employer-name">Imię Nazwisko [dział]</p>
            <p className="employer-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              repellat perspiciatis perferendis? Aut modi nostrum architecto
              accusantium quo, perspiciatis, voluptatem, impedit sint soluta rem
              possimus suscipit minima illo fuga eius! Ut soluta necessitatibus
              cumque. Iste cumque provident, ut necessitatibus voluptates
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Employes;
