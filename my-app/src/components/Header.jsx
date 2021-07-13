import React from 'react'
import VideoHero from './video-hero.mp4'

const Header = () => {
	return (
		<header>
			<video autoPlay muted loop>
				<source src={VideoHero} type='video/mp4' />
			</video>
			<div className='header-content'>
				<h1>Welcome to your next best stay in the Italian countryside</h1>
			</div>
		</header>
	)
}

export default Header
