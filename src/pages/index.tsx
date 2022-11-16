import type {PageConfig} from 'next';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {posts} from '../posts';

// Sweet zero js 🤑
export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<main className="space-y-8">
			<h2>
				<span>blog.fyko.net</span>{' '}
				<a
					target="_blank"
					href="https://github.com/Fyko"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					– github
				</a>
			</h2>

			<ul className="space-y-1 list-disc list-inside">
				{posts
					.filter(post => !post.hidden)
					.map(post => (
						<BlogLink key={post.slug} href={`/${post.slug}`}>
							{post.name}
						</BlogLink>
					))}
			</ul>
		</main>
	);
}

function BlogLink(props: {href: string; children: ReactNode}) {
	return (
		<li>
			<Link passHref href={props.href}>
				<a className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600">
					{props.children}
				</a>
			</Link>
		</li>
	);
}
