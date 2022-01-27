import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'

const Ranking = () => {
	const [coins, setCoins] = useState([])
	const [search, setSearch] = useState('')
	const [length, setLength] = useState(25)

	const handleLengthChange = (e) => {
		setLength(e.target.value)
		console.log(e.target.value)
	}

	useEffect(() => {
		axios
			.get(
				`https://api.coinstats.app/public/v1/coins?skip=0&limit=${length}&currency=USD`
			)
			.then((res) => {
				setCoins(res.data.coins)
			})
			.catch((err) => console.error(err))
	}, [length])

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className='h-screen bg-gray-900'>
			<div className='App bg-gray-900 h-auto'>
				<div className='container mx-auto py-4 flex'>
					<form className='w-4/5'>
						<input
							type='text'
							placeholder='Search'
							className='bg-gray-800 text-gray-100 placeholder-gray-700 h-12 w-full px-4 mx-4 lg:mx-0'
							onChange={handleChange}
						/>
					</form>
					<select
						name='coinLength'
						id='coinLength'
						className='bg-gray-800 text-white ml-8 w-1/5 h-12 px-3 mx-4 lg:mx-0'
						value={length}
						onChange={handleLengthChange}
					>
						<option value='10'>10</option>
						<option value='25'>25</option>
						<option value='50'>50</option>
						<option value='75'>75</option>
						<option value='100'>100</option>
					</select>
				</div>

				<div className='container mx-auto'>
					<div className='flex items-center justify-between py-4 my-3 px-3 text-white'>
						<div className='w-8 lg:w-16 mr-4 lg:mr-40'></div>
						<div className='text-xs lg:text-base w-1/6'>Name</div>
						<div className='text-xs lg:text-base w-1/6'>Symbol</div>
						<div className='text-xs lg:text-base w-1/6'>Price</div>
						<div className='text-xs lg:text-base w-1/6'>Price Change</div>
					</div>
					<hr />
				</div>

				{filteredCoins.map((coin) => {
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							price={coin.price}
							image={coin.icon}
							symbol={coin.symbol}
							priceChange={coin.priceChange1h}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Ranking
