import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class BlogDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="icon" type="image/png" href="https://avatars1.githubusercontent.com/u/45381083" />
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
