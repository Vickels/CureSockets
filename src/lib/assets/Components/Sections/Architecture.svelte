<script lang="ts">
  import { ShieldCheck, Cpu, Lock, Network, ArrowRight } from '@lucide/svelte';

  const layers = [
    {
      id: '01',
      title: 'Local Socket Interception',
      tag: 'INGRESS LAYER',
      icon: Network,
      color: 'var(--primary)',
      description:
        'Transparently binds to raw TCP/UDP hospital network sockets. Captures cleartext HL7, DICOM, and telemetry streams from legacy bedside devices without requiring OS-level driver changes or physical hardware modification.'
    },
    {
      id: '02',
      title: 'PQC Encryption Engine',
      tag: 'CORE ENGINE',
      icon: Lock,
      color: 'var(--accent)',
      description:
        'Encapsulates clinical payloads using Hybrid TLS with Post-Quantum Cryptography (PQC) primitives. Ensures zero-trust mutual authentication (mTLS) across all local network switches.'
    },
    {
      id: '03',
      title: 'Zero-Trust Local Gateway',
      tag: 'EGRESS LAYER',
      icon: ShieldCheck,
      color: 'var(--primary)',
      description:
        'Validates access permissions and streams authenticated data directly to hospital Electronic Health Record (EHR) databases, central nursing stations, or secure cloud endpoints.'
    }
  ];
</script>

<section id="architecture" class="architecture-section">
  <div class="container">
    <!-- Header -->
    <div class="section-header">
      <div class="eyebrow">
        <Cpu size={14} />
        TECHNICAL DESIGN
      </div>
      <h2>
        Built for hospital LANs. <br />
        <span class="text-accent">Zero workflow disruption.</span>
      </h2>
      <p class="section-desc">
        CureSockets acts as an inline transparent proxy. It wraps legacy medical protocols in post-quantum encrypted tunnels while keeping existing clinical hardware completely untouched.
      </p>
    </div>

    <!-- Pipeline Visual -->
    <div class="pipeline-grid">
      {#each layers as layer, i}
        <div class="pipeline-card">
          <div class="card-top">
            <span class="layer-id" style="color: {layer.color}">{layer.id}</span>
            <span class="layer-tag">{layer.tag}</span>
          </div>

          <div class="icon-wrapper" style="border-color: {layer.color}40; background: {layer.color}10">
            <svelte:component this={layer.icon} size={24} style="color: {layer.color}" />
          </div>

          <h3>{layer.title}</h3>
          <p>{layer.description}</p>

          {#if i < layers.length - 1}
            <div class="connector-arrow" aria-hidden="true">
              <ArrowRight size={18} />
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Bottom Metric Banner -->
    <div class="arch-banner">
      <div class="banner-item">
        <strong>&lt; 2ms</strong>
        <span>Proxy Latency</span>
      </div>
      <div class="banner-divider"></div>
      <div class="banner-item">
        <strong>0 Changes</strong>
        <span>To Medical Hardware</span>
      </div>
      <div class="banner-divider"></div>
      <div class="banner-item">
        <strong>ML-KEM Ready</strong>
        <span>Post-Quantum TLS</span>
      </div>
    </div>
  </div>
</section>

<style>
  .architecture-section {
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

  .pipeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-lg);
    position: relative;
  }

  .pipeline-card {
    position: relative;
    padding: var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .pipeline-card:hover {
    transform: translateY(-4px);
    border-color: rgba(52, 211, 153, 0.4);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-6);
  }

  .layer-id {
    font-family: var(--font-family-mono);
    font-weight: 800;
    font-size: 1.2rem;
  }

  .layer-tag {
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--text-dim);
  }

  .icon-wrapper {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-md);
    border: 1px solid;
    display: grid;
    place-items: center;
    margin-bottom: var(--space-5);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-3);
  }

  p {
    color: var(--text-muted);
    font-size: 0.88rem;
    line-height: 1.65;
    margin: 0;
  }

  .connector-arrow {
    position: absolute;
    right: -18px;
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

  .arch-banner {
    margin-top: var(--space-12);
    padding: var(--space-6) var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(10, 15, 29, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .banner-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .banner-item strong {
    font-family: var(--font-family-mono);
    font-size: 1.4rem;
    color: var(--primary);
  }

  .banner-item span {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .banner-divider {
    width: 1px;
    height: 36px;
    background: var(--border);
  }

  @media (max-width: 960px) {
    .pipeline-grid {
      grid-template-columns: 1fr;
    }

    .connector-arrow {
      display: none;
    }

    .arch-banner {
      flex-direction: column;
      gap: var(--space-6);
    }

    .banner-divider {
      width: 100%;
      height: 1px;
    }
  }
</style>