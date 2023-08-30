<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/common/NavBar.svelte';

	
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import Footer from '$lib/components/common/Footer.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { waitLocale, locale, register, init, getLocaleFromNavigator } from 'svelte-i18n';
	import { onMount } from 'svelte';

	locale.set('en')

	register('en', () => import('$lib/i18n/en'));
	register('es', () => import('$lib/i18n/es'));

	onMount(() => {
		init({
			fallbackLocale: 'en',
			initialLocale: getLocaleFromNavigator(),
		});
	})
	// starts loading 'en-US' and 'en'

	export async function preload() {
		return waitLocale()
	}
			
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
