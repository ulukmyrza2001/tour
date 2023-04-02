import React from "react";
import Head from "next/head";

import mainBlockProps, { MainBlock } from "@components/main-block/MainBlock";
import { AboutUsArticle } from "@components/about-us-article/AboutUsArticle";
import { Footer, Header, Wrapper } from '@components/layout'

import { NextPageWithLayout } from './page'

export const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Статься о нас</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='О нас'
          mainImageUrl='/img/banners/09.jpg'
          buttonText={''}
          isMinSize
        />
        <AboutUsArticle />
      </main>
    </>
  )
}

export default AboutUs;

AboutUs.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  )
}