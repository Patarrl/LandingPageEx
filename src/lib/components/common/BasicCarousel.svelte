<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let imageWidth = writable(0);

    onMount(() => {
        let carousel = document.getElementById('carousel');
        if (!carousel?.clientWidth) return;
    })
</script>

<div id="carousel" class="flex flex-row gap-4 overflow-x-auto py-4 hide-scrollbar scroll-smooth snap-x snap-proximity mb-4 touch-pan-x">
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="/Semrush.png" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="/favicon.png" alt="logo skeleton"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img style="width: {$imageWidth}px" class="h-full object-contain" src="https://placehold.co/300x100" alt="logo"/>
</div>