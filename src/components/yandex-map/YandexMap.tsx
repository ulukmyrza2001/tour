import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './YandexMap.module.scss'

interface IYandexMap
  extends React.ComponentPropsWithoutRef<'section'> {
  centerCoord: [number, number]
  zoom: number
  geometry: [number, number]
}

export const YandexMap: React.FC<IYandexMap> = ({
  className,
  centerCoord,
  zoom,
  geometry,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      viewport={{ once: true }}
      className={clsx(styles.map, className)}
    >
      <YMaps>
        <Map
          instanceRef={ref => {
            ref && ref.behaviors.disable('scrollZoom')
          }}
          width={'100%'}
          height={'100%'}
          defaultState={{
            center: centerCoord,
            zoom: zoom,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={[
            'control.ZoomControl',
            'control.FullscreenControl',
          ]}
        >
          <Placemark defaultGeometry={geometry} />
        </Map>
      </YMaps>
    </motion.section>
  )
}

const defaultProps: IYandexMap = {
  centerCoord: [55.75, 37.57],
  zoom: 9,
  geometry: [25.167107, 55.23075],
}

YandexMap.defaultProps = defaultProps

export default defaultProps
