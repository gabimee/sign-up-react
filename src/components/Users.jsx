import { faMoon } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'
import { IconContext } from 'react-icons'

const Users = () => {
	const [users, setUsers] = React.useState([
		{
			id: 1,
			username: 'John',
			email: 'kjhuih@example.com',
			position: 'Developer',
		},
		{
			id: 2,
			username: 'Jane',
			email: 'kjhuih@example.com',
			position: 'Developer',
		},
		{
			id: 3,
			username: 'Tom',
			email: 'kjhuih@example.com',
			position: 'Developer',
		},
	])
	const [user, setUser] = React.useState({})

	const handleSubmit = evt => {
		evt.preventDefault()

		const username = evt.target.username.value
		const email = evt.target.email.value
		const position = evt.target.position.value
		const id = users.length + 1

		const newUser = {
			id,
			username,
			email,
			position,
		}

		if (user.username && user.email && user.position) {
			setUsers(
				users.map(u =>
					u.id === user.id
						? { ...u, username: username, email: email, position: position }
						: u
				)
			)
			setUser({})
		} else {
			setUsers([...users, newUser])
		}

		evt.target.reset()
	}

	const [dark, setDark] = React.useState(false)

	const darkModeHandler = () => {
		setDark(!dark)
		document.body.classList.toggle('dark')
	}

	return (
		<>
			<header className='bg-white dark:bg-gray-800'>
				<div className='container max-w-7xl mx-auto'>
					<div className='py-10 flex justify-between'>
						<a href='./index.html'>
							<h2 className='font-extrabold text-8xl text-black dark:text-white'>
								Sign Up
							</h2>
						</a>

						<button
							className='text-black dark:text-white'
							onClick={() => darkModeHandler()}
						>
							{
								dark && <IoSunny /> // render sunny when dark is true
							}
							{
								!dark && <IoMoon /> // render moon when dark is false
							}
						</button>
					</div>
				</div>
			</header>

			<main>
				<section className='py-36 bg-white dark:bg-gray-800 bg-cover'>
					<div className='container max-w-7xl mx-auto'>
						<div className='flex gap-10 items-start'>
							<div className='w-[calc(100%-70%)]'>
							
								<form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
									<div className='mb-5'>
										<label
											htmlFor='username'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										>
											Your username
										</label>
										<input
											type='text'
											id='username'
											defaultValue={user.username}
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='Sardor'
											required
										/>
									</div>

									<div className='mb-5'>
										<label
											htmlFor='email'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										>
											Your email
										</label>
										<input
											type='email'
											id='email'
											defaultValue={user.email}
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='sardor@gmail.com'
											required
										/>
									</div>

									<div className='mb-5'>
										<label
											htmlFor='position'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										>
											Your position
										</label>
										<input
											type='text'
											id='position'
											defaultValue={user.position}
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='Sardor'
											required
										/>
									</div>

									<button
										type='submit'
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-end '
									>
										Add User
									</button>
								</form>
							</div>

							<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-7'>
								<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
									<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
										<tr className='w-full'>
											<th scope='col' className='px-6 py-3'>
												ID
											</th>
											<th scope='col' className='px-6 py-3'>
												Username
											</th>
											<th scope='col' className='px-6 py-3'>
												Email
											</th>
											<th scope='col' className='px-6 py-3'>
												Position
											</th>
											<th scope='col' className='px-6 py-3'></th>
										</tr>
									</thead>

									<tbody>
										{users.map(user => (
											<tr
												className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
												key={user.id}
											>
												<th
													scope='row'
													className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
												>
													{user.id}
												</th>
												<td className='px-6 py-4'>{user.username}</td>
												<td className='px-6 py-4'>{user.email}</td>
												<td className='px-6 py-4'>{user.position}</td>
												<td className='flex justify-end px-3 border-none border-black'>
													<button
														className='bg-red-500 text-white rounded-md p-2 mr-3 mt-2'
														onClick={() =>
															setUsers(users.filter(u => u.id !== user.id))
														}
													>
														Delete
													</button>

													<button
														className='bg-green-500 text-white rounded-md p-2 mt-2'
														onClick={() => setUser(user)}
													>
														Edit
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className='bg-white dark:bg-gray-800'>
				<div className='container max-w-7xl mx-auto'>
					<div className='py-10 flex justify-between'>
						<a href='./index.html'>
							<h2 className='font-bold text-4xl text-black dark:text-white'>
								Sign Up
							</h2>
						</a>

						<button
							className='flex items-center text-black dark:text-white'
							type='button'
						>
							<img
								className='mr-2'
								src='./public/images/telegram-icon.webp'
								alt='telegram'
								width={40}
							/>
							<a
								className='font-bold text-xl'
								href='https://web.telegram.org/a/'
							>
								Telegram
							</a>
						</button>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Users
