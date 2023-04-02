import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

import { LinkSecondary } from '@components/UI/Links'

import styles from './ListHouses.module.scss'
import MoreInformationModal from './MoreInformationModal'
export interface IHouse {
	id: number
	title: string
	href: string
	imageUrl: string[]
	description: string
}

interface IListHouses extends React.ComponentPropsWithoutRef<'section'> {
	listOfHouses: IHouse[]
}

export const ListHouses: React.FC<IListHouses> = ({
	className,
	listOfHouses,
}) => {
	const [house, setHouse] = useState<IHouse | null>(null)

	const showMore = (item: IHouse): void => setHouse(item)
	const hideMore = (): void => setHouse(null)

	return (
		<>
			<MoreInformationModal house={house} onClose={hideMore} />
			<section className={clsx(styles.houses, className)} id='listhouses'>
				<div className={clsx(styles.houses__container, 'container')}>
					<div className={styles.houses__body}>
						{listOfHouses.map((house, index) => (
							<motion.article
								onClick={showMore.bind(null, house)}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2 }}
								key={house.id}
								className={styles.houses__house}
							>
								<div className={styles.houses__content}>
									<h4 className={styles.houses__title}>
										{house.title}
									</h4>
									<LinkSecondary
										className={styles.houses__link}
										label='Подробнее'
										href={'?'}
									/>
								</div>
								<div className={styles.houses__image}>
									<Image
										src={house.imageUrl[0]}
										fill
										alt='Дом с мебелью'
									/>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

const defaultProps = {
	listOfHouses: [
		{
			id: 0,
			title: 'Дом Лункино (2+6 мест)',
			href: '/',
			imageUrl: [
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
			],
			description:
				'Баня давно и прочно вошла в повседневную жизнь русского человека. Но мало кто догадывается, насколько «древней» является эта постройка. Правда, ранее она обладала другим наименованием – «мовня» или «мыльня». Современное название встречается в летописях, датированных одиннадцатым веком. Баня издревле считалась местом, где проводят не только гигиенические процедуры, но и избавляются от сглаза',
		},
		{
			id: 1,
			title: 'Дом Лункино (4 места)',
			href: '/',
			imageUrl: [
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
			],
			description:
				'Баня давно и прочно вошла в повседневную жизнь русского человека. Но мало кто догадывается, насколько «древней» является эта постройка. Правда, ранее она обладала другим наименованием – «мовня» или «мыльня». Современное название встречается в летописях, датированных одиннадцатым веком. Баня издревле считалась местом, где проводят не только гигиенические процедуры, но и избавляются от сглаза',
		},
		{
			id: 2,
			title: 'Дом Лункино (4 места)',
			href: '/',
			imageUrl: [
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
				'/img/houses/01.jpg',
			],
			description:
				'Баня давно и прочно вошла в повседневную жизнь русского человека. Но мало кто догадывается, насколько «древней» является эта постройка. Правда, ранее она обладала другим наименованием – «мовня» или «мыльня». Современное название встречается в летописях, датированных одиннадцатым веком. Баня издревле считалась местом, где проводят не только гигиенические процедуры, но и избавляются от сглаза',
		},
	],
}

export default defaultProps

ListHouses.defaultProps = defaultProps
