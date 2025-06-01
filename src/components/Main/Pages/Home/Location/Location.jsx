import './Location.css';
import Map360 from '@/assets/location/360-Map.png';
import p360 from '@/assets/location/360.svg';
import Container from '../../../Container/Container';
import Button from '../../../Button/Button';
import line2 from '@/assets/lines/line2.svg';
import panorama from '@/assets/location/panorama.png';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

function Location() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <Container>
      <section className="location">
        <div className="string">
          <hr />
          <p>престижное расположение</p>
        </div>
        <h1>
          Один из самых зелёных <br /> районов столицы — Раменки{' '}
          <img src={line2} alt="line" className="littleline" loading="lazy" />
        </h1>
        <img src={Map360} alt="карта" loading="lazy" />
        <div className="garden">
          <p>
            ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»
          </p>
          <Button
            text={
              <>
                <img src={p360} alt="360" loading="lazy" /> Панорама района 360˚
              </>
            }
            color="white"
            className="custom-button"
            onClick={() => setIsImageVisible(true)}
          />
        </div>
      </section>

      <AnimatePresence>
        {isImageVisible && (
          <motion.div
            className="image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsImageVisible(false)}
          >
            <motion.div
              className="image-container"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={panorama} alt="Panorama" loading="lazy" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoCloseOutline
                  className="close-icon"
                  onClick={() => setIsImageVisible(false)}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Location;