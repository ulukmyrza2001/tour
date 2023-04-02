import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { useWindow } from "@hooks/useWindow";

import styles from "./Footer.module.scss";

interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

export const Footer: React.FC<IFooter> = ({ className }) => {

  const { width } = useWindow();

  const isTablet = width ? width <= 991.98 : null;

	return (
		<footer className={clsx(className, styles.footer)}>
			<div className={clsx("container", styles.footer__container)}>
        <div className={styles.footer__header}>
          <Link href='/' className={styles.footer__logo}>
            <Image fill src={'/img/logo-footer-second.svg'} alt='Логотип Тур Агентства Мещера' />
            <Image width={245} height={50} src={'/img/logo-footer.svg'} alt='Логотип Тур Агентства Мещера' />
          </Link>
        </div>
        <div className={styles.footer__body}>
          <div className={styles.footer__links}>
            <nav className={styles.footer__nav}>
              <div className={styles.footer__wrapper}>
                <h3 className={styles.footer__subtitle}>О нас</h3>
                <ul className={styles.footer__list}>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>Главная</Link>
                  </li>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>Туры</Link>
                  </li>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>Блог</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__wrapper}>
                <h3 className={styles.footer__subtitle}>Информация</h3>
                <ul className={styles.footer__list}>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>Баня</Link>
                  </li>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>FAQ</Link>
                  </li>
                  <li className={styles.footer__item}>
                    <Link href={'/'}>Контакты</Link>
                  </li>
                </ul>
              </div>
            </nav>
            {
              isTablet ? (
                <div className={styles.footer__payments}>
                  <a href='https://www.mastercard.ru/ru-ru.html' className={clsx(styles.footer__link, styles.footer__link_mastercard)}>
                    <Image src={"/icons/master-card.svg"} width={90} height={70} alt='Логотип Mastercard' />
                  </a>
                  <a href='https://www.visa.com.ru/' className={clsx(styles.footer__link, styles.footer__link_visa)}>
                    <Image src={"/icons/visa.svg"} width={120} height={40} alt='Логотип VISA' />
                  </a>
                  <a href='https://www.mastercard.ru/ru-ru.html' className={clsx(styles.footer__link, styles.footer__link_mir)}>
                    <Image src={"/icons/mir-card.svg"} width={125} height={40} alt='Логотип МИР кард' />
                  </a>
                </div>
              )
              : null
            }
            <h2 className={styles.footer__title}>
              <a href={"tel:+79167227118"} className={styles.footer__phone}>+7 916 722-71-18</a>
            </h2>
          </div>
          <div className={styles.footer__content}>
            <div className={styles.footer__socials}>
              <a target='_blank' rel='noreferrer' href='https://vk.com/' className={clsx(styles.footer__social, "_icon-vk")}></a>
              <a target='_blank' rel='noreferrer' href='https://www.instagram.com/' className={clsx(styles.footer__social, "_icon-instagram")}></a>
            </div>
            <div className={styles.footer__meta}>
              <p className={styles.footer__text}>Мещера Тур - All rights reserved. Копирование материалов без указания обратной ссылки запрещено</p>
            </div>
            {
              !isTablet ? (
                <div className={styles.footer__payments}>
                  <a href='https://www.mastercard.ru/ru-ru.html' className={clsx(styles.footer__link, styles.footer__link_mastercard)}>
                    <Image src={"/icons/master-card.svg"} width={90} height={70} alt='Логотип Mastercard' />
                  </a>
                  <a href='https://www.visa.com.ru/' className={clsx(styles.footer__link, styles.footer__link_visa)}>
                    <Image src={"/icons/visa.svg"} width={120} height={40} alt='Логотип VISA' />
                  </a>
                  <a href='https://www.mastercard.ru/ru-ru.html' className={clsx(styles.footer__link, styles.footer__link_mir)}>
                    <Image src={"/icons/mir-card.svg"} width={125} height={40} alt='Логотип МИР кард' />
                  </a>
                </div>
              )
              : null
            }
          </div>
        </div>
      </div>
		</footer>
	)
};