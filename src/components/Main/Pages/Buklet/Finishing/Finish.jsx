import './Finish.css';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import Container from '../../../Container/Container';
import cardone from '@/assets/buklet/ready-made-design1.png';
import cardtwo from '@/assets/buklet/ready-made-design2.png';
import cardthree from '@/assets/buklet/ready-made-design3.png';
import line3 from "@/assets/lines/line3.svg"

function Finish() {
    return (
        <Container>
          <section className='finish'>
                <div className='mainTitle'>
                <h1>Отделка от застройщика</h1>
                <p>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
                <img className='line3' src={line3} alt="line3" />
                </div>
                <div className='cards'>
                <PhotoCard
                image={cardone}
                title={<>Готовый <br/> дизайн-проект</>}
                description={<>Воспользуйтесь возможностью<br/> сразу же заняться меблировкой и<br /> благоустройством новой квартиры,<br /> как только получите ключи</>}
                variant="stacked"
                />
                <PhotoCard
                image={cardtwo}
                title={<>Чистота и тишина,<br/> без шума и пыли</>}
                description={<>Забудьте шум от «бесконечного<br/> ремонта» соседей и лифт,<br /> декорированный защитными<br /> материалами</>}
                variant="stacked"
                />
                <PhotoCard
                image={cardthree}
                title={<>Выгода за счет<br /> оптовых закупок</>}
                description={<>Благодаря оптовым закупкам<br/> застройщика, вы получаете<br /> возможность сэкономить<br /> на стоимости ремонта</>}
                variant="stacked"
                />
                </div>
            </section>
        </Container>
    )
}

export default Finish;