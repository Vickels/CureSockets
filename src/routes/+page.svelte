<script lang="ts">
 import Header from '$lib/assets/Components/Sections/Header.svelte';
 import SplashScreen from '$lib/assets/Components/Sections/SplashScreen.svelte';
 import Hero from '$lib/assets/Components/Sections/Hero.svelte';
 import Architecture from '$lib/assets/Components/Sections/Architecture.svelte';
 import Security from '$lib/assets/Components/Sections/Security.svelte';
 import Tech from '$lib/assets/Components/Sections/Tech.svelte';
 import How from '$lib/assets/Components/Sections/How.svelte';
 import About from '$lib/assets/Components/Sections/About.svelte';
 import ComingSoon from '$lib/assets/Components/Sections/ComingSoon.svelte';
 import Footer from '$lib/assets/Components/Sections/Footer.svelte';
 
 import {animation_seq} from "$lib/assets/Data/shared.svelte.js";
 import { onMount } from 'svelte';

 onMount(()=>{
    const status:string = sessionStorage.getItem("hxt") || "new";
    animation_seq.startAnimation=(status==="new");
    sessionStorage.setItem("hxt","old");
 });

</script>

{#if !animation_seq.startAnimation}
    <Header/>
    <Hero/>
    <Architecture/>
    <Security/>
    <Tech/>
    <How/>
    <About/>
    <ComingSoon/>
    <Footer/>
{:else}
    <SplashScreen/>
{/if}