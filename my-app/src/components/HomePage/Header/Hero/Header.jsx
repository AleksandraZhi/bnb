import React from 'react'
import VideoHero from './video-hero.mp4'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header>
			<video autoPlay muted loop>
				<source src={VideoHero} type='video/mp4' />
			</video>
			<div className={styles.headerContent}>
				<h1>Welcome to your next best stay in the Italian countryside</h1>
			</div>
		</header>
	)
}

export default Header
