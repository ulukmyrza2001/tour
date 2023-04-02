import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './Adventages.module.scss'

export interface IAdventageItem {
  id: number
  title?: string | number
  stars?: [boolean, boolean, boolean]
  subtitle: string
}

interface IAdventages
  extends React.ComponentPropsWithoutRef<'section'> {
  listAdventageItems: IAdventageItem[]
  isGold?: boolean
}

export const Adventages: React.FC<IAdventages> = ({
  className,
  listAdventageItems,
  isGold,
}) => {
  return (
    <section className={clsx(styles.adventages, className)}>
      <div
        className={clsx(styles.adventages__container, 'container')}
      >
        <div className={styles.adventages__body}>
          {listAdventageItems.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ y: `${index * 100}`, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={clsx(styles.adventages__adventage)}
            >
              {obj.stars?.length ? (
                <div className={styles.adventages__stars}>
                  {obj.stars.map((isStar, _id) => (
                    <span
                      key={_id}
                      className={clsx(
                        styles.adventages__star,
                        { [styles.adventages__star_active]: isStar },
                        { [styles.adventages__star_gold]: isGold },
                        '_icon-star-main'
                      )}
                    />
                  ))}
                </div>
              ) : (
                <h4 className={styles.adventages__title}>
                  {obj.title}
                </h4>
              )}
              <div className={styles.adventages__subtitle}>
                {obj.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps = {
  listAdventageItems: [
    {
      id: 0,
      title: '20+',
      subtitle: 'SUP-бордов',
    },
    {
      id: 1,
      title: '7',
      subtitle: 'Туров',
    },
    {
      id: 2,
      title: '1200',
      subtitle: 'Клиентов',
    },
    {
      id: 3,
      title: '42',
      subtitle: 'Отзыва',
    },
  ],
}

Adventages.defaultProps = defaultProps

export default defaultProps
