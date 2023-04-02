import Head from 'next/head'

import adventagesProps, {
  Adventages,
} from '@components/adventages/Adventages'
import descriptionTourProps, {
  DescriptionTour,
} from '@components/description-tour/DescriptionTour'
import descriptionsProps, {
  Descriptions,
} from '@components/descriptions/Descriptions'
import { Footer, Header, Wrapper } from '@components/layout'
import mainBlockProps, {
  MainBlock,
} from '@components/main-block/MainBlock'
import oneTourProps, { OneTour } from '@components/one-tour/OneTour'
import tourIncludedProps, {
  TourIncluded,
} from '@components/tour-included/TourIncluded'
import bannerProps, { Banner } from '@components/UI/Banner/Banner'
import yandexMapProps, {
  YandexMap,
} from '@components/yandex-map/YandexMap'

import { NextPageWithLayout } from '../page'

const Weekend: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Мещера Новогодний Тур</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='Тур “Зимние выходные”'
          mainImageUrl='/img/main-block/02.jpg'
          buttonText={'Записаться'}
          date={undefined}
        />
        <DescriptionTour
          {...descriptionTourProps}
          listOfAdventages={[
            {
              id: 0,
              name: 'Проживание',
            },
            {
              id: 1,
              name: 'Услуги инструкторов',
            },
            {
              id: 2,
              name: 'Туристические лыжи, палки ботинки',
            },
            {
              id: 3,
              name: 'Питание на время тура',
            },
            {
              id: 4,
              name: 'Баня',
            },
            {
              id: 5,
              name: 'Билет в нацпарк',
            },
            {
              id: 6,
              name: 'Страховка',
            },
          ]}
          title='Зимние выходные на природе — это всегда вызов! Мы поможем провести их ярко, активно и безопасно'
          backgroundImageUrl='/img/adventages/02.png'
          text='Озеро Белое, Озеро Великое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.'
          coord={[55.19487, 40.166803]}
        />
        <Adventages
          {...adventagesProps}
          listAdventageItems={[
            {
              id: 0,
              title: '7+',
              subtitle: 'Возраст',
            },
            {
              id: 1,
              title: '2 дня',
              subtitle: 'Длительность',
            },
            {
              id: 2,
              title: '12 км',
              subtitle: 'Протяженность маршрута',
            },
            {
              id: 3,
              stars: [true, false, false],
              subtitle: 'Начальный (без опыта)',
            },
          ]}
        />
        <Banner {...bannerProps} imageUrl='/img/banners/06.jpg' />
        <OneTour
          {...oneTourProps}
          listOfTours={[
            {
              id: 0,
              title: 'Тур “Зимние выходные”',
              href: '/',
              stars: [true, false, false],
              times: ['27.01-29.01', '13.01-15.01'],
              description:
                'Озеро Великое, озеро Белое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.',
            },
          ]}
        />
        <YandexMap {...yandexMapProps} />
        <TourIncluded
          {...tourIncludedProps}
          isProduct={true}
          listOfTourInfos={[
            {
              id: 0,
              title: 'Питание на время тура',
              text: `день 1 (заезд в пятницу) - лёгкий ужин; день 2 - завтрак, обед на костре, домашний ужин; день 3 - завтрак, сытный перекус на прогулке;`,
            },
            {
              id: 1,
              title: 'РЕКОМЕНДУЕМ ВЗЯТЬ',
              text: `одежда по погоде (желательно соблюдение принципа слоёв - термобелье, слой флиса, куртки и штаны с ветрозащитой, жилетки) варежки или лыжные перчатки, запасные носкибаф или балаклава в дополнение к шапке пенопопа; кружка, ложка, вилка; личная косметичка и аптечка пару полотенец (для бани и душа)  тёплая домашняя одежда; тапочки`,
            },
            {
              id: 2,
              title: 'ЧТО ВКЛЮЧЕНО',
              text: `Проживание (2 ночи); Услуги инструкторов; Туристические лыжи, палки ботинки; Питание на время тура: <br /> <span>день 1 - </span> перекус на прогулке, домашний ужин; <br /> <span>день 2 - </span> завтрак, обед на костре, домашний ужин; <br /> <span>день 3 - </span> завтрак, домашний обед;<br /> Баня (в один из дней); Билет в нацпарк; Страховка.`,
            },
          ]}
        />
        <Banner {...bannerProps} imageUrl='/img/banners/07.jpg' />
        <Descriptions
          {...descriptionsProps}
          noTopMargin
          listOfDescriptions={[
            {
              id: 0,
              title: 'О нас и наши ценности',
              text: `Проведите новогодние выходные активно — <span>прогулки на лыжах, снегоступах и простой сказочно-лесной трекинг</span> — то, что запомнится на долгое время! С нами можно отправиться в путешествие по зимнему нацпарку максимально безопасно и интересно: <span>замёрзжие озёра, притихший лес, звеоиные тропки, уютный костёр с хвойным чаем...</span> А после - согреться в бане, беседуя о духах природы под сытный ужин.`,
            },
          ]}
        />
        <Banner {...bannerProps} imageUrl='/img/banners/02.jpg' />
        <Descriptions
          {...descriptionsProps}
          noTopMargin
          listOfDescriptions={[
            {
              id: 0,
              title: 'Туристическое интересное ',
              text: `<span>Походная баня</span> – это специальная палатка, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!`,
            },
            {
              id: 1,
              title:
                'Природные и культурные заметки с наших маршрутов',
              text: `Проведите новогодние выходные активно — <span>прогулки на лыжах, снегоступах и простой сказочно-лесной трекинг</span> — то, что запомнится на долгое время! С нами можно отправиться в путешествие по зимнему нацпарку максимально безопасно и интересно: <span>замёрзжие озёра, притихший лес, звеоиные тропки, уютный костёр с хвойным чаем...</span> А после - согреться в бане, беседуя о духах природы под сытный ужин.`,
            },
          ]}
        />
        <Banner
          {...bannerProps}
          isDeviceSize
          imageUrl='/img/banners/08.jpg'
        />
      </main>
    </>
  )
}

export default Weekend

Weekend.getLayout = page => {
  return (
    <Wrapper>
      <Header className='_sheet' />
      {page}
      <Footer />
    </Wrapper>
  )
}
