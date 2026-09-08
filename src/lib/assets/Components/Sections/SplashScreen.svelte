<script lang="ts">
	import { LockKeyhole, SkipForward, UnlockKeyhole } from "@lucide/svelte";
	import { onMount } from "svelte";
    import {getDeviceType} from "$lib/assets/Data/utils";
    import {animation_seq} from "$lib/assets/Data/shared.svelte.js";

    const stats: Array<{ title: string; desc: string; img: string; alt: string }> = [
        {
            title: "The Unseen Risk in Hospital Wards",
            desc: "Every day, medical devices quietly exchange sensitive patient data across hospital networks. Much of it still travels without enough protection.",
            img: "/Img/hospital_switch_port+(1).webp",
            alt: "Hospital network switch port"
        },
        {
            title: "When Security Becomes Patient Care",
            desc: "A network attack can do more than steal data. It can disrupt the systems doctors and nurses depend on to care for patients.",
            img: "/Img/hospital_night_monitor+(1).webp",
            alt: "Night monitor at a hospital"
        },
        {
            title: "Security Without Disruption",
            desc: "CureSockets protects legacy medical devices with zero-trust, post-quantum encryption, keeping sensitive connections secure while care keeps moving.",
            img: "/Img/og-image.webp",
            alt: "The staff now use secured devices at the hospital"
        }
    ];
    
    
    //unlock then lock
    let lockState = $state<boolean>(false);

    let endFirstSequence = $state<boolean>(false);

    //second sequence of animations
    let animIndex = $state<number>(0);

    let device = $state<string>("mobile");
    let iconSize = $derived(
        device === 'mobile' ? 38 :
        device === 'tablet' ? 43 : 60
    );
   
    onMount(()=>{
        device=getDeviceType();
        setTimeout(()=>{
            lockState=true;
            //end first sequence
            setTimeout(()=>{
                endFirstSequence=true;
                startCarousel();
            },4000);
        },1000);
    });

    function startCarousel(time=26900){
        const start = setInterval(()=>{
            animIndex = (animIndex + 1) % stats.length;
        },9000);
        setTimeout(()=>{
            clearInterval(start);
            animation_seq.startAnimation=false;
        },time);
    }
</script>

{#if animation_seq.startAnimation}
    <div class="splashscreen overflow-hidden">

        {#if !endFirstSequence}
            <div class="circle">
            {#if lockState}
                <LockKeyhole size={Number(iconSize)} strokeWidth={4}/>
            {:else}
                <UnlockKeyhole size={Number(iconSize) - 8} strokeWidth={4}/>
            {/if}
            </div>

            <div class="text font-bold w-fit text-center">From <span class="danger-text">Insecure</span> to <span class="success-text">Secure</span></div>
        <!-- second sequence -->
        {:else}
            <button class:active={!animation_seq.startAnimation}
            onclick={()=>startCarousel(500)}
            class="btn btn-primary fab font-bold tracking-tight">
                <SkipForward strokeWidth={4}/>
                <span>Skip</span>
            </button>
            {#each stats as stat, i(i)}
                <div class="animlay" class:active={i===animIndex}>
                <div class="big-image">
                    <img src={stat.img} 
                    alt={stat.alt} loading="lazy" decoding="async"/>
                </div>
                <div class="content">
                    <h1 class="tracking-tight font-extrabold">
                    {stat.title}
                    </h1>
                    <span>{stat.desc}</span>
                </div>
                </div>
            {/each}
        {/if}

    </div>
{/if}

<style>
.big-image{
    width: 100%;
    height: auto;
    background-color: var(--bg-surface);
    border-radius: var(--radius-lg);
    border:5px solid var(--border);
    animation: fade-in .95s ease-in-out;
    overflow: hidden;
}
.big-image img{
    object-fit: cover;
}
.animlay{
    width:fit-content;
    max-width: 480px;
    height: 100dvh;
    overflow: hidden;
    padding: 2%;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.animlay.active{
    display:flex;
}

.animlay .content{
    text-align: left;
    width: 100%;
    padding: 2.5%;
    font-size: var(--font-lg);
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
}

.animlay .content h1{
    width: 100%;
    color: var(--primary);
    font-family: var(--font-family-mono);
    font-size: var(--font-xxl);
    animation:dance 2s ease-out;
}

.animlay .content span{
    animation: fade-in 2.8s ease-in-out;
}

.text{
    margin-top: 5%;
    font-size: clamp(var(--font-base), 7vw, var(--font-xl));
    animation: dance 3.75s cubic-bezier(0.755, 0.05, 0.855, 0.06);
}
.splashscreen{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-app);
    animation:fade-in 0.2s ease-in-out;
    z-index: 1000;
    width: 100dvw;
    height: 100dvh;
}

.circle{
    width: clamp(90px, 20vw, 170px);
	height: clamp(90px, 20vw, 170px);
    border-radius: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--bg-app);
    font-weight: bold;
    background: radial-gradient(
        circle at 30% 30%,
        #34D399 0%,
        #10B981 60%,
        #022C22 100%
    );
    box-shadow: var(--shadow-3d-primary);
    animation: fade-in .2s ease-in, heartbeat 1.45s .4s ease-in-out infinite, hithere 1.2s .25s ease-out;
}

</style>