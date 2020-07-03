import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Sebastian',
		lastName: 'Losada'
	}
});

export default app;