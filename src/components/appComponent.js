import React from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContainer = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) =>
	<div className="App">

		<Search handleSearch={handleSearch} isDisabled={isFetching} />
		{isFetching && <div>Carregando...</div>}
		{!!userInfo &&  <UserInfo userInfo={userInfo} /> }
		{!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
		

		{!!repos.length && <Repos className='repos' title='Repositorios' repos={repos} /> }

		{!!starred.length && <Repos className='starred' title='Favoritos' repos={starred} /> }
	</div >

export default AppContainer