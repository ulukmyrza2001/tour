import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import {
  IOneTourItem,
  OneTourItem,
} from '@components/one-tour-item/OneTourItem'

import styles from './OneTour.module.scss'

interface IOneTour extends React.ComponentPropsWithoutRef<'section'> {
  listOfTours: IOneTourItem[]
}

export const OneTour: React.FC<IOneTour> = ({
  className,
  listOfTours,
}) => {
  return (
    <section className={clsx(styles.onetour, className)}>
      <div className={clsx(styles.onetour__container, 'container')}>
        <div className={styles.onetour__body}>
          {listOfTours.map(tour => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <OneTourItem key={tour.id} {...tour} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps: IOneTour = {
  listOfTours: [
    {
      id: 0,
      title: 'Тур “Новогодний”',
      stars: [true, true, false],
      description:
        'Озеро Великое, озеро Белое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.',
      href: '/',
      times: ['3.01-5.01', '7.01-9.01'],
    },
  ],
}

export default defaultProps

OneTour.defaultProps = defaultProps
