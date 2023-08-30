<script lang="ts">
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

    const testimonialData =[
    {
        description:"By Using Semrush, my team saves a lot of time by working on the right content and in a more data-driven way. Everything we do here is backed up with data, and your tools is giving us more ammunition",
        testimonial:"Idan Segal",
        position:"Organic Growth Lead, Wix"
    },
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone"
    }
    ,
    {
        description:"The most important thing I can have really is data. Data is my currency. I need to support initiatives,business cases - any tools that give me insight I find incredibly useful. Semrush is a very solid package that delivers exactly that.",
        testimonial:"Nick Wilsdon",
        position:"Product Owner, Search, Vodafone"
    }
]
</script>
<div class="w-full max-w-[1200px] mx-auto py-[120px] px-[24px]">
    <div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
        <!-- Button: Left -->
        <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
            <i class="fa-solid fa-arrow-left" />
        </button>
        <!-- Full Images -->
        <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
            {#each testimonialData as testimonial}
                <div class="snap-center min-w-full rounded-container-token ">
                    <div class="mx-[100px] my-[60px] text-center leading-10">
                        <p class="text-[32px] font-semibold">{testimonial.description}</p>
                        <div class="text-[17px] font-semibold">{testimonial.testimonial}</div>
                        <div class="text-[17px] opacity-50">{testimonial.position}</div>
                    </div>
                </div>
            {/each}
        </div>
        <!-- Button: Right -->
        <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
            <i class="fa-solid fa-arrow-right" />
        </button>
    </div>
</div>

                        
                    