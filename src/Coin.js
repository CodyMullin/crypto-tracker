import React from 'react'

const Coin = ({ image, name, symbol, price, priceChange }) => {
	function formatNumber(price) {
		return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	return (
		<div className='container mx-auto'>
			<div className='flex items-center justify-between py-4 my-3 px-3 bg-gray-900 hover:bg-gray-800'>
				<img
					className='w-8 h-8 lg:w-16 lg:h-16 mr-4 lg:mr-40'
					src={image}
					alt='Crypto'
				/>
				<p className='text-xs lg:text-base text-gray-50 w-1/6'>{name}</p>
				<p className='text-xs lg:text-base text-gray-50 w-1/6'>{symbol}</p>
				<p className='text-xs lg:text-base text-gray-50 w-1/6'>
					{formatNumber(price)}
				</p>
				{priceChange < 0 ? (
					<p className='text-xs lg:text-base w-1/6 text-red-500 text-left'>
						{priceChange.toFixed(2)}%
					</p>
				) : (
					<p className='text-xs lg:text-base w-1/6 text-green-500 text-left'>
						{priceChange.toFixed(2)}%
					</p>
				)}
			</div>
			<hr />
		</div>
	)
}

export default Coin
