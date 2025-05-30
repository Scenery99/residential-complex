import './Greeting.css';
import Logo2 from '@/assets/landing/logo-west.svg';
import mainLand from '@/assets/landing/main-landing.png';
import mobilePhoto from '@/assets/landing/mobileLanding.png';
import award from '@/assets/landing/award.svg';
import mainLine from '@/assets/lines/line1.svg';

function Greeting() {
  return (
    <section className="greeting">
      <div className="maintitle">
        <img src={Logo2} alt="landinglogo" className="logotwo" />
        <h1>
          Жизнь в зеленом оазисе <br /> в статусном районе Москвы
        </h1>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <img src={mainLine} alt="line" className="mainline" />
      </div>
      <div className="mainland">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobilePhoto} />
          <img src={mainLand} alt="mainPhoto" loading="lazy" />
        </picture>
        <div className="award-div">
          <img src={award} alt="award-icon" />
          <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <div className="when">
          <div>
            <p>
              1 очередь <span>2022</span>
            </p>
          </div>
          <div>
            <p>
              2 очередь <span>2023</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;