import SlideTourItem from '@components/slide-tour-item/SlideTourItem'
import { ISliderTours } from '@components/slider-tours/SliderTours'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './Blog.module.scss'

export const Blog: FC<ISliderTours> = ({ listSlideItems, className }) => {
	console.log(listSlideItems)

	return (
		<section className={clsx(styles.about, className)}>
			<div className={clsx(styles.about__container, 'container')}>
				<div className={styles.body}>
					<div className={styles.content}>
						<motion.h1
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: '100%', opacity: 0 }}
							viewport={{ once: true }}
							transition={{
								delay: 0.4,
								duration: 0.4,
								ease: 'easeOut',
							}}
							style={{ color: 'black' }}
							className={clsx(styles.title, 'title')}
						>
							Наш блог
						</motion.h1>
						<div className={styles.wrapper_tab}>
							<p
								className={clsx(
									styles.wrapper_tab__tab,
									styles.wrapper_tab__active,
								)}
							>
								О нас
							</p>
							<p className={clsx(styles.wrapper_tab__tab)}>
								Туристическое интересное
							</p>
							<p className={clsx(styles.wrapper_tab__tab)}>
								Заметки с наших маршрутов
							</p>
						</div>
						<div className={styles.wrapper_tours}>
							{listSlideItems.map((tour, i) => (
								<SlideTourItem key={i} {...tour} />
							))}
						</div>
						<div className={styles.wrapper_btn}>
							<button>Еще</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const defaultProps: ISliderTours = {
	listSlideItems: [
		{
			id: 0,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечег',
			imageUrl: '/img/banners/01.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 1,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечег',
			imageUrl: '/img/banners/06.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 2,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
			imageUrl: '/img/banners/04.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 3,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
			imageUrl: '/img/banners/03.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 4,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечег',
			imageUrl: '/img/banners/01.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 5,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечег',
			imageUrl: '/img/banners/02.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 6,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
			imageUrl: '/img/banners/05.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 7,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
			imageUrl: '/img/banners/07.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
		{
			id: 7,
			date: new Date(),
			title: 'Походная баня – это специальная палатк, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
			imageUrl: '/img/banners/04.jpg',
			href: '/articles/1',
			typeSlide: 'Блог',
			typeTrip: 'Туризм',
		},
	],
}

export default defaultProps

Blog.defaultProps = defaultProps
