import React from 'react'
import styles from './AddSkinModal.module.css'

import { Button } from '../../../../../../ui/Button'
import { Container } from '../../../../../../ui/Container'
import { Input } from '../../../../../../ui/Input'
import { Typeography } from '../../../../../../ui/Typeography'

export const AddSkinModal = () => {
	return (
		<Container styles={styles.container}>
			<Typeography variant={'h3'} color={'white'} m={'0 0 10px 0'}>
				Add your skin
			</Typeography>
			<form action='' className={styles.form}>
				<label htmlFor='' className={styles.label}>
					Item name:
					<Input mt={'5px'} />
				</label>
				<label htmlFor='' className={styles.label}>
					Skin name:
					<Input mt={'5px'} />
				</label>
				<div className={styles.selects}>
					<select name='' id='' className={styles.select}>
						<option value='-1'>Select exterior</option>
						<option value=''>Factory New</option>
						<option value=''>Minimal Wear</option>
						<option value=''>Field-Tested</option>
						<option value=''>Well-Worn</option>
						<option value=''>Battle-Scarred</option>
					</select>

					<select name='' id='' className={styles.select}>
						<option value='-1'>Select rariry</option>
						<option value=''>Consumer Grade</option>
						<option value=''>Industrial Grade</option>
						<option value=''>Mil-Spec Grade</option>
						<option value=''>Restricted</option>
						<option value=''>Classified</option>
						<option value=''>Covert</option>
					</select>
					<select name='' id='' className={styles.select}>
						<option value='-1'>Select gun type</option>
						<option value=''>Knives</option>
						<option value=''>Gloves</option>
						<option value=''>Pistols</option>
						<option value=''>SMGs</option>
						<option value=''>Assault Rifles</option>
						<option value=''>Sniper Rifles</option>
						<option value=''>Shotguns</option>
						<option value=''>Machine guns</option>
					</select>
				</div>

				<label htmlFor='' className={styles.label}>
					Price:
					<Input mt={'5px'} />
				</label>

				<label htmlFor='' className={styles.label}>
					Float:
					<Input mt={'5px'} />
				</label>
				<div className={styles.checkboxes}>
					<label
						htmlFor=''
						className={`${styles.label} ${styles['label-checkbox']}`}
					>
						Statrack:
					</label>
					<input type='checkbox' />
					<label
						htmlFor=''
						className={`${styles.label} ${styles['label-checkbox']}`}
					>
						Souvenir:
					</label>
					<input type='checkbox' />
				</div>

				<label htmlFor='' className={styles.label}>
					Color:
					<Input mt={'5px'} />
				</label>

				<Button text={'Upload image'} style={styles['btn-image']} />
				<div className={styles.btns}>
					<Input width={'min-content'} type={'submit'} value={'Add skin'} />
					<Input width={'min-content'} type={'reset'} value={'Reset'} />
				</div>
			</form>
		</Container>
	)
}
