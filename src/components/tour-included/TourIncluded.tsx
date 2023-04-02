import clsx from 'clsx'
import { motion } from 'framer-motion'
import htmlToReact from 'html-react-parser'
import React from 'react'

import { useWindow } from '@hooks/useWindow'

import styles from './TourIncluded.module.scss'

interface ITourInclude {
  id: number
  title: string
  text: string
}

interface ITourIncluded
  extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  isProduct?: boolean
  listOfTourInfos: ITourInclude[]
}

export const TourIncluded: React.FC<ITourIncluded> = ({
  className,
  listOfTourInfos,
  title,
  isProduct,
}) => {
  const [isShowInfo, setIsShowInfo] = React.useState<boolean>(true)

  const { width } = useWindow()

  const isMobile = width ? width < 767.98 : null

  const handleClickShowInfo = () => setIsShowInfo(show => !show)

  return (
    <section
      className={clsx(styles.include, className, {
        [styles.include_show]: isShowInfo,
      })}
    >
      <div className={clsx(styles.include__header, styles.header)}>
        <div className={clsx(styles.header__container, 'container')}>
          <div className={styles.header__body}>
            <motion.h2
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={clsx(
                styles.header__title,
                'first-letter-fonts'
              )}
            >
              {title}
            </motion.h2>
            {!isMobile ? (
              <motion.button
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={handleClickShowInfo}
                type='button'
                className={styles.header__show}
              >
                <div className={styles.header__label}>
                  РЕКОМЕНДУЕМ ВЗЯТЬ
                </div>
                <span
                  className={clsx(
                    styles.header__icon,
                    '_icon-angle-top'
                  )}
                />
              </motion.button>
            ) : null}
          </div>
        </div>
        {isMobile ? (
          <motion.button
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={handleClickShowInfo}
            type='button'
            className={styles.header__show}
          >
            <div className={styles.header__label}>
              РЕКОМЕНДУЕМ ВЗЯТЬ ЧТО ВКЛЮЧЕНО
            </div>
            <span
              className={clsx(styles.header__icon, '_icon-angle-top')}
            />
          </motion.button>
        ) : null}
      </div>
      <div className={styles.include__body}>
        <div className={clsx(styles.include__container, 'container')}>
          <div
            className={clsx(styles.include__content, {
              [styles.include__content_full]: isProduct,
            })}
          >
            {listOfTourInfos.map((tour, index) => (
              <motion.article
                initial={{ x: `-${100 * index}%`, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                key={tour.id}
                className={styles.include__item}
              >
                <h4 className={styles.include__title}>
                  {tour.title}
                </h4>
                <div className={styles.include__text}>
                  <p>{htmlToReact(tour.text)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const defaultProps: ITourIncluded = {
  title: 'Тур “Новогодний” Информация',
  listOfTourInfos: [
    {
      id: 0,
      title: 'РЕКОМЕНДУЕМ ВЗЯТЬ',
      text: `
        одежда по погоде (желательно соблюдение принципа слоёв - термобелье, слой флиса, куртки и штаны с ветрозащитой, жилетки) 
        варежки или лыжные перчатки, запасные носки
        баф или балаклава в дополнение к шапке
        пенопопа; кружка, ложка, вилка;
        личная косметичка и аптечка
        пару полотенец (для бани и душа) 
        тёплая домашняя одежда; тапочки
      `,
    },
    {
      id: 1,
      title: 'ЧТО ВКЛЮЧЕНО',
      text: `
        Проживание (2 ночи);
        Услуги инструкторов;
        Туристические лыжи, палки ботинки;
        Питание на время тура: <br />
        <span>день 1 - </span> перекус на прогулке, домашний ужин; <br />
        <span>день 2 - </span> завтрак, обед на костре, домашний ужин; <br />
        <span>день 3 - </span> завтрак, домашний обед;<br />
        Баня (в один из дней);
        Билет в нацпарк;
        Страховка. 
      `,
    },
  ],
}

export default defaultProps

TourIncluded.defaultProps = defaultProps
