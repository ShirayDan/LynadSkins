import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeOverflow } from '../../helpers/helpers'
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth'
import styles from './SignUpModal.module.css'

import { Container } from '../../ui/Container'
import { Input } from '../../ui/Input'
import { Typeography } from '../../ui/Typeography'

import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa'

export const SignUpModal = ({ state, setState }) => {
	const [viewPass, setViewPass] = useState('password')
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		// defaultValues: {
		// 	fullName: 'Dan 10',
		// 	email: 'test10@test.ua',
		// 	password: '12345',
		// },
		mode: 'onBlur',
	})

	const onSubmit = async (values) => {
		alert(JSON.stringify(values))
		const data = await dispatch(fetchRegister(values))

		if (!data.payload) {
			return alert('Не удалось зарегестрироваться')
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		}

		reset()
		setState(false)
		changeOverflow(state)
	}

	// if (isAuth) {
	//   return <Navigate to="/" />;
	// }

	const changeView = () => {
		viewPass == 'password' ? setViewPass('text') : setViewPass('password')
	}
	return (
		<>
			<Container styles={styles.container}>
				<Typeography variant={'h3'} color={'white'} m={'0 0 15px 0 '}>
					{' '}
					Sign up to your account
				</Typeography>
				<Typeography variant={'h4'} color={'orange'} m={'0 0 15px 0 '}>
					<FaExclamationTriangle fill='#e5864e' fontSize={'14px'} />
					Your email address must be valid and password must include minimum 6
					symbols
				</Typeography>
				<form
					action=''
					onSubmit={handleSubmit(onSubmit)}
					className={styles.form}
				>
					<label htmlFor='fullName' className={styles.label}>
						Full name:
						<Input
							type={'text'}
							placeholder={'fullName'}
							obj={register('fullName', {
								required: true,
							})}
							mt={'5px'}
						/>
					</label>
					<div>
						{errors?.firstName && (
							<p>{errors?.firstName?.message || 'Error one'}</p>
						)}
					</div>

					<label htmlFor='Email' className={styles.label}>
						Email:
						<Input
							type={'email'}
							placeholder={'email'}
							obj={register('email', {
								required: true,
								pattern: /^\S+@\S+$/i,
							})}
							mt={'5px'}
						/>
					</label>
					<div>
						{errors?.firstName && (
							<p>{errors?.firstName?.message || 'Error one'}</p>
						)}
					</div>

					<label htmlFor='Password' className={styles.label}>
						Password:
						<div className={styles.password}>
							<Input
								type={viewPass}
								placeholder={'password'}
								obj={register('password', {
									required: true,
									minLength: 5,
									maxLength: 12,
								})}
								mt={'5px'}
							/>
							<span className={styles.icon} onClick={changeView}>
								{viewPass == 'password' ? (
									<FaEyeSlash fontSize={'24px'} />
								) : (
									<FaEye fontSize={'24px'} />
								)}
							</span>
						</div>
					</label>
					<div>
						{errors?.secondName && (
							<p>{errors?.secondName?.message || 'Error two'}</p>
						)}
					</div>
					<div className={styles.controls}>
						<Input
							type={'submit'}
							mt={'10px'}
							value={'Sing UP'}
							disabled={!isValid}
						/>
						<Input type={'reset'} value={'Reset'} mt={'10px'} />
					</div>
				</form>
			</Container>
		</>
	)
}
