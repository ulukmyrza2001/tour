import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slide.module.scss'
const SlideBanner: FC = () => {
	const images = [
		'/img/banners/03.jpg',
		'/img/banners/01.jpg',
		'/img/banners/04.jpg',
		'/img/banners/07.jpg',
	]

	const slides = images.map((img, i) => {
		return (
			<SwiperSlide
				className={styles['swiper-slide']}
				key={`slide-${i}`}
				style={{ listStyle: 'none' }}
			>
				<Image src={img} width={600} height={300} alt='Дом с мебелью' />
			</SwiperSlide>
		)
	})

	return (
		<div className={styles.wrapper}>
			<Swiper
				pagination={true}
				modules={[Pagination, Navigation]}
				className={styles.swiper}
				navigation={{
					nextEl: '.slider-right',
					prevEl: '.slider-left',
				}}
			>
				{slides}
			</Swiper>
			<br />
			<div className={styles.wrapper_slider_nav}>
				<button
					type='button'
					className={clsx(styles['slider-left'], 'slider-left')}
				>
					<Image
						src={'/img/left.svg'}
						alt='left'
						width={50}
						height={50}
					/>
				</button>
				<button
					type='button'
					className={clsx(styles['slider-right'], 'slider-right')}
				>
					<Image
						src={'/img/right.svg'}
						alt='left'
						width={50}
						height={50}
					/>
				</button>
			</div>
		</div>
	)
}

export default SlideBanner
