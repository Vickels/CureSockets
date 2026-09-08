<script lang="ts">
  import { ShieldAlert, Lock, AlertTriangle, ChevronRight, Activity, ArrowUpRight } from '@lucide/svelte';

  // 3-layer narrative data
  const stats = [
    {
      title: "The Unseen Vulnerability in Hospital Wards",
      desc: "Over 60% of bedside medical devices stream unencrypted patient data across local hospital networks. Cyberattacks hit healthcare harder every year, threatening the quiet systems nurses and doctors rely on every second.",
      img: "/Img/hospital_switch_port+(1).webp",
      alt: "Hospital network switch port",
      badge: "THE THREAT SURFACE"
    },
    {
      title: "When Network Breaches Stop Patient Care",
      desc: "When ransomware breaches reach internal LANs, vital monitors lock up and ambulances are turned away. These attacks are not just about stolen data, they interrupt real care when patients need it most.",
      img: "/Img/hospital_night_monitor+(1).webp",
      alt: "Night monitor at a hospital",
      badge: "REAL-WORLD IMPACT"
    },
    {
      title: "Protecting Every Connection with CureSockets",
      desc: "CureSockets wraps legacy medical equipment in zero-trust, post-quantum encryption right at the local socket layer. We keep hospital networks secure and quiet, so clinical care never stops.",
      img: "/Img/og-image.webp",
      alt: "The staff now use secured devices at the hospital",
      badge: "THE CURE"
    }
  ];

  let activeIndex = $state(0);
</script>

<section id="security" class="security-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header">
      <div class="eyebrow">
        <ShieldAlert size={14} />
        SECURITY ANALYSIS & CASE STUDY
      </div>
      <h2>
        Why LAN security matters. <br />
        <span class="text-accent">Lessons from real-world disruptions.</span>
      </h2>
      <p class="section-desc">
        Internal hospital networks are built for speed and care, but legacy protocols often leave them open once a perimeter is breached. Examining real incidents reinforces why socket-level encryption is essential.
      </p>
    </div>

    <!-- Real-World Objective Incident Banner -->
    <div class="case-banner">
      <div class="case-tag">
        <AlertTriangle size={15} />
        OBJECTIVE CASE STUDY
      </div>
      <div class="case-body">
        <h3>The 2024 Change Healthcare Incident</h3>
        <p>
          In February 2024, a major clearinghouse cyberattack stalled billing, prescription processing, and patient intake systems across thousands of US hospitals for weeks. The breach demonstrated how lateral movement through trusted internal connections can halt critical clinical workflows across entire networks.
        </p>
      </div>
      <div class="case-stat">
        <strong>$2.2B+</strong>
        <span>Estimated Healthcare System Impact</span>
      </div>
    </div>

    <!-- Interactive 3-Layer Narrative Arc -->
    <div class="narrative-grid">
      <!-- Left Controls / Tabs -->
      <div class="tabs-column">
        {#each stats as step, index}
          <button
            class="tab-card {activeIndex === index ? 'active' : ''}"
            onclick={() => (activeIndex = index)}
            type="button"
          >
            <div class="tab-header">
              <span class="tab-badge">{step.badge}</span>
              <span class="step-num">0{index + 1}</span>
            </div>
            <h4>{step.title}</h4>
            <div class="tab-footer">
              <span>Explore Layer</span>
              <ChevronRight size={16} />
            </div>
          </button>
        {/each}
      </div>

      <!-- Right Interactive Preview Display -->
      <div class="display-column">
        <div class="display-card">
          <div class="image-wrapper">
            <img src={stats[activeIndex].img} alt={stats[activeIndex].alt} loading="lazy" />
            <div class="image-overlay"></div>
            <span class="live-pill">
              <Activity size={13} />
              LAYER 0{activeIndex + 1} ACTIVE
            </span>
          </div>

          <div class="display-content">
            <h3>{stats[activeIndex].title}</h3>
            <p>{stats[activeIndex].desc}</p>

            <div class="action-row">
              <a href="#how-it-works" class="btn-link">
                <span>See technical mitigation</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .security-section {
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
    margin-bottom: var(--space-10);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: var(--font-xs);
    font-weight: 700;
    color: var(--accent);
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

  /* Incident Banner */
  .case-banner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: var(--space-6);
    padding: var(--space-6) var(--space-8);
    border: 1px solid rgba(167, 139, 250, 0.3);
    border-radius: var(--radius-lg);
    background: radial-gradient(circle at left, rgba(167, 139, 250, 0.08), transparent 60%), var(--bg-surface);
    margin-bottom: var(--space-12);
  }

  .case-tag {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-mono);
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.06em;
  }

  .case-body h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 4px;
  }

  .case-body p {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }

  .case-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: var(--space-6);
    border-left: 1px solid var(--border);
  }

  .case-stat strong {
    font-family: var(--font-family-mono);
    font-size: 1.8rem;
    color: var(--accent);
  }

  .case-stat span {
    font-size: 0.65rem;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: right;
  }

  /* Narrative Grid */
  .narrative-grid {
    display: grid;
    grid-template-columns: minmax(300px, 0.8fr) minmax(400px, 1.2fr);
    gap: var(--gap-lg);
    align-items: start;
  }

  .tabs-column {
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
  }

  .tab-card {
    text-align: left;
    padding: var(--space-6);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .tab-card:hover {
    border-color: rgba(52, 211, 153, 0.3);
  }

  .tab-card.active {
    border-color: var(--primary);
    background: radial-gradient(circle at left, rgba(52, 211, 153, 0.1), transparent 70%), var(--bg-surface);
    box-shadow: 0 4px 20px -4px rgba(52, 211, 153, 0.15);
  }

  .tab-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .tab-badge {
    font-family: var(--font-family-mono);
    font-size: 0.62rem;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.08em;
  }

  .step-num {
    font-family: var(--font-family-mono);
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  .tab-card h4 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 12px;
    color: var(--text-main);
  }

  .tab-footer {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--font-family-mono);
    font-size: 0.72rem;
    color: var(--text-dim);
  }

  .tab-card.active .tab-footer {
    color: var(--primary);
  }

  /* Display Column */
  .display-card {
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    overflow: hidden;
    box-shadow: var(--shadow-md);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, var(--bg-surface) 100%);
  }

  .live-pill {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: var(--radius-xs);
    background: rgba(10, 15, 29, 0.85);
    border: 1px solid var(--primary);
    color: var(--primary);
    font-family: var(--font-family-mono);
    font-size: 0.65rem;
    font-weight: 700;
    backdrop-filter: blur(4px);
  }

  .display-content {
    padding: var(--space-8);
  }

  .display-content h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-4);
  }

  .display-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0 0 var(--space-6);
  }

  .btn-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-mono);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
  }

  .btn-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    .case-banner {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }

    .case-stat {
      align-items: flex-start;
      padding-left: 0;
      padding-top: var(--space-4);
      border-left: none;
      border-top: 1px solid var(--border);
    }

    .narrative-grid {
      grid-template-columns: 1fr;
    }
  }
</style>