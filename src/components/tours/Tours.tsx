import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Tours.module.scss'

interface ITourItem {
  id: number
  imageUrl: string
  href: string
  title: string
}

interface ITours extends React.ComponentPropsWithoutRef<'section'> {
  listTours: ITourItem[]
}

export const Tours: React.FC<ITours> = ({ className, listTours }) => {
  return (
    <section className={clsx(styles.tours, className)} id='tours'>
      <div className={clsx(styles.tours__container, 'container')}>
        <div className={styles.tours__body}>
          {listTours.map((tour, index) => (
            <motion.article
              initial={{ x: `-${100 * index}%`, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              key={tour.id}
              className={styles.tours__tour}
            >
              <Link href={tour.href} className={styles.tours__scope}>
                <div className={styles.tours__content}>
                  <h4 className={styles.tours__title}>
                    {tour.title}
                  </h4>
                  <button
                    type='button'
                    className={styles.tours__link}
                  >
                    Участвовать
                  </button>
                </div>
                <div className={styles.tours__image}>
                  <Image
                    src={tour.imageUrl}
                    fill
                    alt='Dandelion in the field'
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps = {
  listTours: [
    {
      id: 0,
      title: 'Тур “Новогодний”',
      href: '/tours/newyear',
      imageUrl: '/img/tours/01.jpg',
    },
    {
      id: 1,
      title: 'Тур “Зимние выходные”',
      href: '/tours/weekend',
      imageUrl: '/img/tours/02.jpg',
    },
    {
      id: 2,
      title: 'Тур прогулки "Реки Подмосковья"',
      href: '/tours/rivers',
      imageUrl: '/img/tours/03.jpg',
    },
  ],
}

export default defaultProps

Tours.defaultProps = defaultProps
