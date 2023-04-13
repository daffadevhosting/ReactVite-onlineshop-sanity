import React from 'react'
import { Link } from 'react-router-dom'

function SanityBtn() {
	return (
		<div className="fixed">
			<Link to='/studio'>
				<img className='cover fullRounded' src='/sanity.png'/>
			</Link>
		</div>
		)
}
export default SanityBtn;