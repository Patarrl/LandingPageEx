<script>
	import Footer from "$lib/components/common/Footer.svelte";
import CallToAction from "$lib/components/pricing/CallToAction.svelte";
import ComparePlans from "$lib/components/pricing/ComparePlans.svelte";
	import Faq from "$lib/components/pricing/FAQ.svelte";
import PlansAndPricing from "$lib/components/pricing/PlansAndPricing.svelte";
	import TestimonialsCarousel from "$lib/components/pricing/TestimonialsCarousel.svelte";


</script>

<div class="w-full flex flex-col pt-[100px]">
    <PlansAndPricing/>
    <ComparePlans/>
</div>
<div>
    <CallToAction/>
    <Faq/>
    <TestimonialsCarousel/>
    <Footer/>
</div>