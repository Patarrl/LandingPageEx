<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";

    const popupClickExtraTools: PopupSettings = {
      event: 'click',
      target: 'popupExtraTools',
      placement: 'bottom',
  };

  const extraToolsDropdown = [
    {
        title:"Content Marketplace",
        link:'',
        tag:""
    },{
        title:"Content Outline Builder",
        link:'',
        tag:"BETA"
    },{
        title:"ImpactHero",
        link:'',
        tag:""
    },{
        title:"Tools for Amazon",
        link:'',
        tag:""
    },{
        title:"Prowly",
        link:'',
        tag:""
    },{
        title:"Kompyte",
        link:'',
        tag:""
    },{
        title:"SplitSignal",
        link:'',
        tag:"BETA"
    },{
        title:"Custom reports",
        link:'',
        tag:""
    },{
        title:"Surround Sound",
        link:'',
        tag:"BETA"
    },{
        title:"PageImprove",
        link:'',
        tag:"BETA"
    },

  ]

</script>

<button class="text-slate-300 hover:text-slate-50 transition-all duration-100" use:popup={popupClickExtraTools}>Extra Tools</button>
<div class="p-8 z-100 max-w-[600px] bg-purple-950 text-white rounded-md shadow-xl" data-popup='popupExtraTools'>
    <div class="arrow bg-surface-100-800-token" />
    <div class="grid grid-cols-1 gap-5">
        {#each extraToolsDropdown as dropdown, i (i)}
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