<script lang="ts">
  import {
    Activity,
    ArrowRight,
    Check,
    Cpu,
    Database,
    FileKey2,
    LockKeyhole,
    Network,
    ShieldCheck
  } from "@lucide/svelte";

  const nodes = [
    { label: "Patient Monitor", type: "device", x: "10%", y: "22%", icon: Activity },
    { label: "Imaging System", type: "device", x: "9%", y: "58%", icon: Database },
    { label: "Legacy Device", type: "device", x: "22%", y: "82%", icon: Cpu }
  ];
</script>

<section class="hero" id="problem">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-glow hero-glow-primary" aria-hidden="true"></div>
  <div class="hero-glow hero-glow-accent" aria-hidden="true"></div>

  <div class="hero-inner">
    <div class="hero-copy">
      <div class="eyebrow">
        <span class="status-dot"></span>
        ZERO-TRUST HEALTHCARE INFRASTRUCTURE
      </div>

      <h1>
        Protect the
        <span class="accent-word">connection.</span>
        <br />
        Protect the care.
      </h1>

      <p class="hero-description">
        CureSockets secures the connections behind modern healthcare,
        protecting legacy medical devices and sensitive hospital traffic
        with zero-trust, post-quantum encryption.
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="#architecture">
          Explore Architecture
          <ArrowRight size={18} strokeWidth={2.5} />
        </a>

        <a class="btn btn-ghost" href="#how-it-works">
          See How It Works
        </a>
      </div>

      <div class="trust-row">
        <span><Check size={15} /> PQC READY</span>
        <span><Check size={15} /> ZERO TRUST</span>
        <span><Check size={15} /> LEGACY COMPATIBLE</span>
      </div>
    </div>

    <div class="network-card">
      <div class="card-header">
        <div>
          <span class="technical-label">LOCAL NETWORK</span>
          <strong>Clinical traffic</strong>
        </div>

        <div class="live-state">
          <span class="status-dot"></span>
          PROTECTED
        </div>
      </div>

      <div class="network-stage">
        <div class="network-grid" aria-hidden="true"></div>

        <svg class="connections" viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
          <path class="connection" d="M80 110 C190 110 215 205 315 250" />
          <path class="connection" d="M75 290 C190 290 220 275 315 250" />
          <path class="connection" d="M155 410 C220 410 235 315 315 250" />
          <path class="secure-connection" d="M385 250 C485 250 505 150 620 150" />
          <path class="secure-connection" d="M385 250 C500 250 515 350 620 350" />

          <circle class="packet packet-one" r="4">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M80 110 C190 110 215 205 315 250" />
          </circle>
          <circle class="packet packet-two" r="4">
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M75 290 C190 290 220 275 315 250" />
          </circle>
          <circle class="packet packet-three" r="4">
            <animateMotion dur="4.1s" repeatCount="indefinite" path="M155 410 C220 410 235 315 315 250" />
          </circle>
          <circle class="secure-packet" r="4">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M385 250 C485 250 505 150 620 150" />
          </circle>
          <circle class="secure-packet" r="4">
            <animateMotion dur="3s" repeatCount="indefinite" path="M385 250 C500 250 515 350 620 350" />
          </circle>
        </svg>

        {#each nodes as node,i(i)}
          <div class="device-node" style={`left:${node.x};top:${node.y}`}>
            <node.icon size={19} strokeWidth={2} />
            <span>{node.label}</span>
          </div>
        {/each}

        <div class="cure-node">
          <div class="cure-icon">
            <ShieldCheck size={30} strokeWidth={2.2} />
          </div>
          <strong>CureSockets</strong>
          <span>SECURITY PROXY</span>
        </div>

        <div class="secure-node secure-node-top">
          <LockKeyhole size={19} />
          <div>
            <strong>Encrypted</strong>
            <span>PQC tunnel</span>
          </div>
        </div>

        <div class="secure-node secure-node-bottom">
          <FileKey2 size={19} />
          <div>
            <strong>Protected</strong>
            <span>Clinical data</span>
          </div>
        </div>

        <div class="network-label network-label-left">
          <Network size={14} />
          EXISTING INFRASTRUCTURE
        </div>

        <div class="network-label network-label-right">
          <LockKeyhole size={14} />
          ZERO-TRUST BOUNDARY
        </div>
      </div>

      <div class="card-footer">
        <span>HL7</span>
        <span>DICOM</span>
        <span>LEGACY DEVICES</span>
        <span class="footer-live"><i></i> TRAFFIC SECURED</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: calc(100dvh - var(--header-height));
    display: flex;
    align-items: center;
    overflow: hidden;
    isolation: isolate;
    padding: var(--space-16) var(--page-padding);
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    width: min(100%, var(--container-xl));
    margin-inline: auto;
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(500px, 1.12fr);
    align-items: center;
    gap: clamp(2.5rem, 6vw, 6rem);
  }

  .hero-copy {
    max-width: 650px;
  }

  .eyebrow,
  .technical-label,
  .live-state,
  .trust-row,
  .card-footer,
  .network-label {
    font-family: var(--font-family-mono);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-sm);
    color: var(--primary);
    font-size: var(--font-xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: var(--space-5);
  }

  .status-dot,
  .footer-live i {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
    animation: heartbeat 2.4s ease-in-out infinite;
  }

  h1 {
    margin: 0;
    max-width: 760px;
    font-size: clamp(3.2rem, 5.7vw, 5.7rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
    font-weight: 800;
  }

  .accent-word {
    color: var(--primary);
    text-shadow: 0 0 35px rgba(52, 211, 153, 0.16);
  }

  .hero-description {
    max-width: 610px;
    margin: var(--space-8) 0 0;
    color: var(--text-muted);
    font-size: clamp(1rem, 1.4vw, var(--font-lg));
    line-height: 1.75;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-md);
    margin-top: var(--space-8);
  }

  .trust-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-lg);
    margin-top: var(--space-10);
    color: var(--text-dim);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .trust-row span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .trust-row svg {
    color: var(--primary);
  }

  .network-card {
    position: relative;
    min-height: 580px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    background:
      radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.045), transparent 38%),
      var(--bg-surface);
    box-shadow: var(--shadow-lg);
  }

  .network-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
  }

  .card-header,
  .card-footer {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-6) var(--card-padding);
  }

  .card-header {
    border-bottom: 1px solid var(--border);
  }

  .card-header > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .technical-label {
    color: var(--text-dim);
    font-size: 0.65rem;
    letter-spacing: 0.08em;
  }

  .card-header strong {
    font-size: var(--font-base);
  }

  .live-state {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--primary);
    font-size: 0.68rem;
    font-weight: 700;
  }

  .network-stage {
    position: relative;
    height: 450px;
  }

  .network-grid {
    position: absolute;
    inset: 0;
    opacity: 0.5;
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
  }

  .connections {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .connection,
  .secure-connection {
    fill: none;
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
  }

  .connection {
    stroke: rgba(148, 163, 184, 0.18);
    stroke-dasharray: 5 8;
  }

  .secure-connection {
    stroke: rgba(167, 139, 250, 0.55);
    stroke-width: 2;
    filter: drop-shadow(0 0 5px rgba(167, 139, 250, 0.25));
  }

  .packet {
    fill: var(--text-dim);
  }

  .secure-packet {
    fill: var(--accent);
    filter: drop-shadow(0 0 6px rgba(167, 139, 250, 0.8));
  }

  .device-node,
  .secure-node,
  .cure-node {
    position: absolute;
    z-index: 3;
  }

  .device-node {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(10, 15, 29, 0.88);
    color: var(--text-muted);
    box-shadow: var(--shadow-sm);
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    white-space: nowrap;
    transform: translate(-50%, -50%);
  }

  .device-node svg {
    color: var(--secondary);
  }

  .cure-node {
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    min-width: 150px;
  }

  .cure-icon {
    display: grid;
    place-items: center;
    width: 78px;
    height: 78px;
    border: 1px solid rgba(52, 211, 153, 0.45);
    border-radius: 28%;
    background: rgba(52, 211, 153, 0.08);
    color: var(--primary);
    box-shadow:
      0 0 0 10px rgba(52, 211, 153, 0.025),
      0 0 35px rgba(52, 211, 153, 0.18);
    animation: security-pulse 3s ease-in-out infinite;
  }

  .cure-node strong {
    margin-top: 12px;
    font-size: var(--font-base);
  }

  .cure-node > span {
    margin-top: 3px;
    color: var(--primary);
    font-family: var(--font-family-mono);
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .secure-node {
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 135px;
    padding: 10px 12px;
    border: 1px solid rgba(167, 139, 250, 0.25);
    border-radius: var(--radius-md);
    background: rgba(18, 25, 42, 0.9);
    box-shadow: var(--shadow-sm);
    color: var(--accent);
  }

  .secure-node div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .secure-node strong {
    color: var(--text-main);
    font-size: 0.72rem;
  }

  .secure-node span {
    color: var(--text-dim);
    font-family: var(--font-family-mono);
    font-size: 0.58rem;
  }

  .secure-node-top {
    right: 5%;
    top: 18%;
  }

  .secure-node-bottom {
    right: 5%;
    top: 64%;
  }

  .network-label {
    position: absolute;
    bottom: 13px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-dim);
    font-size: 0.57rem;
    letter-spacing: 0.04em;
  }

  .network-label-left {
    left: 18px;
  }

  .network-label-right {
    right: 18px;
    color: rgba(167, 139, 250, 0.7);
  }

  .card-footer {
    gap: var(--gap-md);
    justify-content: flex-start;
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .card-footer > span:not(.footer-live)::after {
    content: "•";
    margin-left: var(--gap-md);
    color: var(--border-focus);
  }

  .footer-live {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--primary);
  }

  @keyframes security-pulse {
    0%, 100% {
      box-shadow:
        0 0 0 10px rgba(52, 211, 153, 0.025),
        0 0 35px rgba(52, 211, 153, 0.18);
    }
    50% {
      box-shadow:
        0 0 0 18px rgba(52, 211, 153, 0.01),
        0 0 55px rgba(52, 211, 153, 0.28);
    }
  }

  @media (max-width: 1050px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: var(--space-12);
    }

    .hero-copy {
      max-width: 760px;
      margin-inline: auto;
      text-align: center;
    }

    .eyebrow,
    .hero-actions,
    .trust-row {
      justify-content: center;
    }

    .hero-description {
      margin-inline: auto;
    }

    .network-card {
      width: min(100%, 760px);
      margin-inline: auto;
    }
  }

  @media (max-width: 768px) {
    .hero {
      min-height: auto;
      padding: var(--space-12) var(--page-padding-mobile);
    }

    h1 {
      font-size: clamp(2.8rem, 12vw, 4rem);
    }

    .hero-description {
      line-height: 1.65;
    }

    .network-card {
      min-height: 500px;
    }

    .network-stage {
      height: 370px;
    }

    .device-node {
      font-size: 0.55rem;
      padding: 8px 9px;
    }

    .device-node span {
      display: none;
    }

    .secure-node {
      min-width: 115px;
      padding: 8px 9px;
    }

    .secure-node-top {
      right: 3%;
      top: 15%;
    }

    .secure-node-bottom {
      right: 3%;
      top: 68%;
    }

    .network-label {
      display: none;
    }

    .card-footer {
      flex-wrap: wrap;
      padding: var(--space-5);
    }

    .footer-live {
      width: 100%;
      margin-left: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .status-dot,
    .footer-live i,
    .cure-icon {
      animation: none;
    }
  }
</style>