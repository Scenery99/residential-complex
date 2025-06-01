import './Aesthetics.css';
import Aesthetics1 from '@/assets/aesthetics/aesthetics1.png';
import Aesthetics2 from '@/assets/aesthetics/aesthetics2.png';
import Aesthetics3 from '@/assets/aesthetics/aesthetics3.png';
import Aesthetics4 from '@/assets/aesthetics/aesthetics4.png';
import Icon from '@/assets/aesthetics/door1.svg';
import Icon2 from '@/assets/aesthetics/man2.svg';
import Star from '@/assets/aesthetics/Star3.svg';
import Container from '../../../Container/Container';

function Aesthetics() {
  return (
    <Container>
      <section className="aesthetics">
        {/* Заголовок блока */}
        <h1 className="aesthetics__title">
          Современная эстетика лобби
        </h1>

        {/* Первая карточка */}
        <div className="aesthetics__item">
          <div className="aesthetics__row">
            {/* Колонка 1: иконка + заголовок + “звёздочки” */}
            <div>
              <div className="aesthetics__header">
                <img className="aesthetics__icon" src={Icon} alt="icon" />
                <h3 className="aesthetics__heading">Центральные входные группы</h3>
              </div>
              <div className="aesthetics__stars">
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Зоны ожидания и встреч</p>
                </div>
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Пост охраны</p>
                </div>
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Переговорная комната</p>
                </div>
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Переговорная комната</p>
                </div>
              </div>
            </div>

            {/* Колонка 2: фотографии */}
            <div className="aesthetics__images">
              <img
                className="aesthetics__image aesthetics__image--first"
                src={Aesthetics1}
                alt="photo"
              />
              <img
                className="aesthetics__image"
                src={Aesthetics2}
                alt="photo"
              />
            </div>
          </div>
        </div>

        {/* Вторая карточка */}
        <div className="aesthetics__item">
          <div className="aesthetics__row">
            {/* Колонка 1: иконка + заголовок + “звёздочки” */}
            <div>
              <div className="aesthetics__header">
                <img className="aesthetics__icon" src={Icon2} alt="icon" />
                <h3 className="aesthetics__heading">Лифтовый холл</h3>
              </div>
              <div className="aesthetics__stars">
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>2-4 лифта</p>
                </div>
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Грузовые и пассажирские</p>
                </div>
                <div className="aesthetics__star">
                  <img src={Star} alt="star" />
                  <p>Ведущие производители</p>
                </div>
              </div>
            </div>

            {/* Колонка 2: фотографии */}
            <div className="aesthetics__images">
              <img
                className="aesthetics__image aesthetics__image--first"
                src={Aesthetics3}
                alt="photo"
              />
              <img
                className="aesthetics__image"
                src={Aesthetics4}
                alt="photo"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Aesthetics;
