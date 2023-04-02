import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import {
  ITimeCodeTravelItem,
  TimeCodeTravelItem,
} from '@components/time-code-travel-item/TimeCodeTravelItem'

import styles from './TimeCodeTravel.module.scss'

interface ITimeCodeTravel
  extends React.ComponentPropsWithoutRef<'section'> {
  listOfCodeTravels: ITimeCodeTravelItem[]
}

export const TimeCodeTravel: React.FC<ITimeCodeTravel> = ({
  className,
  listOfCodeTravels,
}) => {
  return (
    <section className={clsx(styles.time, className)}>
      <div className={clsx(styles.time__container, 'container')}>
        <div className={styles.time__body}>
          {listOfCodeTravels.map((tour, index) => (
            <motion.div
              initial={{ opacity: 0, y: `${100}%` }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              key={tour.idx}
            >
              <TimeCodeTravelItem {...tour} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps: ITimeCodeTravel = {
  listOfCodeTravels: [
    {
      idx: 0,
      title: 'Встречаемся на старте.',
      times: ['10:00'],
      text: 'Упаковка личных вещей. Инструктаж по технике безопасности и основам управления сапбордом.',
      travelInfo: [
        {
          id: 0,
          name: 'ОБЯЗАТЕЛЬНО (ЛИЧНЫЕ ВЕЩИ)',
          text: 'удобная одежда по погоде; головной убор; пляжные тапочки (типа Crocs, коралловые);  запасной комплект одежды; бутылка с водой 1л; солнцезащитный крем; средства личной гигиены',
        },
        {
          id: 1,
          name: 'РЕКОМЕНДУЕМ ВЗЯТЬ С СОБОЙ',
          text: 'удобная одежда по погоде;  головной убор;  пляжные тапочки  (типа Crocs, коралловые);  запасной комплект одежды;  бутылка с водой 1л;  солнцезащитный крем;  средства личной гигиены.',
        },
      ],
    },
    {
      idx: 1,
      title: 'Начало маршрута. Движение по маршруту.',
      times: ['11:00', '14:00'],
      text: 'Упаковка личных вещей. Инструктаж по технике безопасности и основам управления сапбордом.',
      travelInfo: [
        {
          id: 0,
          name: 'ВКЛЮЧЕНО В СТОИМОСТЬ',
          text: 'услуги инструктора; обучение основам SUP-сёрфинга; SUP-доска (сапборд) с веслом; спасательный жилет; гермомешок для личных вещей;',
        },
        {
          id: 1,
          text: 'питание на время маршрута (горячий обед); посуда; трансфер водителей финиш-старт к автомобилям',
        },
      ],
    },
    {
      idx: 2,
      title: 'Горячий обед. Отдых.',
      times: ['14:00', '15:00'],
      text: 'Упаковка личных вещей. Инструктаж по технике безопасности и основам управления сапбордом.',
      travelInfo: [
        {
          id: 0,
          name: 'ВКЛЮЧЕНО В СТОИМОСТЬ',
          text: 'услуги инструктора; обучение основам SUP-сёрфинга; SUP-доска (сапборд) с веслом; спасательный жилет; гермомешок для личных вещей;',
        },
        {
          id: 1,
          text: 'питание на время маршрута (горячий обед); посуда; трансфер водителей финиш-старт к автомобилям',
        },
      ],
    },
    {
      idx: 3,
      title: 'Продолжение движения',
      times: ['15:00', '17:00'],
      text: 'Упаковка личных вещей. Инструктаж по технике безопасности и основам управления сапбордом.',
      travelInfo: [
        {
          id: 0,
          name: 'ВКЛЮЧЕНО В СТОИМОСТЬ',
          text: 'услуги инструктора; обучение основам SUP-сёрфинга; SUP-доска (сапборд) с веслом; спасательный жилет; гермомешок для личных вещей;',
        },
        {
          id: 1,
          text: 'питание на время маршрута (горячий обед); посуда; трансфер водителей финиш-старт к автомобилям',
        },
      ],
    },
  ],
}

export default defaultProps

TimeCodeTravel.defaultProps = defaultProps
