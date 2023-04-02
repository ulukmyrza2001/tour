import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './Boast.module.scss'

interface IBoast extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  subtitle: string
}

export const Boast: React.FC<IBoast> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <section className={clsx(styles.boast, className)}>
      <div className={clsx(styles.boast__container, 'container')}>
        <div className={styles.boast__meta}>
          <motion.span
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={clsx(
              styles.boast__icon,
              styles.boast__icon_top,
              '_icon-star-rate'
            )}
          />
          <motion.h2
            className={clsx(styles.boast__title, 'title')}
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={clsx(
              styles.boast__icon,
              styles.boast__icon_bottom,
              '_icon-star-rate'
            )}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.boast__subtitle}
        >
          {subtitle}
        </motion.div>
      </div>
    </section>
  )
}

const defaultProps = {
  title:
    'Мы провели десятки туров и корпоративов на различных акваториях. ',
  subtitle: 'Москва-река, Большой Строгинский зат., Химкинское вдхр.',
}

export default defaultProps

Boast.defaultProps = defaultProps
