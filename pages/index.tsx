import Head from 'next/head'

import adventagesProps, {
  Adventages,
} from '@components/adventages/Adventages'
import boastProps, { Boast } from '@components/boast/Boast'
import descriptionsProps, {
  Descriptions,
} from '@components/descriptions/Descriptions'
import guestAccommodationProps, {
  GuestAccommodation,
} from '@components/guest-accommodation/GuestAccommodation'
import { Footer, Header, Wrapper } from '@components/layout'
import listHousesProps, {
  ListHouses,
} from '@components/list-houses/ListHouses'
import listToursProps, {
  ListTours,
} from '@components/list-tours/ListTours'
import mainBlockProps, {
  MainBlock,
} from '@components/main-block/MainBlock'
import previewTourProps, {
  PreviewTour,
} from '@components/preview-tour/PreviewTour'
import sliderToursProps, {
  SliderTours,
} from '@components/slider-tours/SliderTours'
import toursProps, { Tours } from '@components/tours/Tours'
import bannerProps, { Banner } from '@components/UI/Banner/Banner'
import yandexMapProps, {
  YandexMap,
} from '@components/yandex-map/YandexMap'

import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Мещера Туры</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          video='/video/02.mp4'
          title='Мы провели десятки туров и корпоративов на различных акваториях.'
        />
        <Descriptions {...descriptionsProps} />
        <Adventages {...adventagesProps} />
        <Banner {...bannerProps} imageUrl='/img/banners/01.jpg' />
        <Boast {...boastProps} />
        <Tours {...toursProps} />
        <ListTours {...listToursProps} />
        <ListHouses {...listHousesProps} />
        <GuestAccommodation {...guestAccommodationProps} />
        <Banner {...bannerProps} imageUrl='/img/banners/02.jpg' />
        <PreviewTour {...previewTourProps} />
        <SliderTours {...sliderToursProps} />
        <YandexMap {...yandexMapProps} />
      </main>
    </>
  )
}

export default Home

Home.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  )
}
