import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeOverflow } from '../../helpers/helpers'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'
import styles from './SingInModal.module.css'

import { Container } from '../../ui/Container'
import { Input } from '../../ui/Input'
import { Typeography } from '../../ui/Typeography'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const SignInModal = ({ state, setState }) => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()

	const [viewPass, setViewPass] = useState('password')
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		defaultValues: {
			email: 'test@test.ua',
			password: '12345',
		},
		mode: 'onBlur',
	})

	const onSubmit = async (values) => {
		const data = await dispatch(fetchAuth(values))

		if (!data.payload) {
			return alert('Не удалось авторизоваться')
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		}

		reset()
		setState(false)
		changeOverflow(state)
	}

	const changeView = () => {
		viewPass == 'password' ? setViewPass('text') : setViewPass('password')
	}
	return (
		<>
			<Container styles={styles.container}>
				<Typeography variant={'h3'} color={'white'} m={'0 0 15px 0 '}>
					{' '}
					Sign in to your account
				</Typeography>
				<form
					action=''
					onSubmit={handleSubmit(onSubmit)}
					className={styles.form}
				>
					<label htmlFor='Email' className={styles.label}>
						Email:
						<Input
							type={'email'}
							placeholder={'Email'}
							obj={register('Email', {
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
								placeholder={'Password'}
								obj={register('Password', {
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
							value={'Sing in'}
							disabled={!isValid}
						/>

						<Input type={'reset'} value={'Reset'} mt={'10px'} />
					</div>
				</form>
			</Container>
		</>
	)
}
