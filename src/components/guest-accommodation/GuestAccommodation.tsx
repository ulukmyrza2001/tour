import React from "react";
import clsx from "clsx";

import { PrimarySection } from "@components/primary-sections/PrimarySection";

import { GuestAccomodationItem, IGuest } from "@components/guest-accomodation-item/GuestAccomodationItem";

import styles from "./GuestAccommodation.module.scss";

interface IGuestAccommodation extends React.ComponentPropsWithoutRef<"section"> {
  title: string;
  description: string;
  listOfGuests: IGuest[];
}

export const GuestAccommodation: React.FC<IGuestAccommodation> = ({ className, title, description, listOfGuests }) => {
  return (
    <PrimarySection 
      title={title}
      description={description}
      className={clsx(styles.guest, className)}
    >
      {
        listOfGuests.map(guest => (
          <GuestAccomodationItem key={guest.id} {...guest} />
        ))
      }
    </PrimarySection>
  )
}

const defaultProps = {
  title: "Размещение гостей",
  description: "Нажмите на  вариант размещения для ознакомления с подробностями",
  listOfGuests: [
    {
      id: 0,
      title: "Лесной хостел (2+6 мест)",
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      placementList: [
        {
          id: 0,
          name: "С детьми",
          availability: false,
        },
        {
          id: 1,
          name: "С животными",
          availability: true,
        },
        {
          id: 2,
          name: "Доп. спальное место",
          availability: false,
        },
        {
          id: 3,
          name: "Wi-Fi",
          availability: false,
        },
        {
          id: 4,
          name: "Розетки",
          availability: false,
        },
        {
          id: 5,
          name: "Бронирование",
          availability: false,
        },
      ],
    },
    {
      id: 1,
      title: "Приют с камином (6 мест)",
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      placementList: [
        {
          id: 0,
          name: "С детьми",
          availability: true,
        },
        {
          id: 1,
          name: "С животными",
          availability: true,
        },
        {
          id: 2,
          name: "Доп. спальное место",
          availability: false,
        },
        {
          id: 3,
          name: "Wi-Fi",
          availability: false,
        },
        {
          id: 4,
          name: "Розетки",
          availability: false,
        },
        {
          id: 5,
          name: "Бронирование",
          availability: false,
        },
      ],
    },
    {
      id: 2,
      title: "Дом шамана (6 мест)",
      mapImageUrl: "/img/maps/01.jpg",
      href: "/",
      placementList: [
        {
          id: 0,
          name: "С детьми",
          availability: false,
        },
        {
          id: 1,
          name: "С животными",
          availability: false,
        },
        {
          id: 2,
          name: "Доп. спальное место",
          availability: false,
        },
        {
          id: 3,
          name: "Wi-Fi",
          availability: false,
        },
        {
          id: 4,
          name: "Розетки",
          availability: false,
        },
        {
          id: 5,
          name: "Бронирование",
          availability: false,
        },
      ],
    },
  ],
};

export default defaultProps;

GuestAccommodation.defaultProps = defaultProps;