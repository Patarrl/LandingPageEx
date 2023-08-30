<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    let elemMovies: HTMLDivElement;



const pictureData =[
    {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:1        
    },
    {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",  
        id:2       
    },
    {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:3            
    },
    {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:4            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:5            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:6            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:7            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:8            
    },
    {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:9            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:10            
    }, {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:11            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:12            
    }, {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:13            
    },  {
        url:"",
        image:"https://placehold.co/300x100",
        alt:"",
        name:"",
        id:14            
    },
]
    let activeIndex = 0;
    let autoplayInterval:any;
    let isAutoplay = true;

    const multiColumnLeft = (): void => {
	let x = elemMovies.scrollWidth;
	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

const multiColumnRight = (): void => {
	let x = 0;
	// -1 is used because different browsers use different methods to round scrollWidth pixels.
	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            if (!isAutoplay) {
                clearInterval(autoplayInterval)
                return;
            }
            multiColumnRight();
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
        isAutoplay = false;
    }

    onMount(() => {
        isAutoplay = true;
        startAutoplay();
    });

    onDestroy(() => {
        stopAutoplay();
    });
</script>
<div class="w-full max-w-[1200px] flex justify-center">
    <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
        <!-- Button: Left -->
        <button id="previous" type="button" class="btn-icon variant-filled" on:click={() => {
            multiColumnLeft();
            isAutoplay = false;
        }}>
            <i class="fa-solid fa-arrow-left" />
        </button>
        <!-- Carousel -->
        <div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
            {#each pictureData as picture, index}
                <a href={picture.url} target=0 class="shrink-0 w-[28%] snap-center class:active={index === picture.id}">
                    <img
                        class="rounded-container-token hover:brightness-125"
                        src={picture.image}
                        alt={picture.name}
                        title={picture.name}
                        loading="lazy"
                    />
                </a>
            {/each}
        </div>
        <!-- Button-Right -->
        <button id="next" type="button" class="btn-icon variant-filled" on:click={() => {
            multiColumnRight();
            isAutoplay = false;
        }}>
            <i class="fa-solid fa-arrow-right" />
        </button>
    </div>
</div>

