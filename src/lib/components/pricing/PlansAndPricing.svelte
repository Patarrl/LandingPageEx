<script>
    import { SlideToggle } from "@skeletonlabs/skeleton";
    import { _ } from 'svelte-i18n';

    const plans = [
        {
            title:"Pro",
            price:"129",
            topic:"For newbies and small teams",
            list_items: {
                list1:"5 projects",
                list2:"500 keywords to track",
                list3:"10,000 results per report",
            },
            descriptionTopic:"SEO, social, and PPC tools",
            description:"Competitor analysis, keyword research, website audit, advertising and social media tools, and more"
        }, {
            title:"Guru",
            price:"249",
            topic:"For agencies and mid-size businesses",
            list_items: {
                list1:"15 projects",
                list2:"1,500 keywords to track",
                list3:"30,000 results per report",
            },
            descriptionTopic:"All Pro features plus",
            description:"Content Marketing Toolkit, historical data, multi-location and device tracking, Looker Studio integration, and more"
        }, {
            title:"Business",
            price:"499",
            topic:"For large agencies and enterprises",
            list_items: {
                list1:"40 projects",
                list2:"5,000 keywords to track",
                list3:"50,000 results per report",
            },
            descriptionTopic:"All Guru features plus",
            description:"Share of Voice, extended limits, API access, PLA analytics, free migration from third-party tools, and more"
        },

    ]
</script>
<div class="mx-auto w-full max-w-[1200px]">
    <div class="flex justify-between mx-auto px-[24px]">
        <h3 class="text-[48px]">{$_('pricing.plans_and_pricing')}</h3>
        <div class="">
            <SlideToggle name="slider-label" size="sm" checked>Pay annually and save up to 17%</SlideToggle>
        </div>
    </div>
    <div class="">
        <ul class="mx-auto mt-[48px] mb-[64px] px-[24px] grid grid-cols-3 justify-items-center">
            {#each plans as plan, i}
            <li class="card p-[32px] w-[350px] h-[550px] shadow-2xl ">
                <h2 class="text-[22px] font-semibold">{plan.title}</h2>
                <div>
                    <div class="mt-[12px] mb-[4px] flex items-center">
                        <span class="text-[50px] mr-[6px]">${plan.price}</span>
                        <div class="flex flex-col">
                            <span class="text-[16px] mt-[2px]">.95</span>
                            <span class="text-[16px] mt-[4px]">{$_('pricing.price_cards.interval')}</span>
                        </div>
                    </div>
                    <div class="mt-[12px] mb-[20px]">
                        <button class="text-[18px] btn btn-lg bg-green-400 rounded-md w-[18rem] h-[3rem] hover:bg-green-800" >{$_('pricing.price_cards.try')}</button>
                        <p class="mt-[8px] text-[16px]">{$_('pricing.price_cards.subscribe')}
                        </p>
                    </div>
                </div>
                <div class="">
                    <div class="mb-[20px]">
                        <p class="font-semibold mb-[8px] text-[18px]">{plan.topic}:</p>
                        <div class="">
                            <li class="opacity-60 text-[15px] ">{plan.list_items.list1}</li>
                            <li class="opacity-60 text-[15px] mt-[8px]">{plan.list_items.list2}</li>
                            <li class="opacity-60 text-[15px] mt-[8px]">{plan.list_items.list3}</li>
                        </div>
                    </div>
                    <div>
                        <p class="font-semibold mb-[8px] text-[18px]">{plan.descriptionTopic}:</p>
                        <p class="text-[15px] opacity-60">{plan.description}</p>
                    </div>
                </div>
            </li>
            {/each}
        </ul>
    </div>
</div>
