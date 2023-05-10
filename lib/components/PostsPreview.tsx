// From https://chrisjayden.com/articles/sveltekit-sanity-content-preview
import { Card, Text } from '@sanity/ui';
import React from 'react';

export function PostsPreview(props: unknown) {
	if (!props.document.displayed.slug && props.document.displayed._type !== 'homePage') {
		return (
			<Card tone="primary" margin={5} padding={6}>
				<Text align="center">Please add a slug to the post to see the preview!</Text>
			</Card>
		);
	}

	return (
		<Card scheme="light" style={{ width: '100%', height: '100%' }}>
			<iframe style={{ width: '100%', height: '100%' }} src={getUrl(props)} />
		</Card>
	);
}

function getUrl({ document }) {
	const url = new URL('/api/preview', import.meta.env.PROD ? 'https://thesan.netlify.app' : 'http://localhost:5173');
	const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

	if (secret) {
		url.searchParams.set('secret', secret);
	}

  // The slug of the document that is being previewed.
	url.searchParams.set('slug', document.displayed.slug?.current || null);

  // The type of the document. Allows us to use different queries.
	url.searchParams.set('type', document.displayed._type);

	// Ensures the preview is not cached
	url.searchParams.set('random', Math.random().toString(36).substring(7));

	return url.toString();
}
