import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		test: 'Max'
	}
});

export default app;