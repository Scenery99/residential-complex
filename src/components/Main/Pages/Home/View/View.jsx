// View.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './View.css';
import view1 from '@/assets/views/poklonGora.jpg';
import view2 from '@/assets/views/Moscow-city.jpg';
import view3 from '@/assets/views/Matveevsky-forest.jpg';
import view4 from '@/assets/views/ramenki-district.jpg';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function View() {
  const sliderData = [
    { image: view1, title: "Поклонная гора" },
    { image: view2, title: "Москва Сити" },
    { image: view3, title: "Матвеевский лес" },
    { image: view4, title: "Район Раменки" },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrent(i => (i + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [sliderData.length]);

  const pauseAndSet = (i) => {
    clearInterval(autoPlayRef.current);
    setCurrent(i);
  };

  const next = () => pauseAndSet((current + 1) % sliderData.length);
  const prev = () => pauseAndSet((current - 1 + sliderData.length) % sliderData.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft:  next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const [slideW, setSlideW] = useState(0);
  useEffect(() => {
    const update = () => {
      if (containerRef.current)
        setSlideW(containerRef.current.clientWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isMobile]);

  return (
    <section className="view">
      <h1>Наслаждайтесь видами <br/>из окон своей квартиры</h1>

      {isMobile ? (
        <div className="mobile-view-slider" {...swipeHandlers}>
          <div className="slider-container">
            <AnimatePresence initial={false}>
              <motion.img
                key={current}
                src={sliderData[current].image}
                alt={sliderData[current].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="slider-image"
              />
            </AnimatePresence>
            <div className="slider-controls">
              <button onClick={prev} className="control-button">
                <GoArrowLeft/>
              </button>
              <div className="pagination-dots">
                {sliderData.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${current === idx ? 'active' : ''}`}
                    onClick={() => pauseAndSet(idx)}
                  />
                ))}
              </div>
              <button onClick={next} className="control-button">
                <GoArrowRight/>
              </button>
            </div>
            <div className="slider-title">
              {sliderData[current].title}
            </div>
          </div>
        </div>
      ) : (
        <div className="slider" ref={containerRef}>
          <button className="slider__arrow slider__arrow--left" onClick={prev}>
            <GoArrowLeft/>
          </button>
          <div className="slider__content">
            <motion.div
              className="slider__wrapper"
              animate={{ x: -current * (slideW + 20) }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {sliderData.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  className="slider__image"
                />
              ))}
            </motion.div>
            <div className="slider__titles">
              <div className="slider__titles-wrapper">
                {sliderData.map((item, idx) => (
                  <span
                    key={idx}
                    className={`slider__title ${current === idx ? 'active' : ''}`}
                    onClick={() => pauseAndSet(idx)}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="slider__arrow slider__arrow--right" onClick={next}>
            <GoArrowRight/>
          </button>
        </div>
      )}
    </section>
  );
}
