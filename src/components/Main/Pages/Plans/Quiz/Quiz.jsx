import { useState, useEffect } from 'react';
import Container from '@components/Main/Container/Container';
import Button from '@components/Main/Button/Button';
import './Quiz.css';
import figure1 from '@/assets/test/figure1.png';
import figure2 from '@/assets/test/figure2.png';
import figure3 from '@/assets/test/figure3.png';
import figure4 from '@/assets/test/figure4.png';
import figure5 from '@/assets/test/figure5.png';
import figure6 from '@/assets/test/figure6.png';
import figure7 from '@/assets/test/figure7.png';
import figure8 from '@/assets/test/figure8.png';
import figure9 from '@/assets/test/figure9.png';
import figure10 from '@/assets/test/figure10.png';
import pageone1 from '@/assets/test/pageone1.png';
import pageone2 from '@/assets/test/pageone1.png';
import pagetwo1 from '@/assets/test/pagetwo1.png';
import pagetwo2 from '@/assets/test/pagetwo2.png';
import pagetwo3 from '@/assets/test/pagetwo3.png';
import pagetree1 from '@/assets/test/pagethree1.png';
import pagetree2 from '@/assets/test/pagethree2.png';
import pagetree3 from '@/assets/test/pagethree3.png';
import whatsapp from '@/assets/test/whatsapp.png';
import telegram from '@/assets/test/telegram.png';
import viber from '@/assets/test/viber.png';
import { GoArrowLeft } from 'react-icons/go';
import { IMaskInput } from 'react-imask';

const decorImages = [figure1, figure2, figure3, figure4, figure5, figure6, figure7, figure8, figure9, figure10];

function Quiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [messenger, setMessenger] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const startQuiz = () => setIsStarted(true);
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
    setSelectedOption(null);
  };
  const nextStep = () => {
    if (selectedOption !== null) {
      setAnswers((prev) => ({ ...prev, [step]: selectedOption }));
      setStep((prev) => Math.min(prev + 1, 4));
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    const cleanedPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanedPhone.length === 12) {
      console.log('Answers:', answers, 'Messenger:', messenger, 'Phone:', cleanedPhone);
      setIsSubmitted(true);
      setPhoneError('');
    } else {
      setPhoneError('Введите корректный номер телефона');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsStarted(false);
        setStep(0);
        setAnswers({});
        setMessenger(null);
        setSelectedOption(null);
        setPhone('');
        setPhoneError('');
        setIsSubmitted(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const questions = [
    {
      title: <>Какая недвижимость <br /> вас интересует?</>,
      options: [
        { image: pageone1, text: 'Квартира', value: 'apartment', className: 'size-large' },
        { image: pageone2, text: 'Пентхаус', value: 'penthouse', className: 'size-large' },
      ],
    },
    {
      title: <>Какая планировка <br /> вам подходит?</>,
      options: [
        { image: pagetwo1, text: '1-комнатная', value: '1-room', className: 'size-medium' },
        { image: pagetwo2, text: '2-комнатная', value: '2-room', className: 'size-medium' },
        { image: pagetwo3, text: 'Свободная', value: 'free', className: 'size-medium' },
      ],
    },
    {
      title: <>Какую площадь объекта <br /> вы рассматриваете?</>,
      options: [
        { image: pagetree1, text: 'До 50 м²', value: 'small', className: 'size-medium-centered' },
        { image: pagetree2, text: '50-100 м²', value: 'medium', className: 'size-medium-centered' },
        { image: pagetree3, text: 'Более 100 м²', value: 'large', className: 'size-medium-centered' },
      ],
    },
    {
      title: <>Планируете ли вы использовать <br /> подземный паркинг?</>,
      options: [
        { text: 'Да, планирую', value: 'yes', className: 'size-large no-image' },
        { text: 'Не планирую', value: 'no', className: 'size-large no-image' },
      ],
    },
  ];

  const renderStartPage = () => (
    <div className="quiz__start">
      <h1>Какая квартира <br /> подойдет именно вам?</h1>
      <p>Ответьте на 4 вопроса, чтобы подобрать <br /> идеальный вариант недвижимости</p>
      <Button text="Пройти тест" color="black" onClick={startQuiz} />
      <div className="quiz__decor">
        {decorImages.map((src, i) => (
          <img key={i} src={src} alt={`decor-${i}`} />
        ))}
      </div>
    </div>
  );

  const renderProgressBar = () => (
    <div className="quiz__progress">
      {Array(4).fill().map((_, i) => (
        <div key={i} className={`quiz__progress__bar ${i <= step ? 'filled' : ''}`} />
      ))}
    </div>
  );

  const renderQuestion = () => (
    <div className="quiz__question">
      <h2>{questions[step].title}</h2>
      <div className="quiz__options">
        {questions[step].options.map((option, i) => (
          <div
            key={i}
            className={`quiz__card ${selectedOption === option.value ? 'selected' : ''} ${option.className || ''}`}
            onClick={() => setSelectedOption(option.value)}
          >
            {option.image && <img src={option.image} alt={option.text} />}
            <p>{option.text}</p>
            <div className={`quiz__checkbox ${selectedOption === option.value ? 'checked' : ''}`}>
              {selectedOption === option.value && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5.5L4.5 9L11 1" stroke="white" strokeWidth="2" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResult = () => (
    <div className={`quiz__result ${isSubmitted ? 'submitted' : ''}`}>
      {isSubmitted ? (
        <h2>Варианты отправлены!</h2>
      ) : (
        <>
          <h2>Подобрали 4 варианта недвижимости <br />по вашим параметрам. Куда их прислать?</h2>
          <div className="quiz__messengers">
            {[
              { icon: whatsapp, text: 'В WhatsApp', value: 'whatsapp' },
              { icon: telegram, text: 'В Telegram', value: 'telegram' },
              { icon: viber, text: 'В Viber', value: 'viber' },
            ].map((m, i) => (
              <div
                key={i}
                className={`quiz__messenger ${messenger === m.value ? 'selected' : ''} size-small`}
                onClick={() => setMessenger(m.value)}
              >
                <div className={`quiz__messenger__checkbox ${messenger === m.value ? 'checked' : ''}`}>
                  {messenger === m.value && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5.5L4.5 9L11 1" stroke="white" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <img src={m.icon} alt={m.text} />
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <div className="quiz__form">
            <div className="quiz__form-input-wrapper">
              <IMaskInput
                mask="+7 000-000-00-00"
                unmask={false}
                placeholder="+7 ___-___-__-__"
                type="tel"
                value={phone}
                onAccept={(value) => setPhone(value)}
                className="quiz__form-input"
              />
              {phoneError && <p className="quiz__form-error">{phoneError}</p>}
            </div>
            <Button
              text={`Получить варианты ${messenger ? `в ${messenger === 'whatsapp' ? 'WhatsApp' : messenger === 'telegram' ? 'Telegram' : 'Viber'}` : ''}`}
              color="black"
              onClick={handleSubmit}
              fullWidth={true}
            />
            <p>
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь<br /> с{' '}
              <span className="policy">политикой конфиденциальности</span>
            </p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <Container>
      <section className="quiz">
        {!isStarted ? (
          renderStartPage()
        ) : (
          <div className="quiz__content">
            {renderProgressBar()}
            {step > 0 && (
              <button className="quiz__back" onClick={prevStep}>
                <GoArrowLeft />
                Назад
              </button>
            )}
            {step < 4 ? renderQuestion() : renderResult()}
            {step < 4 && (
              <Button
                text="Дальше"
                color="black"
                onClick={nextStep}
                className="quiz__next"
                disabled={selectedOption === null}
              />
            )}
          </div>
        )}
      </section>
    </Container>
  );
}

export default Quiz;