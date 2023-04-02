import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IHouse } from './ListHouses'
import styles from './Modal.module.scss'

type IModal = {
	house: IHouse | null
	onClose: () => void
}

const MoreInformationModal: FC<IModal> = ({ house, onClose }) => {
	const slides = house?.imageUrl.map((img, i) => {
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

	useEffect(() => {
		if (house) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}, [house])

	return (
		<>
			<AnimatePresence>
				{!!house && (
					<div className={styles.backdrop}>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className={styles.wrapper}
						>
							<div
								onClick={onClose}
								className={styles.wrapper_close}
							>
								<CgClose color='white' size={20} />
							</div>
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
							<div className={styles.description_wrapper}>
								<div className={styles.wrapper_slider_nav}>
									<button
										type='button'
										className={clsx(
											styles['slider-left'],
											'slider-left',
										)}
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
										className={clsx(
											styles['slider-right'],
											'slider-right',
										)}
									>
										<Image
											src={'/img/right.svg'}
											alt='left'
											width={50}
											height={50}
										/>
									</button>
								</div>
								<h1 className={styles.title}>{house.title}</h1>
								<br />
								<p className={styles.description}>
									{house.description}
								</p>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	)
}

export default MoreInformationModal
