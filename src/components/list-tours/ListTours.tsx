import React from "react";
import clsx from "clsx";

import { PrimarySection } from "@components/primary-sections/PrimarySection";
import { IListItem, ListTourItem } from "@components/list-tour-item/ListToursItem";

import styles from "./ListTours.module.scss";

interface IListTours extends React.ComponentPropsWithoutRef<"section"> {
  title: string;
  listTours: IListItem[];
}

export const ListTours: React.FC<IListTours> = ({ className, title, listTours }) => {

  return (
    <PrimarySection
      title={title}
      description='Нажмите на тур для ознакомления с подробностями'
    > 
      {
        listTours.map(tour => (
          <ListTourItem key={tour.id} {...tour} />
        ))
      }
    </PrimarySection>
  )
}

const defaultProps: IListTours = {
  title: "Здесь вы можете ознакомиться со&nbsp;всеми возможными турами",
  listTours: [
    {
      id: 0,
      title: 'SUP прогулки "Акватории Москвы"',
      description: "Москва-река, Большой Строгинский зат., Химкинское вдхр.",
      stars: [true, false, false],
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      price: 1_500
    },
    {
      id: 1,
      title: 'SUP прогулки "Реки Подмосковья"',
      description: "Москва-река, Истра, Шерна, Десна.",
      stars: [true, false, false],
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      price: 3_500
    },
    {
      id: 2,
      title: 'Тур "Большая Пра"',
      description: "д. Калдево (Рязанская обл.) – д. Заводская Слобода (Рязанская обл.)",
      stars: [true, false, false],
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      price: 5_000
    },
    {
      id: 3,
      title: 'Тур "Верхняя Пра – лайт"',
      description: "пос. Мещерский Бор (Московская обл.) – д. Стружаны (Рязанская обл.)",
      stars: [true, false, false],
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      price: 4_000
    },
    {
      id: 4,
      title: 'Тур "Верхняя Пра"',
      description: "пос. Мещерский Бор (Московская обл.) – д. Калдево (Рязанская обл)",
      stars: [true, true, false],
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      price: 5_000
    },
  ]
};

export default defaultProps;

ListTours.defaultProps = defaultProps;