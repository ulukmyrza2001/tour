import clsx from 'clsx'
import { motion } from 'framer-motion'
import htmlToReact from 'html-react-parser'
import React from 'react'

import styles from './PrimarySection.module.scss'

export interface IPrimarySection
  extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  description?: string
}

export const PrimarySection: React.FC<IPrimarySection> = ({
  title,
  description,
  className,
  children,
}) => {
  return (
    <section className={clsx(styles.section, className)}>
      <div className={clsx(styles.section__container, 'container')}>
        <div
          className={clsx(styles.section__header, {
            [styles.section__header_big]: !description,
          })}
        >
          <motion.h2
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={clsx(
              styles.section__title,
              'first-letter-fonts second-title'
            )}
          >
            {htmlToReact(title)}
          </motion.h2>
          {description ? (
            <motion.p
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.section__description}
            >
              {description}
            </motion.p>
          ) : null}
        </div>
        <div className={styles.section__body}>{children}</div>
      </div>
    </section>
  )
}
