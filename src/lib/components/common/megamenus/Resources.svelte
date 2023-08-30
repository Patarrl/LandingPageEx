<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import { fly, scale } from "svelte/transition";
    
    const popupClickResources: PopupSettings = {
        event: 'click',
        target: 'popupClickResources',
        placement: 'bottom',
    };

    const resourcesDropdown = [
        {
            title: "Blog",
            text: "Read the industry latest thoughts on digital marketing, content strategy, SEO, PPC, social media and more.",
            link: '#',
            tag: 'new',
        },{
            title: "Help Center",
            text: "Learn how to use Semrush with user manuals, how-to's, videos and more!",
            link: '#',
            tag: null,
        },{
            title: "What's New",
            text: "Keep track of the newest Semrush features and improvements.",
            link: '#',
            tag: 'new',
        },{
            title: "Webinars",
            text: "Register and take part in educational webinars conducted by the best digital marketing experts.",
            link: '#',
            tag: null,
        },{
            title: "Insights",
            text: "See the latest in original research and thought leadership from the Semrush team.",
            link: '#',
            tag: null,
        },{
            title: "Hire a Trusted Agency",
            text: "Pressed for time? Need rare skills? Get help from a trusted agency. Our experts work with marketing projects of all kinds and budgets.",
            link: '#',
            tag: null,
        },{
            title: "Academy",
            text: "Get vital SEO skills, learn how to use our toolkits and get official certificates of your proficiency in SEO and Semrush.",
            link: '#',
            tag: null,
        },{
            title: "Top Websites",
            text: "Discover the most visited websites. Analyze their traffic and search rankings. Choose country or industry to find out who currently leads the market.",
            link: '#',
            tag: null,
        },{
            title: "GoodContent Hub",
            text: "Learn everything you need to know about effective content marketing in one place. Explore free tools, industry research, practical materials for your business, and more.",
            link: '#',
            tag: null,
        },{
            title: "Local SEO Hub",
            text: "Are you looking for advanced local search optimization trends, tips and tools? Outperform your competitors in local search and maps with the right SEO strategies by taking a deep dive into our Local SEO Hub.",
            link: '#',
            tag: null,
        },
    ]
</script>

<button class="text-slate-300 hover:text-slate-50 transition-all duration-100" use:popup={popupClickResources}>Resources</button>
<div class="p-8 z-100 max-w-[600px] bg-purple-950 text-white rounded-md shadow-xl" data-popup='popupClickResources'>
    <div class="arrow bg-surface-100-800-token" />
    <div class="grid grid-cols-2 gap-8">
        {#each resourcesDropdown as dropdown, i (i)}
        <a class="flex flex-col" href="{dropdown.link}">
            <span class="text-2xl font-bold flex gap-4">
                {dropdown.title}
                {#if dropdown.tag}
                    <span class="chip text-md variant-ghost-primary">{dropdown.tag}</span>
                {/if}
            </span>
            <span>{dropdown.text}</span>
        </a>
        {/each}
    </div>
</div>