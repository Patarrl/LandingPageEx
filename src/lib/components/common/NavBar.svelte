<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
    import Resources from "$lib/components/common/megamenus/Resources.svelte";
	import Company from "./megamenus/Company.svelte";
	import AppCenter from "./megamenus/App_Center.svelte";
	import ExtraTools from "./megamenus/Extra_tools.svelte";
    import { locale } from "svelte-i18n";

</script>
<!-- App Bar -->
<AppBar background="bg-gray-700">
    <svelte:fragment slot="lead">
        <a href="/">
            <img class="w-fit h-[4rem]" src="/Semrush.png" alt="logo"/>
            <strong class="text-xl uppercase"></strong>
        </a>
    </svelte:fragment>
    <svelte:fragment>
        <div class="flex items-center justify-center gap-4">
            <a href="/features">
                <div class="text-slate-300 hover:text-slate-50 transition-all duration-100">Features</div>
            </a>
            <a href="/pricing">
                <div class="text-slate-300 hover:text-slate-50 transition-all duration-100">Pricing</div>
            </a>
            <Resources />
            <Company/>
            <AppCenter/>
            <ExtraTools/>

            
            <!-- <select class="text-slate-300 hover:text-slate-50 transition-all duration-100">
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
            </select> -->
            <!-- <select class="text-slate-300 hover:text-slate-50 transition-all duration-100">
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
            </select> -->
            <!-- <select class="text-slate-300 hover:text-slate-50 transition-all duration-100">
                <option>App Center</option>
                <option>Store</option>
                <option>My Apps</option>
                <option>About</option>
                <option>For Partners</option>
            </select> -->
            <!-- <select class="text-slate-300 hover:text-slate-50 transition-all duration-100">
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
            </select> -->
        </div>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <select class="btn btn-sm variant-ghost-surface" bind:value={$locale}>
            <option value="en">EN</option>
            <option value="es">ES</option>
        </select>
    
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/login"
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

