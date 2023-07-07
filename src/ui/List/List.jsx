import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'

const variantsMapping = {
	div: 'div',
	ul: 'ul',
}

export const List = forwardRef(
	(
		{
			children,
			variant,
			display,
			alignItems,
			justifyContent,
			mt,
			mb,
			columns,
			gap,
			width,
			flexWrap,
		},
		ref
	) => {
		const Component = variant ? variantsMapping[variant] : 'div'

		return (
			<Component
				ref={ref}
				style={{
					display,
					alignItems,
					justifyContent,
					marginTop: mt,
					marginBottom: mb,
					gridTemplateColumns: columns,
					gridGap: gap,
					width,
					flexWrap,
				}}
			>
				{children}
			</Component>
		)
	}
)
export const MList = motion(List)
