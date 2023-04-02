import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import styles from './OneTourItem.module.scss'
export interface IOneTourItem {
  id: number
  title: string
  stars: [boolean, boolean, boolean]
  description: string
  href: string
  className?: string
  times: [string, string]
}

export const OneTourItem: React.FC<IOneTourItem> = ({
  title,
  stars,
  href,
  description,
  className,
  times,
}) => {
  return (
    <article className={clsx(styles.onetour, className)}>
      <div className={styles.onetour__action}>
        <Link href={href} className={styles.onetour__link}>
          {title}
        </Link>
      </div>
      <div className={styles.onetour__body}>
        <div className={styles.onetour__stars}>
          {stars.map((isStar, _id) => (
            <span
              key={_id}
              className={clsx(
                styles.onetour__star,
                { [styles.onetour__star_active]: isStar },
                '_icon-star-main'
              )}
            />
          ))}
        </div>
        <div className={styles.onetour__subtitle}>{description}</div>
        <div className={styles.onetour__time}>
          {times.map((time, _id) => (
            <span key={_id} className={styles.onetour__value}>
              {time}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
