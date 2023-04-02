import { MotionLinkPrimary } from '@components/UI/Links/LinkPrimary'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import styles from './MainBlock.module.scss'

export interface IMainBlock {
  title: string
  buttonText: string
  href: string
  video?: string
  isMinSize?: boolean
  mainImageUrl: string
  date?: {
    from: number | string
    to: number | string
  }
}

export const MainBlock: React.FC<IMainBlock> = ({
  title,
  href,
  buttonText,
  video,
  mainImageUrl,
  date,
  isMinSize,
}) => {
  return (
    <section className={styles.main}>
      <div className={clsx(styles.main__container, 'container')}>
        <div
          className={clsx(styles.main__body, {
            [styles.main__body_min]: isMinSize,
          })}
        >
          <div className={styles.main__content}>
            <motion.h1
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: '100%', opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.4,
                ease: 'easeOut',
              }}
              className={clsx(styles.main__title, 'title')}
            >
              {title}
            </motion.h1>
            {buttonText ? (
              <MotionLinkPrimary
                href={href}
                label={buttonText}
                className={styles.main__link}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: '100%', opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              />
            ) : null}
          </div>
          {date ? (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={styles.main__date}
            >
              <div className={styles.main__value}>{date?.from}</div>
              <div className={styles.main__value}>{date?.to}</div>
            </motion.div>
          ) : null}
        </div>
      </div>
      <div className={styles.main__meta}>
        {video ? (
          <video src={video} loop muted autoPlay />
        ) : (
          <Image src={mainImageUrl} fill alt='Поле с одуванчиками' />
        )}
      </div>
    </section>
  )
}

const defaultProps: IMainBlock = {
  title:
    'Мы провели десятки туров и корпоративов на различных акваториях.',
  buttonText: 'Посмотреть туры',
  mainImageUrl: '/img/main-block/01.jpg',
  href: '#tours',
}

MainBlock.defaultProps = defaultProps

export default defaultProps
