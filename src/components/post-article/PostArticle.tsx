import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import postArticleSliderProps, {
  PostArticleSlider,
} from '@components/post-article-slider/PostArticleSlider'
import postSliderProgressProps, {
  PostSliderProgress,
} from '@components/post-slider-progress/PostSliderProgress'

import styles from './PostArticle.module.scss'

interface IPostArticle
  extends React.ComponentPropsWithoutRef<'section'> {}

export const PostArticle: React.FC<IPostArticle> = ({
  className,
}) => {
  return (
    <section className={clsx(styles.post, className)}>
      <div className={clsx(styles.post__container, 'container')}>
        <div className={styles.post__body}>
          <div className={styles.post__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Команда SUPhero работает для вас с 2020 года. За это
              время мы провели десятки туров и корпоративов на
              различных акваториях.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Наши инструктора- действующие спасатели, которые
              безопасно и профессионально организуют ваш отдых. Как
              правило, для того, чтобы уверенно встать на ноги,
              потребуется 10-30 минут гребли.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              В начале движения мы рекомендуем почувствовать баланс в
              положениях сидя или стоя на коленях, пока адаптируется
              ваш вестибулярный аппарат. А после того как освоитесь,
              можно пробовать вставать на ноги. В любом случае,
              инструктор будет следить за вами и в при необходимости,
              подсказывать.
            </motion.p>
          </div>
          <div className={styles.post__progress}>
            <PostSliderProgress {...postSliderProgressProps} />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className={styles.post__badge}
            >
              <p className={styles.post__badgeText}>
                Сапбординг – это довольно молодой вид спорта, являющий
                одной из разновидностей серфинга.
              </p>
            </motion.div>
          </div>
          <div className={styles.post__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Команда SUPhero работает для вас с 2020 года. За это
              время мы провели десятки туров и корпоративов на
              различных акваториях. Наши инструктора- действующие
              спасатели, которые безопасно и профессионально
              организуют ваш отдых. Как правило, для того, чтобы
              уверенно встать на ноги, потребуется 10-30 минут гребли.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              В начале движения мы рекомендуем почувствовать баланс в
              положениях сидя или стоя на коленях, пока адаптируется
              ваш вестибулярный аппарат. А после того как освоитесь,
              можно пробовать вставать на ноги. В любом случае,
              инструктор будет следить за вами и в при необходимости,
              подсказывать. Наши инструктора- действующие спасатели,
              которые безопасно и профессионально организуют ваш
              отдых.
            </motion.p>
          </div>
          <motion.h3 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.post__title}
          >
            Встречаемся на старте.
          </motion.h3>
          <div className={styles.post__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Команда SUPhero работает для вас с 2020 года. За это
              время мы провели десятки туров и корпоративов на
              различных акваториях. Наши инструктора- действующие
              спасатели, которые безопасно и профессионально
              организуют ваш отдых. Как правило, для того, чтобы
              уверенно встать на ноги, потребуется 10-30 минут гребли.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              В начале движения мы рекомендуем почувствовать баланс в
              положениях сидя или стоя на коленях, пока адаптируется
              ваш вестибулярный аппарат. А после того как освоитесь,
              можно пробовать вставать на ноги. В любом случае,
              инструктор будет следить за вами и в при необходимости,
              подсказывать. Наши инструктора- действующие спасатели,
              которые безопасно и профессионально организуют ваш
              отдых.
            </motion.p>
          </div>
          <motion.h3 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.post__title}
          >
            Встречаемся на старте.
          </motion.h3>
          <div className={styles.post__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Команда SUPhero работает для вас с 2020 года. За это
              время мы провели десятки туров и корпоративов на
              различных акваториях. Наши инструктора- действующие
              спасатели, которые безопасно и профессионально
              организуют ваш отдых. Как правило, для того, чтобы
              уверенно встать на ноги, потребуется 10-30 минут гребли.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              В начале движения мы рекомендуем почувствовать баланс в
              положениях сидя или стоя на коленях, пока адаптируется
              ваш вестибулярный аппарат. А после того как освоитесь,
              можно пробовать вставать на ноги. В любом случае,
              инструктор будет следить за вами и в при необходимости,
              подсказывать. Наши инструктора- действующие спасатели,
              которые безопасно и профессионально организуют ваш
              отдых.
            </motion.p>
          </div>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.post__info}
          >
            <time className={styles.post__date} dateTime='2022-12-27'>
              27 декабря, 2022
            </time>
            <div className={styles.post__viewers}>252 просмотра</div>
          </motion.div>
        </div>
        <div className={styles.post__slider}>
          <PostArticleSlider {...postArticleSliderProps} />
        </div>
      </div>
    </section>
  )
}
