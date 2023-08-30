<script>
	import CSecondCalltoAction from "$lib/components/common/CSecondCalltoAction.svelte";
	import Footer from "$lib/components/common/Footer.svelte";
    import AllTools from "$lib/components/features/AllTools.svelte";
    import CallToAction from "$lib/components/features/CallToAction.svelte";
	import CardsOfInterest from "$lib/components/features/CardsOfInterest.svelte";

</script>
<div class="w-full flex flex-col ">
    <CallToAction></CallToAction>
    <CardsOfInterest></CardsOfInterest>
    <CSecondCalltoAction></CSecondCalltoAction>
    <AllTools></AllTools>
    <Footer/>
</div>