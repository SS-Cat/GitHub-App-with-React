import React from 'react'

const UserInfo = ({userInfo : {photo, login, userName, repos, followers, following}}) =>
	<div className="user-info">
		<img src={photo} alt='Foto do usuario' />
		<h1><a href={`http://github.com/${login}`}>{userName}</a></h1>

		<ul className='repos-info'>
			<li> - Repositorios: {repos}</li>
			<li> - Seguidores: {followers}</li>
			<li> - Seguindo: {following}</li>
		</ul>
	</div>


export default UserInfo