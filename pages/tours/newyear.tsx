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

const TourNewYear: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Мещера Новогодний Тур</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='Тур “Новогодний”'
          buttonText={'Записаться'}
          date={{
            from: '13.01-15.01',
            to: '27.01-29.01',
          }}
        />
        <DescriptionTour {...descriptionTourProps} />
        <Adventages
          {...adventagesProps}
          listAdventageItems={[
            {
              id: 0,
              title: '10+',
              subtitle: 'Возраст',
            },
            {
              id: 1,
              title: '3 дня',
              subtitle: 'Длительность (3 дня, 2 ночевки)',
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
        <Banner {...bannerProps} imageUrl='/img/banners/03.jpg' />
        <OneTour {...oneTourProps} />
        <YandexMap {...yandexMapProps} />
        <TourIncluded {...tourIncludedProps} />
        <Banner {...bannerProps} imageUrl='/img/banners/04.jpg' />
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
          imageUrl='/img/banners/05.jpg'
        />
      </main>
    </>
  )
}

export default TourNewYear

TourNewYear.getLayout = page => {
  return (
    <Wrapper>
      <Header className='_sheet _blue' />
      {page}
      <Footer />
    </Wrapper>
  )
}
