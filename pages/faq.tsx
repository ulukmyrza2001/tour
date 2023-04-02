import Head from 'next/head'

import FAQWrapperProps, { FAQWrapper } from '@components/faq/faq'
import { Footer, Header, Wrapper } from '@components/layout'
import mainBlockProps, {
  MainBlock,
} from '@components/main-block/MainBlock'

import { NextPageWithLayout } from './page'

export const FAQ: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='Мы составили список популярных вопросов, чтобы вам было проще'
          video='/video/02.mp4'
          buttonText={''}
          isMinSize
          date={undefined}
        />
        <FAQWrapper {...FAQWrapperProps} />
      </main>
    </>
  )
}

export default FAQ

FAQ.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
      <div>
        ВОТ НОВАЯ НОВОСТЬ
      </div>
      <div>
        БуДЬ ЗВЕЗДОЙ INSTAGRAM
      </div>
      <div>
        ПРОЙДИТЕ тест
      </div>
      <div>
        мы запустились
      </div>
      <div>
        ПЛАТФОРМА SKILLMI
      </div>
      <div>
        Статья 5
      </div>
      <div>
        Статья 6
      </div>
      <div>
        Статья 1
      </div><div>
        Статья 1
      </div>
      <div>
        Статья 1
      </div>
      <div>
        Статья 1
      </div>
    </Wrapper>
  )
}
