import Head from 'next/head'

import { Footer, Header, Wrapper } from '@components/layout'
import mainBlockProps, {
  MainBlock,
} from '@components/main-block/MainBlock'
import { PostArticle } from '@components/post-article/PostArticle'

import { NextPageWithLayout } from '../page'

export const Article: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Articles </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='Сложно ли управлять сапбордом?'
          mainImageUrl='/img/main-block/04.jpg'
          buttonText={''}
          isMinSize
          date={undefined}
        />
        <PostArticle />
      </main>
    </>
  )
}

export default Article

Article.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  )
}
