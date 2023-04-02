import clsx from 'clsx'
import React from 'react'

import {
  IPreviewTourItem,
  PreviewTourItem,
} from '@components/preview-tour-item/PreviewTourItem'
import { PrimarySection } from '@components/primary-sections/PrimarySection'

import styles from './PreviewTour.module.scss'

interface IPreviewTour
  extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  description?: string
  listOfPreviewTours: IPreviewTourItem[]
}

export const PreviewTour: React.FC<IPreviewTour> = ({
  title,
  description,
  className,
  listOfPreviewTours,
}) => {
  return (
    <PrimarySection
      title={title}
      description={description}
      className={clsx(styles.preview, className)}
    >
      {listOfPreviewTours.map(tour => (
        <PreviewTourItem key={tour.id} {...tour} />
      ))}
    </PrimarySection>
  )
}

const defaultProps: IPreviewTour = {
  title:
    '<span>Походная баня</span> – это специальная палатка, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. Ну а про магию её сочетания с рекой и говорить нечего!',
  description: undefined,
  listOfPreviewTours: [
    {
      id: 0,
      title: 'Походная баня',
      description: 'Включена в туры по реке Пра',
      stars: [true, false, false],
      mapImageUrl: '/img/maps/01.jpg',
      href: '/',
    },
  ],
}

export default defaultProps

PreviewTour.defaultProps = defaultProps
