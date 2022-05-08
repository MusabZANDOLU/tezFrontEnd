import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/errorPage.scss';


function ErrorPage() {

	return (
		<div className='ErrorPageAll'>
			<div className='errorContent'>
				<div className="err404">404</div>
				<div className='errH2'>SAYFA BULUNAMADI </div>
				<hr />

				<div className="errContainer">
					<div className="typed-out">Site dışında bir url girdiniz. Lütfen ana sayfaya dönünüz!</div>
					<div className="frame">
						<Link to='/'><button className="errorBtn btn-16">ANA SAYFA</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ErrorPage;