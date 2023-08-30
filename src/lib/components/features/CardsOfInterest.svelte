<script>
    const cardOfInterest = [
        {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"On-page SEO",
            description:"Get new ideas to improve your site's health and SEO performance",
            numOfTools:"3"
        }, {
            topic:"Competitor Analysis",
            description:"Increase your website traffic and improve performance with competitors' winning strategies",
            numOfTools:"3"
        }, {
            topic:"Content Marketing",
            description:"Develop a powerful content strategy with data-driven solutions",
            numOfTools:"4"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        }, {
            topic:"Keyword Research",
            description:"Bring traffic to your site by finding the best keywords",
            numOfTools:"6"
        },
    ]
</script>
<div class="pt-[130px]">
    <div class="px-[48px] mx-auto flex flex-col">
        <h2 class="text-[35px] mx-auto pb-[2rem]">Choose your area of interest</h2>
        <div class="flex mx-auto text-black font-medium">
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">All</button>
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">SEO</button>
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">Content</button>
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">Market Research</button>
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">Advertising</button>
            <button class="btn btn-lg bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-green-700 focus:bg-green-400">Social Media</button>
        </div>
        <div class="grid grid-cols-3 mx-auto gap-6">
            {#each cardOfInterest as card, i}
                <div class="card border px-[28px] py-[24px] w-[352px] h-[228px] hover:border-green-600 hover:scale-105">
                    <div class="">
                        <h3 class="text-[24px] mb-[18px] font-semibold">{card.topic}</h3>
                        <p class="text-[16px] mb-[32px] ">{card.description}</p>
                        <div class="mt-auto flex justify-between">
                            <div class="text-[18px] opacity-40">Learn More</div>
                            <div class="card text-[16px]">{card.numOfTools} Tools</div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>