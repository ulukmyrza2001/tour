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
import timeCodeTravelProps, {
  TimeCodeTravel,
} from '@components/time-code-travel/TimeCodeTravel'
import bannerProps, { Banner } from '@components/UI/Banner/Banner'
import yandexMapProps, {
  YandexMap,
} from '@components/yandex-map/YandexMap'

import { NextPageWithLayout } from '../page'

const Rivers: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Мещера Новогодний Тур</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='SUP прогулки "Реки Подмосковья"'
          video='/video/02.mp4'
          buttonText={'Связаться с нами'}
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
          title='Душевно поплескаться можно даже в сердце мегаполиса!'
          backgroundImageUrl='/img/adventages/03.png'
          text='Озеро Великое, озеро Белое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.'
          coord={[55.19487, 40.166803]}
        />
        <Adventages
          {...adventagesProps}
          isGold={true}
          listAdventageItems={[
            {
              id: 0,
              title: '6+',
              subtitle: 'Возраст',
            },
            {
              id: 1,
              title: '5-6 ч.',
              subtitle: 'Маршрут (в часах)',
            },
            {
              id: 2,
              title: '>17 км',
              subtitle: 'Протяженность маршрута',
            },
            {
              id: 3,
              stars: [true, false, false],
              subtitle: 'Доступно для новичков',
            },
          ]}
        />
        <Banner
          noBottomMargin
          {...bannerProps}
          imageUrl='/img/banners/06.jpg'
        />
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
        <TimeCodeTravel {...timeCodeTravelProps} />
        <Banner {...bannerProps} imageUrl='/img/banners/07.jpg' />
        <Descriptions
          {...descriptionsProps}
          noTopMargin
          listOfDescriptions={[
            {
              id: 0,
              text: `Проведите новогодние выходные активно — <span>прогулки на лыжах, снегоступах и простой сказочно-лесной трекинг</span> — то, что запомнится на долгое время! С нами можно отправиться в путешествие по зимнему нацпарку максимально безопасно и интересно: <span>замёрзжие озёра, притихший лес, звеоиные тропки, уютный костёр с хвойным чаем...</span> А после - согреться в бане, беседуя о духах природы под сытный ужин.`,
            },
            {
              id: 1,
              text: `Самые интересные локации Москвы, Подмосковья и не только; Обучение основам управления сапбордом; Аренду оборудования; Скидки постоянным клиентам; Сотрудничество с Event- агенствами; Индивидуальные программы (корпоративы, дни рождения и тд); Помощь в выборе и покупке досок;`,
            },
          ]}
        />
        <Banner {...bannerProps} imageUrl='/img/banners/01.jpg' />
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
        <Banner {...bannerProps} imageUrl='/img/banners/01.jpg' />
      </main>
    </>
  )
}

export default Rivers

Rivers.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  )
}
