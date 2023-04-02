import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import { ILink } from './link'

import styles from './Link.module.scss'

export const LinkSecondary: React.FC<ILink> = ({
	label,
	className,
	onClick,
	...props
}) => {
	return (
		<Link
			onClick={onClick}
			{...props}
			className={clsx(styles.link, styles.secondary, className)}
		>
			{label}
		</Link>
	)
}
