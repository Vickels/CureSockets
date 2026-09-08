<script lang="ts">
  import { GraduationCap, Award, Users, ShieldCheck, Heart, ArrowUpRight } from '@lucide/svelte';

  const highlights = [
    {
      title: 'Academic Roots',
      detail: 'Federal University of Technology Minna',
      sub: 'School of Information & Communication Technology',
      icon: GraduationCap
    },
    {
      title: 'Mission Target',
      detail: 'NiTDA Hackathon 2026',
      sub: 'Building sovereign national security infrastructure',
      icon: Award
    },
    {
      title: 'Core Discipline',
      detail: '4 Cybersecurity Specialists',
      sub: 'Focused on network security & post-quantum crypto',
      icon: Users
    }
  ];
</script>

<section id="about" class="about-section">
  <div class="container">
    <!-- Header -->
    <div class="section-header">
      <div class="eyebrow">
        <GraduationCap size={14} />
        THE TEAM BEHIND CURESOCKETS
      </div>
      <h2>
        Engineered with purpose. <br />
        <span class="text-accent">From FUTMINNA to the healthcare frontlines.</span>
      </h2>
    </div>

    <div class="about-grid">
      <!-- Main Story Narrative -->
      <div class="story-card">
        <p class="lead-text">
          CureSockets was conceived and developed by a dedicated team of four Cybersecurity undergraduates from the Federal University of Technology Minna, Niger State.
        </p>
        <p class="body-text">
          What began as a focused entry for the national <strong>NiTDA Hackathon</strong> grew out of a shared realization: while enterprise clouds receive state-of-the-art protection, local hospital networks in regional medical centers remain dangerously exposed.
        </p>
        <p class="body-text">
          Our goal extends far beyond a hackathon submission. We are committed to refining CureSockets into a production-ready, zero-trust framework that protects vital healthcare infrastructure across Nigeria and beyond, ensuring that technology serves to safeguard human lives without compromise.
        </p>

        <div class="vision-tag">
          <Heart size={16} class="heart-icon" />
          <span>Built for resilient healthcare security. Driven by research and technical rigor.</span>
        </div>
      </div>

      <!-- Quick Facts / Institutional Specs -->
      <div class="specs-column">
        {#each highlights as item}
          <div class="spec-card">
            <div class="spec-icon">
              <svelte:component this={item.icon} size={20} />
            </div>
            <div class="spec-info">
              <span class="spec-label">{item.title}</span>
              <strong>{item.detail}</strong>
              <small>{item.sub}</small>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    position: relative;
    padding: var(--space-16) var(--page-padding);
    background: var(--bg-app);
    border-top: 1px solid var(--border);
  }

  .container {
    width: min(100%, var(--container-xl));
    margin-inline: auto;
  }

  .section-header {
    max-width: 720px;
    margin-bottom: var(--space-12);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: var(--font-xs);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.08em;
    margin-bottom: var(--space-4);
  }

  h2 {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0;
  }

  .text-accent {
    color: var(--primary);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: var(--gap-lg);
    align-items: start;
  }

  .story-card {
    padding: var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
  }

  .lead-text {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-main);
    line-height: 1.6;
    margin: 0 0 var(--space-5);
  }

  .body-text {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0 0 var(--space-4);
  }

  .body-text strong {
    color: var(--primary);
  }

  .vision-tag {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-6);
    padding: var(--space-4) var(--space-5);
    border-radius: var(--radius-md);
    background: rgba(52, 211, 153, 0.08);
    border: 1px solid rgba(52, 211, 153, 0.2);
  }

  :global(.heart-icon) {
    color: var(--primary);
    flex-shrink: 0;
  }

  .vision-tag span {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary);
  }

  .specs-column {
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
  }

  .spec-card {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    padding: var(--space-6);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .spec-card:hover {
    transform: translateY(-2px);
    border-color: rgba(52, 211, 153, 0.3);
  }

  .spec-icon {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(52, 211, 153, 0.25);
    background: rgba(52, 211, 153, 0.08);
    color: var(--primary);
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .spec-info {
    display: flex;
    flex-direction: column;
  }

  .spec-label {
    font-family: var(--font-family-mono);
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .spec-info strong {
    font-size: 1.05rem;
    color: var(--text-main);
    margin-bottom: 2px;
  }

  .spec-info small {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  @media (max-width: 960px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }
</style>