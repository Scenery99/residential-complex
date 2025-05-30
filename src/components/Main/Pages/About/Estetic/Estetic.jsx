import './Estetic.css';
import Estetic from '@/assets/aesthetics/aesthetics1.png';
import Estetic2 from '@/assets/aesthetics/aesthetics2.png';
import Estetic3 from '@/assets/aesthetics/aesthetics3.png';
import Estetic4 from '@/assets/aesthetics/aesthetics4.png';
import Icon from '@/assets/aesthetics/door1.svg';
import Icon2 from '@/assets/aesthetics/man2.svg';
import Star from '@/assets/aesthetics/Star3.svg';
import Container from '../../../Container/Container';

function Estet () {
    return (
        <Container>
            <section className='estetic'>
                <h1>
                Современная эстетика лобби
                </h1>
                <div className='estetdiv'>
                    <div>
                        <div>
                        <div>
                            <img className='icon' src={Icon} alt="icon" />
                            <h3>Центральные входные группы</h3>
                        </div>
                        <div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Зоны ожидания и встреч</p>
                            </div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Пост охраны</p>
                            </div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Переговорная комната</p>
                            </div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Переговорная комната</p>
                            </div>
                        </div>
                        </div>
                        <div>
                            <img className='firstphoto' src={Estetic} alt="photo" />
                            <img src={Estetic2} alt="photo" />
                        </div>
                    </div>
                </div>
                <div className='estetdiv'>
                    <div>
                        <div>
                        <div>
                            <img className='icon' src={Icon2} alt="icon" />
                            <h3>Лифтовый холл</h3>
                        </div>
                        <div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>2-4 лифта</p>
                            </div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Грузовые и пассажирские</p>
                            </div>
                            <div className='star'>
                                <img src={Star} alt="star" />
                                <p>Ведущие производители</p>
                            </div>
                        </div>
                        </div>
                        <div>
                            <img className='firstphoto' src={Estetic3} alt="photo" />
                            <img src={Estetic4} alt="photo" />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}


export default Estet;