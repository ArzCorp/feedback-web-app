import Script from 'next/script'
import { Fragment } from 'react'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Script
				src="https://kit.fontawesome.com/3d9c3c44c5.js"
				crossorigin="anonymous"
			></Script>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
