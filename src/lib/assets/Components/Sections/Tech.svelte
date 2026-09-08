<script lang="ts">
  import { Cpu, ShieldCheck, KeyRound, Lock, Binary, Zap } from '@lucide/svelte';

  const specs = [
    {
      title: 'Hybrid Key Exchange',
      code: 'X25519 + ML-KEM-768',
      icon: KeyRound,
      badge: 'POST-QUANTUM',
      accent: 'var(--primary)',
      description:
        'Combines classical ECDH (X25519) with CRYSTALS-Kyber (ML-KEM-768) to protect local device sockets against present eavesdropping and future "harvest now, decrypt later" quantum threats.'
    },
    {
      title: 'Authenticated Cipher',
      code: 'AES-256-GCM E2EE',
      icon: Lock,
      badge: 'AEAD ENCRYPTION',
      accent: 'var(--accent)',
      description:
        'End-to-end hardware-accelerated encryption providing both confidentiality and integrity for sensitive HL7 telemetry and DICOM image streams at line speed.'
    },
    {
      title: 'Zero-Trust Architecture',
      code: 'mTLS + Ephemeral Keys',
      icon: ShieldCheck,
      badge: 'NETWORK BOUNDARY',
      accent: 'var(--primary)',
      description:
        'Mutual TLS validation ensures every medical device node explicitly verifies identity before transmitting data across local network switches, eliminating lateral move vectors.'
    },
    {
      title: 'Ultralow Overhead',
      code: 'Sub-2ms Proxy Latency',
      icon: Zap,
      badge: 'PERFORMANCE',
      accent: 'var(--accent)',
      description:
        'Engineered as a lightweight, zero-allocation proxy daemon. Operates seamlessly on existing edge equipment without introducing noticeable jitter to real-time clinical vital streams.'
    }
  ];
</script>

<section id="tech" class="tech-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header">
      <div class="eyebrow">
        <Cpu size={14} />
        CRYPTOGRAPHIC ENGINE
      </div>
      <h2>
        Post-quantum security. <br />
        <span class="text-accent">Zero legacy compromises.</span>
      </h2>
      <p class="section-desc">
        CureSockets pairs battle-tested symmetric ciphers with NIST-standardized quantum-resistant algorithms to safeguard internal hospital sockets for the next several decades.
      </p>
    </div>

    <!-- Tech Grid -->
    <div class="tech-grid">
      {#each specs as item}
        <div class="tech-card">
          <div class="card-header">
            <div class="icon-box" style="color: {item.accent}; border-color: {item.accent}30; background: {item.accent}10;">
              <svelte:component this={item.icon} size={22} />
            </div>
            <span class="tech-badge" style="color: {item.accent};">{item.badge}</span>
          </div>

          <h3>{item.title}</h3>
          <div class="code-pill">
            <Binary size={14} />
            <code>{item.code}</code>
          </div>

          <p>{item.description}</p>
        </div>
      {/each}
    </div>

    <!-- Algorithm Deep Dive Bar -->
    <div class="crypto-bar">
      <div class="crypto-title">
        <strong>CRYSTALS-Kyber</strong>
        <span>NIST FIPS 203 Standardized</span>
      </div>
      <div class="crypto-specs">
        <span>SECURITY CATEGORY 3</span>
        <span>AES-256 EQUIVALENT</span>
        <span>LATTICE-BASED KEM</span>
      </div>
    </div>
  </div>
</section>

<style>
  .tech-section {
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

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-lg);
    margin-bottom: var(--space-10);
  }

  .tech-card {
    padding: var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .tech-card:hover {
    transform: translateY(-3px);
    border-color: rgba(52, 211, 153, 0.4);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-5);
  }

  .icon-box {
    width: 46px;
    height: 46px;
    border-radius: var(--radius-md);
    border: 1px solid;
    display: grid;
    place-items: center;
  }

  .tech-badge {
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 8px;
  }

  .code-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    padding: 4px 10px;
    border-radius: var(--radius-xs);
    background: rgba(10, 15, 29, 0.9);
    border: 1px solid var(--border);
    color: var(--primary);
    font-family: var(--font-family-mono);
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: var(--space-4);
  }

  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.65;
    margin: 0;
  }

  .crypto-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-6) var(--space-8);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: radial-gradient(circle at right, rgba(167, 139, 250, 0.06), transparent 70%), var(--bg-surface);
  }

  .crypto-title {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .crypto-title strong {
    font-size: 1.05rem;
    font-weight: 700;
  }

  .crypto-title span {
    font-family: var(--font-family-mono);
    font-size: 0.68rem;
    color: var(--text-dim);
  }

  .crypto-specs {
    display: flex;
    gap: var(--gap-md);
    font-family: var(--font-family-mono);
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--accent);
  }

  .crypto-specs span {
    padding: 4px 10px;
    border-radius: var(--radius-xs);
    background: rgba(167, 139, 250, 0.1);
    border: 1px solid rgba(167, 139, 250, 0.2);
  }

  @media (max-width: 860px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }

    .crypto-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-4);
    }

    .crypto-specs {
      flex-wrap: wrap;
    }
  }
</style>