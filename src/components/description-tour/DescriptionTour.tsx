import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import styles from './DescriptionTour.module.scss'

interface IDescriptionTour
  extends React.ComponentPropsWithoutRef<'section'> {
  listOfAdventages: {
    id: number
    name: string
  }[]
  title: string
  text: string
  backgroundImageUrl: string
  coord: [number, number]
}

export const DescriptionTour: React.FC<IDescriptionTour> = ({
  className,
  title,
  listOfAdventages,
  text,
  backgroundImageUrl,
  coord,
}) => {
  return (
    <section className={clsx(styles.description, className)}>
      <div className={styles.description__container}>
        <div className={styles.description__adventages}>
          {listOfAdventages.map((obj, index) => (
            <motion.div
              initial={{ x: `-100%`, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              key={obj.id}
              className={clsx(
                styles.description__adventage,
                '_icon-star-main'
              )}
            >
              <h5 className={styles.description__name}>{obj.name}</h5>
            </motion.div>
          ))}
        </div>
        <div className={styles.description__info}>
          <motion.h2
            initial={{ y: `100%`, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={clsx(
              styles.description__title,
              'first-letter-fonts _icon-star-rate'
            )}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.description__text}
          >
            {text}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.description__coord}
        >
          {coord.join(', ')}
        </motion.div>
      </div>
      <div className={styles.description__image}>
        <Image fill src={backgroundImageUrl} alt='Фон для туров' />
      </div>
    </section>
  )
}

const defaultProps: IDescriptionTour = {
  listOfAdventages: [
    {
      id: 0,
      name: 'Проживание',
    },
    {
      id: 1,
      name: 'Услуги инструкторов',
    },
    {
      id: 2,
      name: 'Туристические лыжи, палки ботинки',
    },
    {
      id: 3,
      name: 'Питание на время тура',
    },
    {
      id: 4,
      name: 'Баня',
    },
    {
      id: 5,
      name: 'Билет в нацпарк',
    },
    {
      id: 6,
      name: 'Страховка',
    },
  ],
  title:
    'Проведите новогодние выходные активно — прогулки на лыжах, снегоступах и простой сказочно-лесной трекинг',
  text: 'Озеро Белое, Озеро Великое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.',
  backgroundImageUrl: '/img/adventages/01.png',
  coord: [55.19487, 40.166803],
}

export default defaultProps

DescriptionTour.defaultProps = defaultProps
