import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useWindow } from '@hooks/useWindow'

import styles from './Header.module.scss'

export interface IHeader
  extends React.ComponentPropsWithoutRef<'header'> {}

export const Header: React.FC<IHeader> = ({ className }) => {
  const [isBodyLockStatus, setIsBodyLockStatus] =
    React.useState<boolean>(true)
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false)
  const { width } = useWindow()

  const isMobile = width ? width <= 767.98 : null

  const bodyUnlock = (delay = 500): void => {
    const bodyElement = document.querySelector(
      'body'
    ) as HTMLBodyElement
    const htmlElement = document.documentElement as HTMLHtmlElement

    if (isOpenMenu || isBodyLockStatus) {
      setTimeout(() => {
        bodyElement.style.paddingRight = '0px'
        htmlElement.classList.toggle('lock', isOpenMenu)
      }, delay)

      setIsBodyLockStatus(false)
      setTimeout(function () {
        setIsBodyLockStatus(true)
      }, delay)
    }
  }

  const bodyLock = (delay = 500): void => {
    const bodyElement = document.querySelector(
      'body'
    ) as HTMLBodyElement
    const htmlElement = document.documentElement as HTMLHtmlElement
    const wrapperElement = document.querySelector(
      '.wrapper'
    ) as HTMLDivElement

    if (isOpenMenu || isBodyLockStatus) {
      bodyElement.style.paddingRight =
        window.innerWidth - wrapperElement.offsetWidth + 'px'
      htmlElement.classList.toggle('lock', isOpenMenu)

      setIsBodyLockStatus(false)
      setTimeout(function () {
        setIsBodyLockStatus(true)
      }, delay)
    }
  }

  const bodyLockToggle = (delay = 500) => {
    const htmlElement = document.documentElement as HTMLHtmlElement

    if (!htmlElement.classList.contains('lock')) {
      bodyUnlock(delay)
    } else {
      bodyLock(delay)
    }
  }

  React.useEffect(() => {
    const htmlElement = document.documentElement as HTMLHtmlElement
    bodyLockToggle()
    htmlElement.classList.toggle('menu-open', isOpenMenu)
  }, [isOpenMenu])

  React.useEffect(() => {
    let prevScrollpos = window.scrollY
    const headerElement = document.querySelector(
      'header'
    ) as HTMLDivElement
    const headerHeight =
      headerElement.offsetTop + headerElement.offsetHeight

    const isSticky = () => {
      // console.log(headerElement.offsetTop, headerElement.offsetHeight, window.screenY);

      const currentScrollPos = window.scrollY

      prevScrollpos > currentScrollPos ||
      currentScrollPos < headerHeight
        ? headerElement.classList.remove(styles.header_scroll)
        : headerElement.classList.add(styles.header_scroll)

      prevScrollpos = currentScrollPos
    }

    window.addEventListener('scroll', isSticky)

    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const handleMenuClick = () => setIsOpenMenu(prev => !prev)

  return (
    <motion.header
      initial={{ y: '-100%' }}
      whileInView={{ y: '0' }}
      className={clsx(styles.header, className)}
    >
      <div className={clsx(styles.header__wrapper)}>
        <div className={clsx(styles.header__container, 'container')}>
          <nav className={clsx(styles.header__menu, styles.menu)}>
            <div className={styles.menu__body}>
              {isMobile || (
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Главная
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      href='#tours'
                      className={styles.menu__link}
                    >
                      Туры
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      href='#listhouses'
                      className={styles.menu__link}
                    >
                      Баня
                    </Link>
                  </li>
                </ul>
              )}
              <Link href='/' className={styles.menu__logo}>
                <Image
                  src={'/img/logo.svg'}
                  alt='Логотип Мещера Тур'
                  fill
                />
              </Link>
              {isMobile || (
                <ul
                  className={clsx(
                    styles.menu__list,
                    styles.menu__list_left
                  )}
                >
                  <li className={styles.menu__item}>
                    <Link
                      href='/articles/1'
                      className={styles.menu__link}
                    >
                      Блог
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/faq' className={styles.menu__link}>
                      FAQ
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link
                      href='/about-us'
                      className={styles.menu__link}
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {isMobile && (
              <div className={styles.menu__nav}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Главная
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Туры
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Баня
                    </Link>
                  </li>
                </ul>
                <ul
                  className={clsx(
                    styles.menu__list,
                    styles.menu__list_left
                  )}
                >
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Главная
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Туры
                    </Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>
                      Баня
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={handleMenuClick}
              type='button'
              className={clsx(styles.menu__button, styles.iconMenu)}
            ></button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
