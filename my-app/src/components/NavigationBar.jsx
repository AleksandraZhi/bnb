import React from 'react'

const NavBar = () => {
	return (
		<nav className='navigation-columns'>
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
			<ul className='navigation-right'>
				<li>
					<button>
						<a href='#'></a>Book
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
