import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { ILink } from './link'

import styles from './Link.module.scss'

export const LinkPrimary = React.forwardRef<HTMLAnchorElement, ILink>(
  function Some({ label, className, ...props }, ref) {
    return (
      <Link
        {...props}
        ref={ref}
        className={clsx(styles.link, styles.primary, className)}
      >
        {label}
      </Link>
    )
  }
)

export const MotionLinkPrimary = motion(LinkPrimary, { forwardMotionProps: true });