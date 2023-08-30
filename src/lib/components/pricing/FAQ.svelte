<script>
    import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { Ratings } from '@skeletonlabs/skeleton';

    const faq = [
        {
            question:"Can I cancel my subscription anytime?",
            answer:'Yes, you can cancel your subscription, downgrade or upgrade your plan at anytime.'
        }, {
            question:"What is Semrush's refund policy?",
            answer:'You get a 7-day money-back guarantee on all plans. Submit your request via our contact form, and we will refund the payment made if the request is made within 7 days after the sign-up.'
        },{
            question:"What payment methods do you accept?",
            answer:"You can pay using the following payment methods. 1. All major credit cards including Visa, Mastercard, Discover, American Express, and UnionPay 2. Wire transfer (upon request) 3.Check or money order (US only, upon request) "
        },{
            question:"Do I get a customer demo?",
            answer:'Once you sign up for a Semrush free trial, request a free training session here. After your demo, you will be assigned a dedicated point of contact for all of your Semrush-related questions.'
        },{
            question:"Can I use Semrush for free?",
            answer:'Yes. With a free account, you can still use a lot of tools, but you will be limited in your ability to pull all of the data and use other tools. The maximum number of requests made to the Analytics reports per day is limited to only 10 (Pro users have access to 3,000 searches, Guru — 5,000 searches, Business — 10,000 searches). As a free user, you can create and manage only one Project and track 10 keywords in Position Tracking. Discover more features we offer our free users and the comparison to our paid plans in this article.'
        },{
            question:"Am I charged when I enter my credit card?",
            answer:'We will charge a nominal amount to your credit card to check its validity; once confirmed, it will be immediately refunded. Until your Semrush trial period ends you won’t be charged.'
        },{
            question:"Which would be better for me, Guru or Pro?",
            answer:"If you’re a freelancer, blogger, or in-house marketer with a limited budget, then the Semrush Pro plan will likely be the best option. If you’re a professional SEO consultant or an agency with numerous clients, then you will be best suited to the Semrush Guru plan.You can find a deep comparison of our plans by limits in the subscription limits article."
        },{
            question:"I run a small agency. What plan should I choose?",
            answer:'You might choose Pro plan, which is the basic subscription, or Guru plan, which is the most popular for SMBs and growing agencies. The plans differ in the number of tools available as well as in the number of limits.You can consult this page to understand better which subscription will better fit your marketing needs.'
        },{
            question:"What is the pricing currency?",
            answer:'All prices are in US dollars.'
        },
    ]

</script>
<div class="w-full max-w-[1200px] flex mx-auto">
    <div class="px-[24px] pt-[120px] w-full">
        <div class="mb-[40px] text-[42px] font-semibold">
            <h2>FAQ</h2>
        </div>
        <div class="card font-semibold">
            <Accordion autocollapse rounded='rounded-container-token' padding="py-[24px] px-[65px]" class="" >
                {#each faq as faq}
                <AccordionItem>
                    <svelte:fragment slot="summary">
                        <div class="text-[18px]">
                            {faq.question}
                        </div>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <div class="font-normal text-gray-300">
                            {faq.answer}
                        </div>
                    </svelte:fragment>
                </AccordionItem>
                {/each}
            </Accordion>
        </div>
    </div>
</div>