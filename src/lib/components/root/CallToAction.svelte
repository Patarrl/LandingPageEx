<script>
    import SampleCarousel from '$lib/components/root/SampleCarousel.svelte';
    import { fly } from 'svelte/transition';
    import BasicCarousel from '../common/BasicCarousel.svelte';
</script>
    
    <div id="gradient" class="w-full bg-purple-800 flex justify-center pb-[10rem] h-[1200px] ">
		<div class="w-full max-w-[1200px]"> 
			<div class="index-header p-[100px]">
				<div class=" flex flex-col justify-center items-center">
					<h1 class="text-6xl text-center pb-[16px]" in:fly={{y: 300, duration: 555, delay: 111 * 1}}> Get measureable results from online marketing </h1>
					<p class="text-xl pb-[40px]" in:fly={{y: 300, duration: 555, delay: 111 * 2}}>
						"Do SEO, content marketing, competitor research,"
						<br>
						"PCC and social media marketing from just one platform"
					</p>
                    <div class="flex" in:fly={{y: 300, duration: 555, delay: 111 * 3}}>
                        <div class="input-group input-group-divider grid-cols-[1fr_auto] mr-[12px]">
                            <input class="font-serif px-[20px] text-black w-auto" placeholder="Enter domain, keyword, or URL" >
                            <select class="input-group-shim">
                                <option>US</option>
                            </select>
                        </div>
                        <a href="/getstarted">
                            <button class="btn btn-lg bg-orange-500 rounded-md" >Start Now</button>
                        </a>
                    </div>
                    <div class="pb-[42px]" in:fly={{y: 300, duration: 555, delay: 111 * 4}}>
                        <div class="pt-[100px] pb-[32px] text-[17px]">
                        Trusted by the world's leading brands
                        </div>
                    </div>
                    <BasicCarousel />
                    <!-- <SampleCarousel></SampleCarousel> -->
				</div>
			</div>
		</div>
	</div>



<style lang="postcss">
	#gradient {
		background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}

</style>