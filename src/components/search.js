import React from 'react'

const Search = ({ handleSearch, isDisabled }) =>
	<div className='search' >
		<input type='search' placeholder='Digite o nome de usuário do GitHub'
			disabled={isDisabled}
			onKeyUp={handleSearch}
		/>
	</div>

export default Search