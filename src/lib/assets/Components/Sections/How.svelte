<script lang="ts">
  import { Terminal, Monitor, RefreshCw, Lock, ArrowRight } from '@lucide/svelte';

  const steps = [
    {
      num: '01',
      title: 'Initialize Desktop Gateway',
      icon: Monitor,
      accent: 'var(--primary)',
      badge: 'HOST SETUP',
      desc: 'Install and launch the CureSockets Desktop Application on the primary facility workstation or server acting as the local LAN host.'
    },
    {
      num: '02',
      title: 'Auto-Discover LAN Devices',
      icon: RefreshCw,
      accent: 'var(--accent)',
      badge: 'DISCOVERY',
      desc: 'CureSockets scans the local subnet to index legacy patient monitors, telemetry gateways, and imaging systems with zero manual driver installation.'
    },
    {
      num: '03',
      title: 'Enforce Zero-Trust Encryption',
      icon: Lock,
      accent: 'var(--primary)',
      badge: 'PROTECTION LIVE',
      desc: 'Cleartext HL7 and DICOM streams are instantly encapsulated in post-quantum encrypted tunnels directly across local network sockets.'
    }
  ];
</script>

<section id="how-it-works" class="how-section">
  <div class="container">
    <!-- Header -->
    <div class="section-header">
      <div class="eyebrow">
        <Terminal size={14} />
        DEPLOYMENT WORKFLOW
      </div>
      <h2>
        Up and running in minutes. <br />
        <span class="text-accent">Zero medical hardware rewiring.</span>
      </h2>
      <p class="section-desc">
        Setting up CureSockets inside a clinical ward is designed to be as straightforward as launching a standard desktop utility on your primary host machine.
      </p>
    </div>

    <!-- 3-Step Process Grid -->
    <div class="steps-grid">
      {#each steps as step, i}
        <div class="step-card">
          <div class="step-top">
            <span class="step-num">{step.num}</span>
            <span class="step-badge" style="color: {step.accent};">{step.badge}</span>
          </div>

          <div class="icon-box" style="color: {step.accent}; border-color: {step.accent}30; background: {step.accent}10;">
            <svelte:component this={step.icon} size={22} />
          </div>

          <h3>{step.title}</h3>
          <p>{step.desc}</p>

          {#if i < steps.length - 1}
            <div class="step-arrow" aria-hidden="true">
              <ArrowRight size={16} />
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Subject to Change / Early Tech Note -->
    <div class="note-box">
      <span class="note-pill">EARLY PREVIEW</span>
      <p>
        Architecture and interface details are currently under active development for the NiTDA submission. Specific configuration flows may evolve as engine testing progresses.
      </p>
    </div>
  </div>
</section>

<style>
  .how-section {
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
    max-width: 680px;
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
    margin: 0 0 var(--space-4);
  }

  .text-accent {
    color: var(--primary);
  }

  .section-desc {
    color: var(--text-muted);
    font-size: var(--font-lg);
    line-height: 1.65;
    margin: 0;
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-lg);
    position: relative;
    margin-bottom: var(--space-10);
  }

  .step-card {
    position: relative;
    padding: var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .step-card:hover {
    transform: translateY(-3px);
    border-color: rgba(52, 211, 153, 0.4);
  }

  .step-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-5);
  }

  .step-num {
    font-family: var(--font-family-mono);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-dim);
  }

  .step-badge {
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    border: 1px solid;
    display: grid;
    place-items: center;
    margin-bottom: var(--space-5);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 var(--space-3);
  }

  p {
    color: var(--text-muted);
    font-size: 0.88rem;
    line-height: 1.65;
    margin: 0;
  }

  .step-arrow {
    position: absolute;
    right: -17px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--bg-app);
    color: var(--text-dim);
    display: grid;
    place-items: center;
  }

  .note-box {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    border: 1px dashed var(--border);
    border-radius: var(--radius-md);
    background: rgba(10, 15, 29, 0.4);
  }

  .note-pill {
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    font-weight: 700;
    color: var(--accent);
    padding: 3px 8px;
    border-radius: var(--radius-xs);
    background: rgba(167, 139, 250, 0.1);
    border: 1px solid rgba(167, 139, 250, 0.2);
    white-space: nowrap;
  }

  .note-box p {
    font-size: 0.82rem;
    color: var(--text-dim);
  }

  @media (max-width: 960px) {
    .steps-grid {
      grid-template-columns: 1fr;
    }

    .step-arrow {
      display: none;
    }

    .note-box {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>