<script lang="ts">
  import { Sparkles, Clock, FolderGitIcon, ExternalLink, ShieldCheck } from '@lucide/svelte';

  // Replace this with your actual Google Form URL
  const googleFormUrl:string = "https://docs.google.com/forms/d/e/1FAIpQLSc8LdQriqriVsoRIH6MiDRIyBWV-pdUtWoogd7FaD51AE6CHQ/viewform?usp=publish-editor";
</script>

<section id="coming-soon" class="coming-soon-section">
  <div class="container">
    <div class="glow-backdrop" aria-hidden="true"></div>

    <div class="card-inner">
      <!-- Badge -->
      <div class="status-badge">
        <Clock size={14} class="animate-spin-slow" />
        <span>DEVELOPMENT PHASE • NITDA 2026 SUBMISSION</span>
      </div>

      <!-- Headline -->
      <h2>
        The future of local hospital security <br />
        <span class="text-gradient">is almost ready.</span>
      </h2>

      <p class="description">
        We are actively finalizing the CureSockets Desktop Engine and opening our codebase for public security audits. Join clinical engineers and security researchers tracking our release.
      </p>

      <!-- Direct Google Form Action Button -->
      <div class="cta-wrapper">
        <a 
          href={googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-primary"
        >
          <ExternalLink size={18} />
          <span>Join Early Access List</span>
        </a>
        <span class="cta-note">Takes less than 1 minute via Google Forms</span>
      </div>

      <!-- Feature Teasers -->
      <div class="teaser-row">
        <div class="teaser-item">
          <ShieldCheck size={16} />
          <span>Open Source Core</span>
        </div>
        <div class="teaser-item">
          <Sparkles size={16} />
          <span>Cross-Platform Desktop App</span>
        </div>
        <div class="teaser-item">
          <FolderGitIcon size={16} />
          <span>Public Audit Repository</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .coming-soon-section {
    position: relative;
    padding: var(--space-16) var(--page-padding);
    background: var(--bg-app);
    border-top: 1px solid var(--border);
    overflow: hidden;
  }

  .container {
    position: relative;
    width: min(100%, var(--container-xl));
    margin-inline: auto;
  }

  .glow-backdrop {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 70%;
    background: radial-gradient(
      circle,
      rgba(52, 211, 153, 0.12) 0%,
      rgba(167, 139, 250, 0.05) 50%,
      transparent 70%
    );
    pointer-events: none;
    filter: blur(40px);
    border-radius: var(--radius-sm);
  }

  .card-inner {
    position: relative;
    z-index: 2;
    padding: clamp(2.5rem, 6vw, 4.5rem) var(--space-8);
    border: 1px solid rgba(52, 211, 153, 0.25);
    border-radius: var(--radius-xl);
    background: radial-gradient(circle at top, rgba(18, 25, 42, 0.9), rgba(10, 15, 29, 0.95));
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: var(--radius-lg);
    background: rgba(52, 211, 153, 0.08);
    border: 1px solid rgba(52, 211, 153, 0.3);
    color: var(--primary);
    font-family: var(--font-family-mono);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: var(--space-6);
  }

  h2 {
    font-size: clamp(2.2rem, 4.5vw, 3.8rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0 0 var(--space-4);
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    max-width: 620px;
    color: var(--text-muted);
    font-size: var(--font-lg);
    line-height: 1.65;
    margin: 0 0 var(--space-8);
  }

  /* CTA Button Styling */
  .cta-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: var(--space-10);
  }

  .cta-note {
    font-family: var(--font-family-mono);
    font-size: 0.72rem;
    color: var(--text-dim);
  }

  /* Teaser Row */
  .teaser-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap-lg);
    padding-top: var(--space-6);
    border-top: 1px solid var(--border);
    width: 100%;
    max-width: 680px;
  }

  .teaser-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-muted);
  }

  .teaser-item :global(svg) {
    color: var(--primary);
  }

  @media (max-width: 640px) {
    .teaser-row {
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
    }
  }
</style>