<script>
    import { SlideToggle } from "@skeletonlabs/skeleton";
    import { Ratings } from '@skeletonlabs/skeleton';
    import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';

    const comparePlans = [
        {
            title:"Pro",
            price:"129",
        },
        {
            title:"Guru",
            price:"249", 
        },
        {
            title:"Business",
            price:"499",

        },
    ]
    let value = { 
        currentPro: 2,
        domainAnalyticsPro:3,
        projectFeaturesPro:2,
        reportingPro:1,
        contentMarketingPro:0,
        currentGuru: 4,
        domainAnalyticsGuru:4,
        projectFeaturesGuru:3,
        reportingGuru:4,
        contentMarketingGuru:4,
        currentBusiness:5,
        domainAnalyticsBusiness:5,
        projectFeaturesBusiness:5,
        reportingBusiness:5,
        contentMarketingBusiness:5,
        max: 5, 
    };

    let ratingsArray = [
        {key: 'features', name: "Key Features",ratings: [2, 4, 5], details: [
            {title: 'Projects', 
                pro: '5',
                guru:'15',
                business:'40'
            }, {title: 'Keywords to track (with daily updates)', 
                pro: '500',
                guru:'1500',
                business:'5000'
            }, {title: 'Keyword, domain and backlink analytics', 
                pro: '√',
                guru:'√',
                business:'√'
            }, {title: 'Historical data', 
                pro: '-',
                guru:'√',
                business:'√'
            }, {title: 'Content Marketing Platform', 
                pro: '-',
                guru:'√',
                business:'√'
            }, {title: 'Looker Studio Integration', 
                pro: '-',
                guru:'√',
                business:'√'
            }, {title: 'Share of Voice metric', 
                pro: '-',
                guru:'-',
                business:'√'
            }, {title: 'API Access', 
                pro: '-',
                guru:'-',
                business:'√'
            },
    ]},
        {key: 'domain', name: "Domain & Keyword Analytics", ratings: [3, 4, 5], details: []},
        {key: 'project', name: "Project Features", ratings: [2, 3, 5], details: []},
        {key: 'reporting', name: "Reporting", ratings:  [1, 4, 5], details: []},
        {key: 'content', name: "Content Marketing Platform", ratings: [0, 4, 5], details: []},
    ]


    const icons ={
        circleEmpty: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`,
        circleHalf: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`,
        circleFull: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>`
    }

    const planDetails = [
    {   mainTopic:null,
        topic:"Additional users",
        subTopic: null,
        subTopicTextDescription: "As an account owner, you can add additional users with unique login credentials under your account — an efficient and secure way to organize teamwork in Semrush.",
        subTopicDescriptionBullets: null,
        pricePro:"+$45/mo per user",
        priceGuru:"+$80/mo per user",
        priceBusiness:"+$100/mo per user",
    }, 
    {   mainTopic:"Semrush .Local",
        topic:"Basic plan",
        topicDescription:"Grow your local search visibility to help your customers find you first. Get your business accurately listed across the web with Listing Management and build an impeccable online reputation with Review Management",
        subTopic:"Premium plan",
        subTopic2: "",
        subTopicTextDescription: null,
        subTopicDescriptionBullets: {
            des1:"- Spy on your competitors on Google Maps with Local Heatmap",
            des2:"- Respond to Google reviews from one place",
            des3:"",
        },
        pricePro:"+$45/mo per user",
        priceGuru:"+$80/mo per user",
        priceBusiness:"+$100/mo per user",
    }
]

</script>

<div class="mx-auto w-full max-w-[1200px] sticky top-[0px] bg-surface-900 z-[1000]">
    <div class="px-[24px] py-[12px] grid grid-cols-4 justify-items-center">
        <div class="">
            <div class="text-[32px] mb-[2rem] font-semibold">Compare Plans</div>
            <div>
                <SlideToggle name="slider-label" size="sm" checked>Pay annually</SlideToggle>
            </div>
        </div>
        {#each comparePlans as plan, i}
        <div class="ofeach ">
            <div class="text-[18px] font-semibold mb-[8px]">{plan.title}</div>
            <div class="text-[26px] font-semibold mt-[4px] mb-[16px]">${plan.price}
                <span class="text-[18px] font-normal">.95 /mo</span>
            </div>
            <div>
                <button class="text-[18px] btn btn-lg bg-green-400 rounded-md w-[8rem] h-[3rem] hover:bg-green-800">Try for Free</button>
                <p class="text-[14px]">or
                     <span class="text-[14px] hover:text-orange-400 mt-[8px] hover:underline underline-offset-2">subscribe</span>
                </p>
            </div>
        </div>
        {/each}
    </div>
</div>
<div class="mx-auto px-[24px] w-full max-w-[1200px]">
    <TreeView>
        {#each ratingsArray as rating (rating.key)}
            <TreeViewItem>
                <div class="grid grid-cols-4">
                    <div class="py-[14px] text-[20px] font-semibold">
                        <h3>{rating.name}</h3>
                    </div>
                    {#each rating.ratings as ratingItem}
                        <div class="p-[14px]">
                            <Ratings value={ratingItem} max={value.max} fill="fill-green-500">
                                <svelte:fragment slot="empty">{@html icons.circleEmpty}</svelte:fragment>
                                <svelte:fragment slot="half">{@html icons.circleHalf}</svelte:fragment>
                                <svelte:fragment slot="full">{@html icons.circleFull}</svelte:fragment>
                            </Ratings>
                        </div>
                    {/each}
                </div>
                <svelte:fragment slot="children">
                    {#each rating.details as detail}
                        {#if rating.key === "features"}
                            <div class="grid grid-cols-4">
                                <div class="py-[14px] pl-[32px]">{detail.title}</div>
                                <div class="py-[14px]">{detail.pro}</div>
                                <div class="py-[14px]">{detail.guru}</div>
                                <div class="py-[14px]">{detail.business}</div>
                            </div>
                        {/if}
                    {/each}
                </svelte:fragment>   
            </TreeViewItem>
        {/each}
    </TreeView>
       
    <div class="grid grid-cols-4">
        {#each planDetails as detail, i}
            {#if detail.mainTopic}
        <div class="py-[14px] text-[20px] font-semibold col-span-4">
            <h3>{detail.mainTopic}</h3>
        </div>
            {/if}        
        <div class="pt-[4px] pb-[14px] pr-[24px]">
            <div class="py-[14px]">
                <h3 class="text-[18px]">{detail.topic}</h3>
                {#if detail.topicDescription}
                <div class="text-[14px] mt-[8px] pr-[10px] opacity-50">{detail.topicDescription}</div>
                {/if}
                {#if detail.subTopicTextDescription}
                    <div class="text-[14px] mt-[8px] pr-[10px] opacity-50">{detail.subTopicTextDescription}</div>
                {:else}
                    <!-- Bullet points with subTopicDescriptionBullets -->
                    <h3 class="text-[18px] pt-[20px]">{detail.subTopic}</h3>
                    <div>
                        <ul class="mt-[8px] pr-[10px] opacity-50">
                            <p class="">All basic features plus:</p>
                            <li>{detail.subTopicDescriptionBullets?.des1}</li>
                            <li>{detail.subTopicDescriptionBullets?.des2}</li>
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
        <div class="py-[14px] font-semibold flex flex-col justify-start">
            <div class="text-[18px] mb-[10px]">{detail.pricePro}</div>
            <button class="text-[18px] btn btn-lg border border-green-400 rounded-md w-[10rem] h-[3rem] hover:bg-green-800 text-green-400">Buy Now</button>
        </div>
        <div class="py-[14px] font-semibold">
            <div class="text-[18px] mb-[10px]">{detail.priceGuru}</div>
            <button class="text-[18px] btn btn-lg border border-green-400 rounded-md w-[10rem] h-[3rem] hover:bg-green-800 text-green-400">Buy Now</button>
        </div>
        <div class="py-[14px] font-semibold">
            <div class="text-[18px] mb-[10px]">{detail.priceBusiness}</div>
            <button class="text-[18px] btn btn-lg border border-green-400 rounded-md w-[10rem] h-[3rem] hover:bg-green-800 text-green-400">Buy Now</button>
        </div>
        {/each}
    </div>
</div>