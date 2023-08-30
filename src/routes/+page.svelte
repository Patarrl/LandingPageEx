<script>
	import Footer from "$lib/components/common/Footer.svelte";
	import CeoGuarantee from "$lib/components/root/CEOGuarantee.svelte";
	import CallToAction from "$lib/components/root/CallToAction.svelte";
	import FeatureCarousel from "$lib/components/root/FeatureCarousel.svelte";
	import IndexFigures from "$lib/components/root/IndexFigures.svelte";
	import InsightsData from "$lib/components/root/InsightsData.svelte";
	import SampleCarousel from "$lib/components/root/SampleCarousel.svelte";
	import SecondCallToAction from "$lib/components/root/SecondCallToAction.svelte";
	import SimilartoQuote from "$lib/components/root/SimilartoQuote.svelte";
	import TestimonialsCarousel from "$lib/components/root/TestimonialsCarousel.svelte";

</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="w-full flex items-center flex-col">
	<CallToAction></CallToAction>
	<FeatureCarousel></FeatureCarousel>
	<SimilartoQuote></SimilartoQuote>
	<IndexFigures></IndexFigures>
	<InsightsData></InsightsData>
	<CeoGuarantee></CeoGuarantee>
	<TestimonialsCarousel></TestimonialsCarousel>
	<SecondCallToAction></SecondCallToAction>
	<Footer></Footer>
</div>
