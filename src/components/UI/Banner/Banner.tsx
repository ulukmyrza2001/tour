import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import styles from './Banner.module.scss'

interface IBanner extends React.ComponentPropsWithoutRef<'section'> {
  imageUrl: string
  isDeviceSize?: boolean
  noBottomMargin?: boolean
}

export const Banner: React.FC<IBanner> = ({
  imageUrl,
  isDeviceSize,
  noBottomMargin,
  className,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      viewport={{ once: true }}
      className={clsx(
        styles.banner,
        { [styles.banner_deviceSize]: isDeviceSize },
        { [styles.banner_noBottomMargin]: noBottomMargin },
        className
      )}
    >
      <div className={styles.banner__image}>
        <Image src={imageUrl} fill alt='Lake with forest' />
      </div>
    </motion.section>
  )
}

const defaultProps: IBanner = {
  imageUrl: '/img/banners/01.jpg',
}

export default defaultProps

Banner.defaultProps = defaultProps
