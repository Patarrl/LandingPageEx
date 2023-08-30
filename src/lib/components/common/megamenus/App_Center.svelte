<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";

    const popupClickAppCenter: PopupSettings = {
      event: 'click',
      target: 'popupClickAppCenter',
      placement: 'bottom',
  };

  const appCenterDropdown = [
    {
        title:"Store",
        link:'#',
        tag:""
    },
    {
        title:"My Apps",
        link:'#',
        tag:""
    },
    {
        title:"About",
        link:'#',
        tag:""
    },
    {
        title:"For Partners",
        link:'#',
        tag:""
    },
  ]
</script>

<button class="text-slate-300 hover:text-slate-50 transition-all duration-100" use:popup={popupClickAppCenter}>App Center</button>
<div class="p-8 z-100 max-w-[600px] bg-purple-950 text-white rounded-md shadow-xl" data-popup='popupClickAppCenter'>
    <div class="arrow bg-surface-100-800-token" />
    <div class="grid grid-cols-1 gap-8">
        {#each appCenterDropdown as dropdown, i (i)}
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