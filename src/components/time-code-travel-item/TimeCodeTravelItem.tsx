import clsx from 'clsx'
import React from 'react'

import { useWindow } from '@hooks/useWindow'

import styles from './TimeCodeTravelItem.module.scss'

interface ITravelInfo {
  id: number
  name?: string
  text: string
}

export interface ITimeCodeTravelItem
  extends React.ComponentPropsWithoutRef<'article'> {
  idx: number
  times: [string, string?]
  title: string
  text: string
  travelInfo: ITravelInfo[]
}

export const TimeCodeTravelItem: React.FC<ITimeCodeTravelItem> = ({
  className,
  times,
  travelInfo,
  text,
  title,
}) => {
  const [isShow, setIsShow] = React.useState<boolean>(true)

  const handleClickShow = () => setIsShow(prev => !prev)

  const { width } = useWindow()

  const isMobile = width ? width > 767.98 : null

  return (
    <article
      className={clsx(
        styles.time,
        { [styles.time_show]: !isShow },
        className
      )}
    >
      <div className={styles.time__top}>
        {isMobile ? (
          <div className={styles.time__times}>
            {times.join('-')}
            <span>МСК</span>
          </div>
        ) : null}
        <h4 className={styles.time__title}>
          <span>{title}</span>
          {!isMobile ? (
            <div className={styles.time__times}>
              {times.join('-')}
              {times.length === 1 ? <small>мск</small> : null}
            </div>
          ) : null}
        </h4>
        <div className={styles.time__text}>
          <p>{text}</p>
        </div>
        <button
          type='button'
          onClick={handleClickShow}
          className={styles.time__button}
        >
          <span
            className={clsx(styles.time__icon, '_icon-angle-top')}
          />
          <p className={styles.time__description}>
            {travelInfo[0].name}
          </p>
        </button>
      </div>
      <div className={styles.time__hidden} hidden={isShow}>
        <div className={styles.time__body}>
          {travelInfo.map(travel => (
            <article
              key={travel.id}
              className={clsx(styles.time__item, styles.item)}
            >
              <h4 className={styles.item__title}>{travel.name}</h4>
              <div className={styles.item__text}>
                <p>{travel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  )
}
