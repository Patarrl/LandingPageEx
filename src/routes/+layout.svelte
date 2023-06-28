<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-[70px] w-[165px]" src="/Semrush.png" alt="logo"/>
				<strong class="text-xl uppercase"></strong>
			</svelte:fragment>
			<svelte:fragment>
				<div class="flex items-center justify-center">
					<div class="btn btn-sm variant-ghost-surface">Features</div>
					<div class="btn btn-sm variant-ghost-surface">Pricing</div>
					<select class="btn btn-sm variant-ghost-surface ">
						<option>Resources</option>
						<option>Blog</option>
						<option>What's New</option>
						<option>Insights</option>
						<option>Academy</option>
						<option>GoodContent Hub</option>
						<option>Help Center</option>
						<option>Webinars</option>
						<option>Hire a Trusted Agency</option>
						<option>Top Websites</option>
						<option>Local SEO Hub</option>
					</select>
					<select class="btn btn-sm variant-ghost-surface">
						<option>Company</option>
						<option>About Us</option>
						<option>Newsroom</option>
						<option>Careers</option>
						<option>Success Stories</option>
						<option>Affiliate Program</option>
						<option>For Investors</option>
						<option>Partner Integrations</option>
						<option>Contacts</option>
						<option>Stats and Facts</option>
					</select>
					<select class="btn btn-sm variant-ghost-surface">
						<option>App Center</option>
						<option>Store</option>
						<option>My Apps</option>
						<option>About</option>
						<option>For Partners</option>
					</select>
					<select class="btn btn-sm variant-ghost-surface">
						<option>Extra Tools</option>
						<option>Content Marketplace</option>
						<option>ImpactHero</option>
						<option>Tools for Amazon</option>
						<option>Prowly</option>
						<option>Kompyte</option>
						<option>SplitSignal</option>
						<option>Custom reports</option>
						<option>Surround Sound</option>
						<option>PageImprove</option>
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<select class="btn btn-sm variant-ghost-surface">
					<option>EN</option>
					<option>English</option>
				</select>
			
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
				>
					Log In
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
				>
					Sign Up
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
