<script lang="ts">
    import { onMount, onDestroy } from "svelte"
    import { writable } from "svelte/store";
    let panelOptions = [
        'seo',
        'content-marketing',
        'market-research',
        'advertising',
        'social-media',
        'agency-solutions'
    ]
    let panelIndex = 0

    let panel = writable('seo')
   
    // let panelTimer = setInterval(() => {
    //     panelIndex++;
    //     if (panelIndex > panelOptions.length - 1) {
    //         panelIndex = 0;
    //     }
    //     $panel = panelOptions[panelIndex]
    // }, 3000)
        
    // onDestroy(() => {
    //     clearInterval(panelTimer);
    // })   
</script>
<div class="w-full max-w-[1200px] m-[-40rem] pt-[150px] pb-[90px]"> 
    <div class="pb-[50px] text-center font-serif text-5xl">See what's inside</div>
    <div class="card h-[50rem] shadow-xl">
        <div class="pt-[40px] px-[45px]">
            <div class="flex justify-center ">
                <button id='seo' on:click={() => $panel = 'seo'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'seo' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>SEO</span>
                </button>
                <button id="content-marketing" on:click={() => $panel = 'content-marketing'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'content-marketing' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>Content Marketing</span>
                </button>
                <button id="market-research" on:click={() => $panel = 'market-research'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'market-research' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>Market Research</span>
                </button>
                <button id="advertising" on:click={() => $panel = 'advertising'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'advertising' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>Advertising</span>
                </button>
                <button id="social-media" on:click={() => $panel = 'social-media'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'social-media' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>Social Media</span>
                </button>
                <button id="agency-solutions" on:click={() => $panel = 'agency-solutions'} class="px-[6px] mx-[15px] text-center h-[128px] w-[158px] flex flex-col items-center transition-all duraiton-200 border-b-4 {$panel === 'agency-solutions' ? 'border-primary-500' : 'border-transparent'}">
                    <img class="object-cover mb-[12px]" src="https://placehold.co/64x64" alt="placeholder"/>
                    <span>Agency Solutions</span>
                </button> 
            </div>
        </div>
        {#if $panel === 'seo'}    
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">Grow organic traffic with our complete and easy SEO tools & workflow</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
        {#if $panel === 'content-marketing'}    
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">This is Something New Content Marketing</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
        {#if $panel === 'market-research'}
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">This is Something New Market Research</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
        {#if $panel === 'advertising'}
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">Grow organic traffic with our complete and easy SEO tools & workflow</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
        {#if $panel === 'social-media'}
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">This is Something New Content Marketing</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
        {#if $panel === 'agency-solutions'}
        <div class="w-full h-auto pt-[85px] pr-[12px] pb-[30px] pl-[67px] flex flex-row">
            <div class="mr-[6rem] max-w-md">
                <h3 class="mb-[2rem] font-serif text-[2rem] leading-normal">This is Something New Content Marketing</h3>
                <div class="mb-[2rem]">
                    <li class="mb-[8px] font-serif">Info</li>
                    <li class="mb-[8px] font-serif">May</li>
                    <li class="mb-[8px] font-serif">Be</li>
                    <li class="mb-[8px] font-serif">Here</li>
                </div>
                <button class="btn btn-lg bg-orange-600 rounded" >Try Something</button>
            </div>
            <div class="">
                 <img class="object-cover" src="https://placehold.co/560x475" alt="placeholder"/>
            </div>
        </div>
        {/if}
    </div>
</div>
