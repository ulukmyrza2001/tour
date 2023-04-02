import Head from 'next/head'

import { Footer, Header, Wrapper } from '@components/layout'

import blogProps, { Blog } from '@components/blog/Blog'
import { NextPageWithLayout } from './page'

const BlogPage: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Блог</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='page'>
				<Blog {...blogProps} />
			</main>
		</>
	)
}

export default BlogPage

BlogPage.getLayout = (page) => {
	return (
		<Wrapper>
			<Header />
			{page}
			<Footer />
		</Wrapper>
	)
}
