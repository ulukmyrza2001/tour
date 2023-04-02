import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import postArticleSliderProps, {
  PostArticleSlider,
} from '@components/post-article-slider/PostArticleSlider'

import styles from './AboutUsArticle.module.scss'

interface IAboutUsArticle
  extends React.ComponentPropsWithoutRef<'section'> {}

export const AboutUsArticle: React.FC<IAboutUsArticle> = ({
  className,
}) => {
  return (
    <section className={clsx(styles.about, className)}>
      <div className={clsx(styles.about__container, 'container')}>
        <div className={styles.about__body}>
          <div className={styles.about__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Команда Мещера ТУР — это Алексей, Пётр и Варвара.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              На протяжении последних нескольких лет мы открывали для
              себя пути среди древних озёр и лесов, и теперь
              приглашаем гостей в наши программы выходного дня (и не
              только). Давайте знакомиться!
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Алексей — автор концепции и идейный вдохновитель. Именно
              он отвечает за уютную атмосферу. Этот человек насыпет
              ягод в вашу кашу и создаст циклон ароматного пара над
              счастливой и уставшей после маршрута спиной… Но самое
              главное — Алексей наш стратег и бизнес-движок. Имея опыт
              руководства проектами, он нашёл себя именно здесь, на
              мещерском «полуострове» среди Великих озёр. Для него
              Мещера ТУР — дело сердца.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.about__image}
          >
            <Image
              src='/img/about-us/01.jpg'
              fill
              alt='Алексей в зимнем лесе'
            />
          </motion.div>
          <div className={styles.about__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Пётр — главный инструктор, исследователь Мещеры с 2010
              года и гарант вашей безопасности в походе. Он —
              разработчик маршрутов и основатель проекта SUPhero.
              Именно в рамках его туров мы впервые приглашали
              участников на более длительные программы: летом мы
              провели несколько #mesherasupfest и убедились, что
              Мещера ТУР — то, чего всем не хватает. Пётр —
              сертифицированный SUP-инструктор, профессиональный
              спасатель, а также инструктор детско-юношеского туризма.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.about__image}
          >
            <Image
              src='/img/about-us/02.jpg'
              fill
              alt='Петр держит зонт'
            />
          </motion.div>
          <div className={styles.about__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Варвара — визуал проекта и второй исследователь Мещеры.
              «Пройти новеньким маршрутом» — самое частое предложение
              для семейных прогулок. Некогда увлеченный
              архитектор-градостроитель она считает природную среду
              главным источником душевных сил и разделяет идеи
              бережного к ней отношения, а также убеждена, что
              представлениями об истинной красоте и гармонии мы
              обязаны именно природе.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.about__image}
          >
            <Image
              src='/img/about-us/03.jpg'
              fill
              alt='Петр держит зонт'
            />
          </motion.div>
          <div className={styles.about__text}>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Каждый из нас горит идеей развития проекта Мещера ТУР.
              Нас объединяют общие ценности и любовь к активному
              образу жизни.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Мы хотим, чтобы возможность погружения в природные миры
              озёр, рек и лесов была доступнее городскому человеку. Мы
              верим, что это делает нашу непростую реальность немного
              лучше. <br />
              Мы стремимся убедить (и убедиться самим), что созерцание
              стихий, активное движение и дружественное общение людей
              на общем маршруте — то, чего не достаёт многим. Мы
              стараемся создать все условия, чтобы вы могли испытать
              настоящую перезагрузку от городских ритмов без суеты и
              забот, и готовы стать вашими проводниками в мир дикой
              природы Мещеры.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Мы надеемся, что каждый участник наших программ сможет
              перенять от нас тот восторг и умиротворение, которые мы
              находим в этих местах сами.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              До встречи на маршрутах!
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.about__info}
          >
            <time
              className={styles.about__date}
              dateTime='2022-12-27'
            >
              27 декабря, 2022
            </time>
            <div className={styles.about__viewers}>252 просмотра</div>
          </motion.div>
        </div>
        <div className={styles.about__slider}>
          <PostArticleSlider {...postArticleSliderProps} />
        </div>
      </div>
    </section>
  )
}
