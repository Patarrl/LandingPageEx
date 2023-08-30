<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";

      const popupClickCompany: PopupSettings = {
        event: 'click',
        target: 'popupClickCompany',
        placement: 'bottom',
    };

    const companyDropdown = [
        {
            title: "About Us",
            link:"#" ,
            tag: null
        },  {
            title: "Newsroom",
            link:"#" ,
            tag: null
        },  {
            title: "Careers",
            link:"#" ,
            tag: "New"
        },  {
            title: "Success Stories",
            link:"#" ,
            tag: null
        },  {
            title: "Affiliate Program",
            link:"#" ,
            tag: "New"
        },  {
            title: "For investors",
            link:"#" ,
            tag: "New"
        },  {
            title: "Partner Integrations",
            link:"#" ,
            tag: null
        },  {
            title: "Contacts",
            link:"#" ,
            tag: null
        },  {
            title: "Stats and Facts",
            link:"#" ,
            tag: null
        },
    ]


</script>

<button class="text-slate-300 hover:text-slate-50 transition-all duration-100" use:popup={popupClickCompany}>Company</button>
<div class="p-8 z-100 max-w-[600px] bg-purple-950 text-white rounded-md shadow-xl" data-popup='popupClickCompany'>
    <div class="arrow bg-surface-100-800-token" />
    <div class="grid grid-cols-1 gap-5">
        {#each companyDropdown as dropdown, i (i)}
        <a class="flex flex-col" href="{dropdown.link}">
            <span class="text-2xl font-bold flex gap-4">
                {dropdown.title}
                {#if dropdown.tag}
                    <span class="chip text-md variant-ghost-primary">{dropdown.tag}</span>
                {/if}
            </span>
        </a>
        {/each}
    </div>
</div>