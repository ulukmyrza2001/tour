import { LinkProps } from 'next/link'

export interface ILink extends LinkProps {
	label: string
	className?: object | string
	onClick?: () => void
}
