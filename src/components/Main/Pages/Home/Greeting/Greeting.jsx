import './Greeting.css';
import logoWest from '@/assets/landing/logo-west.svg';
import mainLanding from '@/assets/landing/main-landing.png';
import mobileLanding from '@/assets/landing/mobileLanding.png';
import award from '@/assets/landing/award.svg';
import line1 from '@/assets/lines/line1.svg';

function Greeting() {
  return ( 
    <section className="greeting">
      <div className="mainTitle">
        <img src={logoWest} alt="landinglogo" className="logotwo" />
        <h1>
          Жизнь в зеленом оазисе <br /> в статусном районе Москвы
        </h1>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <img src={line1} alt="line" className="line1" />
      </div>
      <div className="mainLand">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileLanding} />
          <img src={mainLanding} alt="mainPhoto" loading="lazy" />
        </picture>
        <div className="award-div">
          <img src={award} alt="award-icon" />
          <p>Победитель федеральной премии Urban Awards 2020</p>
        </div>
        <div className="when">
          <div>
            <p>
              1 очередь <span>2024</span>
            </p>
          </div>
          <div>
            <p>
              2 очередь <span>2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;