import React from 'react'
import styles from './NavigationBar.module.css'

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href='#'>Logo</a>
				</li>
				<li>
					<a href='#'>House</a>
				</li>
				<li>
					<a href='#'>Location</a>
				</li>
				<li>
					<a href='#'>Gallery</a>
				</li>
				<li>
					<a href='#'>Ask a question</a>
				</li>
			</ul>
			<ul className={styles.navigationRight}>
				<li>
					<button>
						<a href='#'></a>Book now
					</button>
				</li>
				<li>
					<a href='#'>Contacts</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
