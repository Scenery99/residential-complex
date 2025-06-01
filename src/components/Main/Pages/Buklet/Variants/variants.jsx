import './Variants.css';
import Container from '../../../Container/Container';
import Lightone from '@/assets/buklet/light-finish1.png';
import Lighttwo from '@/assets/buklet/light-finish2.png';
import Lightthree from '@/assets/buklet/light-finish3.png';
import Group from '@/assets/buklet/light-finish-group4.png';
import Button from '../../../Button/Button'
import Darkone from '@/assets/buklet/dark-finish1.png';
import Darktwo from '@/assets/buklet/dark-finish2.png';
import Darkthree from '@/assets/buklet/dark-finish3.png';
import DarkGroup from '@/assets/buklet/dark-finish-group4.png';
import WhiteBook from '@/assets/modals/catalog1.png';
import DarkBook from '@/assets/modals/catalog2.png';
import Line from '@/assets/presentation/line.png';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';

function Variants() {

    const [isModalOpen, setIsModalOpen] = useState(false); // Одно состояние для модалки
    const [activeVariant, setActiveVariant] = useState(null); // Какой кластер активирован ('blue' или 'green')

    const handleSubmit = (phone) => {
        console.log(`Submitted phone from ${activeVariant} cluster:`, phone);
        setIsModalOpen(false);
        setActiveVariant(null);
      };
    
      const openModal = (cluster) => {
        setActiveVariant(cluster);
        setIsModalOpen(true);
      };

      const modalProps = {
          isOpen: isModalOpen,
          onClose: () => {
            setIsModalOpen(false);
            setActiveVariant(null);
          },
          title: 'Получите дизайн-буклет с подробным описанием отделки светлого интерьера',
          text: 'PDF, можно скачать прямо сейчас',
          backgroundImage: Line,
          backgroundColor: activeVariant === 'white' ? '#EAE3D9 ' : '#42352A',
          foregroundImage: activeVariant === 'white' ? WhiteBook : DarkBook,
          showImages: true,
          onSubmit: handleSubmit,
          buttonText: 'Получить планировки',
        };

    return (
        <Container>
            <section>
                <div className='maintitle'>
                    <h1>2 варианта отделки</h1>
                    <hr className='line'/>
                    <div className='white'>
                        <h2>Светлая отделка</h2>
                        <Button
                        text="Рассчитать ипотеку"
                        color="brown"
                        onClick={() => openModal('white')}
                    />
                    </div>
                </div>
                <div className="grid">
                <div className="div1"> </div>
                <div className="div2"> <img src={Lightone} alt="photo" /></div>
                <div className="div3">
                     <img src={Group} alt="photo" />
                     <span>ОСОБЕННОСТИ ИНТЕРЬЕРА</span>
                     <p>Сочетание белых стен и светлой <br /> напольной доски с текстурой дерева <br /> расширяет пространство, формируя <br />гармоничную, наполненную светом <br />атмосферу</p>
                     </div>
                <div className="div4"> <img src={Lighttwo} alt="photo" /></div>
                <div className="div5"> <img src={Lightthree} alt="photo" /></div>
                </div>
                <hr className='line'/>
                <div className='maintitle'>
                    <div className='white'>
                        <h2>Тёмная отделка</h2>
                        <Button
                        text="Скачать дизайн-буклет"
                        color="brown"
                        onClick={() => openModal('dark')}
                    />
                    </div>
                </div>
                <div className="grid">
                <div className="div1"> </div>
                <div className="div2"> <img src={Darkone} alt="photo" /></div>
                <div className="div3 dark">
                     <img src={DarkGroup} alt="photo" />
                     <span>ОСОБЕННОСТИ ИНТЕРЬЕРА</span>
                     <p>Отделка в тёмном варианте <br /> формируется за счет нейтральных <br /> оттенков стен, а также напольной <br />доски, выполненной в цвете <br />темного дерева
                     </p>
                     </div>
                <div className="div4"> <img src={Darktwo} alt="photo" /></div>
                <div className="div5"> <img src={Darkthree} alt="photo" /></div>
                </div>

                <Modal {...modalProps} />
            </section>
        </Container>
    )
}

export default Variants;