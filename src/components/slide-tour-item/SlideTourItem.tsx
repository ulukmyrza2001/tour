import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./SlideTourItem.module.scss";
export interface ISlideTourItem {
  id: number;
  title: string;
  typeSlide: string;
  typeTrip: string;
  date: Date;
  href: string
  imageUrl: string;
}

const SlideTourItem: React.FC<ISlideTourItem> = ({ title, typeSlide, typeTrip, date, imageUrl, href }) => {

  const formatDate = new Intl.DateTimeFormat("ru", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <article className={styles.slide}>
      <Link href={href} className={styles.slide__image}>
        <Image src={imageUrl} alt='Картинка тура' fill />
      </Link>
      <div className={styles.slide__body}>
        <h3 className={styles.slide__title}>
          <Link href={href} className={clsx(styles.slide__link, "first-letter-fonts")}>{title}</Link>
        </h3>
        <div className={styles.slide__footer}>
          <div className={styles.slide__types}>
            {typeSlide} / {typeTrip}
          </div>
          <div className={styles.slide__date}>
            {formatDate}
          </div>
        </div>
      </div>
    </article>
  )
}

export default SlideTourItem