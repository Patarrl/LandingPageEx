<script lang='ts'>
  import Carousel from 'svelte-carousel'



  let carousel: any; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext({ animated: true })
  }


</script>
  
<Carousel
  autoplayDirection='next' autoplayDuration="3000" particlesToShow={6} particlesToScroll={6}
  pauseOnFocus={true} infinite={true} swiping={true} arrows={false} autoplay dots={false}
>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="/Semrush.png" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="/favicon.png" alt="logo skeleton"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
    <img class="w-[150px] h-[42px] px-3 object-contain" src="https://placehold.co/300x100" alt="logo"/>
</Carousel>
 