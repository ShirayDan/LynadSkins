import React from 'react'
import styles from './Input.module.css'
export const Input = ({
	width,
	placeholder,
	type,
	mt,
	mb,
	value,
	obj,
	disabled,
	onChange,
	id,
}) => {
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			className={styles.priceInput}
			style={{ width, marginTop: mt, marginBottom: mb }}
			value={value}
			onChange={onChange}
			{...obj}
			disabled={disabled}
		/>
	)
}
