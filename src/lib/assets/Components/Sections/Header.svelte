<script lang="ts">
	import { resolve } from '$app/paths';
    import { ArrowUpRight, Menu, Pointer, X } from '@lucide/svelte';

	let isMenuOpen = $state<boolean>(false);
	const toggleMenu=()=>isMenuOpen=!isMenuOpen;

	const navs:Array<{title:string,url:string}>=[
		{title:"Architecture",url:"#architecture"},
		{title:"Security",url:"#security"},
		{title:"Technology",url:"#tech"},
		{title:"About",url:"#about"},
	];

</script>

<header class="site-header">
	<div class="header-inner">
		<!-- Brand -->
		<a href={resolve("/")} class="brand" aria-label="CureSockets home">
			<div class="brand-mark">
			</div>

			<div class="brand-text">
				<span class="brand-name">CureSockets</span>
				<span class="brand-tag">SECURE HEALTHCARE NETWORKS</span>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="desktop-nav" aria-label="Main navigation">
			{#each navs as nav, i(i)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={nav.url}>{nav.title}</a>
			{/each}
		</nav>

		<!-- Header Action -->
		<a href="#contact-us" id="contact-btn" class="btn header-action">
			<span>Contact Us</span>
			<ArrowUpRight size={16} strokeWidth={2} />
		</a>
        <button class="btn btn-ghost small menu" onclick={toggleMenu}>
            {#if !isMenuOpen}
				<Menu strokeWidth={4}/>
			{:else}
				<X strokeWidth={4}/>
			{/if}
        </button>
	</div>
</header>
{#if isMenuOpen}
	<div class="mobile-menu dropdown" aria-label="Main navigation for mobile users">
		{#each navs as nav, i(i)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={nav.url}>
					<Pointer color="#10B981" strokeWidth={2}/>
					{nav.title}
				</a>
		{/each}
	</div>
{/if}


<style>
.mobile-menu{
	display: flex;
	flex-direction: column;
	gap: var(--gap-xs);
	padding: var(--space-2);
	border-radius: var(--radius-lg);
	background-color: var(--bg-surface);
	border:2px solid var(--border);
	width: clamp(65dvw, 2vw, 55dvw);
	position: fixed;
	right:2%; top:76px;
	font-family: var(--font-family-mono);
	animation:gelatine .8s ease-in;
	z-index:1000;
}

.mobile-menu a{
	display: inline-flex;
	align-items: center;
	padding: 2%;
	gap:var(--gap-xs);
	font-size: var(--font-base);
	background-color: var(--bg-app);
	border-radius: var(--radius-md);
}



.site-header {
	position: sticky;
	top: 0;
	z-index: 100;
	width: 100%;
	background: rgba(10, 15, 29, 0.82);
	border-bottom: 1px solid var(--border);
	animation:gelatine 1s ease-in;
}

.header-inner {
	width: min(1200px, calc(100% - 40px));
	height: 76px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
}


/* =========================================================
   BRAND
   ========================================================= */

.brand {
	display: inline-flex;
	align-items: center;
	gap: 12px;
	color: var(--text-main);
	text-decoration: none;
	flex-shrink: 0;
}

.brand-mark {
	width: clamp(5dvw, 7vw, 3dvw);
	height: clamp(5dvw, 7vw, 3dvw);
    padding: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background-image: url('/Img/CureSockets.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.brand-text {
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.brand-name {
	font-size: var(--font-base);
	font-weight: 700;
	letter-spacing: -0.02em;
}

.brand-tag {
	font-family: var(--font-family-mono);
	font-size: var(--font-xs);
	font-weight: 500;
	letter-spacing: 0.08em;
	color: var(--text-dim);
}


/* =========================================================
   NAVIGATION
   ========================================================= */

.desktop-nav {
	display: flex;
	align-items: center;
	gap: 2.5vw;
	margin-left: auto;
}

.desktop-nav a {
	position: relative;
	color: var(--text-muted);
	text-decoration: none;
	font-size: var(--font-sm);
	font-weight: 500;
	transition: color 160ms ease,transform 160ms ease;
}

.desktop-nav a::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -7px;
	width: 0;
	height: 1px;
	background: var(--primary);
	transition: width 160ms ease;
}

.desktop-nav a:hover {
	color: var(--text-main);
}

.desktop-nav a:hover::after {
	width: 100%;
}


/* =========================================================
   HEADER ACTION
   ========================================================= */

.header-action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 7px;
	padding: 10px 16px;
	border-radius: var(--radius-md);
	color: var(--primary-foreground);
	background: var(--primary);
	text-decoration: none;
	font-size: var(--font-sm);
	font-weight: 700;
	box-shadow: 0 0 0 rgba(52, 211, 153, 0);
	transition:
		background 160ms ease,
		transform 160ms ease,
		box-shadow 160ms ease;
}

.header-action:hover {
	background: var(--primary-hover);
	transform: translateY(-1px);
	box-shadow: var(--glow-primary);
}

.header-action:active {
	transform: translateY(0);
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 850px) {
	.desktop-nav {
		display: none;
	}

	.header-inner {
		width: min(100% - 28px, 1200px);
	}
}

@media (max-width: 520px) {
	.header-inner {
		height: 68px;
	}

	.brand-tag {
		display: none;
	}

	.brand-mark {
		width: 38px;
		height: 38px;
	}

	.header-action {
		padding: 9px 13px;
		font-size: var(--font-xs);
	}
}

@media (max-width: 360px) {
	.header-action span {
		display: none;
	}

	.header-action {
		width: 38px;
		height: 38px;
		padding: 0;
	}
}

</style>