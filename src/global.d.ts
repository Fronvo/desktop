/// <reference types="svelte" />
/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />
declare interface Window {
	electron: any;
}

declare module 'svelte-checkbox' {
	import type { SvelteComponentTyped } from 'svelte';

	export default class Checkbox extends SvelteComponentTyped<{
		size?: string;
		name?: string;
		id?: string;
		class?: string;
		primaryColor?: string;
		secondaryColor?: string;
		checked?: boolean;
	}> {}
}
