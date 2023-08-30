<script lang="ts">
	import { writable } from "svelte/store";


    let elemCarousel: HTMLDivElement;

    const carouselLeft = () => {
    const x =
        elemCarousel.scrollLeft === 0
            ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
            : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
    elemCarousel.scroll(x, 0);
    }

    const carouselRight = () => {
    const x =
        elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
            ? 0 // loop
            : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
    elemCarousel.scroll(x, 0);
}

let panel = writable("marketing-suite")

const testimonialDataMarkertingSuite =[
    {
        description: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google",
        testimonial:"Casey Camilleri Marx",
        position:"Digital Marketing Director, NIyte Software",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
const testimonialDataSEO =[
    {
        description: "We chose Semrush because the keyword tracking was much more accurate then our previous tools and the interface was very intuitive",
        testimonial:"Freddy Hunt",
        position:"Director of SEO and Content Marketing, Oneupweb",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
const testimonialDataContentMarketing =[
    {
        description: "Our overall organic traffic increased sevenfold, with blog traffic making over 75% of the visits! Semrush allowed us to optimize and run our content strategy without needing an army of SEO experts",
        testimonial:"Barbora Jassova",
        position:"Content Strategist, Landbot",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
const testimonialDataMarketResearch =[
    {
        description: "When you are at the table with a general manager, they just want to know the market share. Market Explorer is the perfect tool to quickly show what our brand's role and classification inside the market are.",
        testimonial:"Emanuele Arosio",
        position:"Head of Global SEO, Triboo Group",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
const testimonialDataAdvertising =[
    {
        description: "Semrush has been pivotal in helping me better understand the competitive landscape of my ad campaigns. I have been able to close the gaps between my organic and paid efforts thus distributing my budget and tactics in a comprehensive manner",
        testimonial:"Andrea Cruz",
        position:"Digital Marketing Manager, KoMarketing",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
const testimonialDataSocialMedia =[
    {
        description: "Semrush Social Media Toolkit is the best in the business. I'm using this tool to great effect and it has helped to increase my visibility on Social Media",
        testimonial:"Jigar Agrawal",
        position:"SEO Specialist, freelance",
        value:"1"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"2"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"3"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone",
        value:"4"
    }
]
</script>
<div class="pt-[186px]">
    <div class="mx-auto w-full max-w-[1200px]">
        <h2 class="mb-[60px] text-[45px] font-serif text-center">Here’s why marketers ❤ Semrush</h2>
        <div class="mx-[50px]">
            <div class="flex mx-[-8px] text-black font-medium justify-center">
                <button class="btn btn-lg {$panel === 'marketing-suite' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='marketing-suite'} id="marketing-suite">Marketing Suite</button>
                <button class="btn btn-lg {$panel === 'seo' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='seo'} id="seo">SEO</button>
                <button class="btn btn-lg {$panel === 'content-marketing' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='content-marketing'} id="content-marketing">Content marketing</button>
                <button class="btn btn-lg {$panel === 'market-research' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='market-research'} id="market-research">Market Research</button>
                <button class="btn btn-lg {$panel === 'advertising' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='advertising'} id="advertising">Advertising</button>
                <button class="btn btn-lg {$panel === 'social-media' ? 'border-purple-400' : 'border-transparent'} bg-white rounded-full mx-[6px] my-[8px] px-[24px] py-[8px] border-4 hover:border-purple-900 focus:bg-purple-700" on:click={() => $panel='social-media'} id="social-media">Social Media</button>
            </div>
            <div class="card py-[60px] px-[150px]">
                <div class="mx-[220px] mb-[50px] flex justify-between text-center">
                    <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
                        <i class="fa-solid fa-arrow-left" />
                    </button>
                    <span>1/4</span>
                    <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
                        <i class="fa-solid fa-arrow-right" />
                    </button>
                </div>
                {#if $panel === 'marketing-suite' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataMarkertingSuite as testimonial}
                        <div class="snap-center min-w-full rounded-container-token">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
                {#if $panel === 'seo' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataSEO as testimonial}
                        <div class="snap-center min-w-full rounded-container-token ">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
                {#if $panel === 'content-marketing' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataContentMarketing as testimonial}
                        <div class="snap-center min-w-full rounded-container-token ">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
                {#if $panel === 'market-research' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataMarketResearch as testimonial}
                        <div class="snap-center min-w-full rounded-container-token ">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
                {#if $panel === 'advertising' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataAdvertising as testimonial}
                        <div class="snap-center min-w-full rounded-container-token ">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
                {#if $panel === 'social-media' }
                <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                    {#each testimonialDataSocialMedia as testimonial}
                        <div class="snap-center min-w-full rounded-container-token ">
                            <div class="flex flex-col items-center text-center">
                                <p class="text-[32px] pb-[1rem] leading-9">{testimonial.description}</p>
                                <img class="pb-[1rem]" src="https://placehold.co/75x75" alt=""/>
                                <span class="text-[17px]">{testimonial.testimonial}</span>
                                <span class="text-[17px] pb-[2rem] opacity-50">{testimonial.position}</span>
                            </div>
                        </div>
                    {/each}
                </div>
                {/if}
            </div>
        </div>
    </div>
</div>