<script lang="ts">
  import { Shield, GitBranch } from '@lucide/svelte';

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Security', href: '#security' },
    { label: 'Technology', href: '#tech' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' }
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-main">
      <!-- Brand & Mission Column -->
      <div class="brand-col">
        <a href="#hero" class="logo">
          <Shield size={22} class="logo-icon" />
          <span class="logo-text">CureSockets</span>
        </a>
        <p class="brand-desc">
          Zero-trust local socket proxy protecting healthcare networks with hybrid post-quantum encryption. Designed for legacy hospital wards.
        </p>
        <div class="meta-tag">
          <span class="pulse-dot"></span>
          <span>NiTDA Hackathon 2026 Submission</span>
        </div>
      </div>

      <!-- Quick Navigation -->
      <div class="links-col">
        <span class="col-title">Navigation</span>
        <ul class="link-list">
          {#each navLinks as link,i(i)}
            <li>
              <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
              <a href={link.href}>{link.label}</a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Project & Academic Attribution -->
      <div class="info-col">
        <span class="col-title">Project Info</span>
        <div class="info-item">
          <strong>Built By</strong>
          <span>4 Cybersecurity Students</span>
          <small>Federal University of Technology Minna</small>
        </div>
        <div class="info-item">
          <strong>Location</strong>
          <span>Minna, Niger State, Nigeria</span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="copyright">
        © {currentYear} CureSockets. Built for resilient clinical care.
      </div>

      <div class="footer-actions">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="github-link"
          aria-label="GitHub Repository"
        >
          <GitBranch size={18} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #080c16;
    border-top: 1px solid var(--border);
    padding: var(--space-12) var(--page-padding) var(--space-8);
    color: var(--text-muted);
  }

  .container {
    width: min(100%, var(--container-xl));
    margin-inline: auto;
  }

  .footer-main {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: var(--gap-lg);
    padding-bottom: var(--space-10);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  /* Brand Column */
  .brand-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    margin-bottom: var(--space-4);
  }

  :global(.logo-icon) {
    color: var(--primary);
  }

  .logo-text {
    font-size: 1.25rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .brand-desc {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #8b95a5;
    margin: 0 0 var(--space-5);
    max-width: 380px;
  }

  .meta-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 10px;
    border-radius: var(--radius-xs);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-family: var(--font-family-mono);
    font-size: 0.7rem;
    color: #94a3b8;
  }

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 8px var(--primary);
  }

  /* Columns */
  .col-title {
    display: block;
    font-family: var(--font-family-mono);
    font-size: 0.72rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--space-4);
  }

  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .link-list a {
    color: #8b95a5;
    text-decoration: none;
    font-size: 0.88rem;
    transition: color 0.2s ease;
  }

  .link-list a:hover {
    color: var(--primary);
  }

  /* Info Column */
  .info-col {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .info-item {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
  }

  .info-item strong {
    color: #cbd5e1;
    font-size: 0.78rem;
    font-weight: 600;
  }

  .info-item span {
    color: #8b95a5;
  }

  .info-item small {
    color: #64748b;
    font-size: 0.75rem;
  }

  /* Bottom Bar */
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-6);
    font-size: 0.82rem;
    color: #64748b;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #8b95a5;
    text-decoration: none;
    font-family: var(--font-family-mono);
    font-size: 0.78rem;
    padding: 6px 12px;
    border-radius: var(--radius-xs);
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.02);
    transition: all 0.2s ease;
  }

  .github-link:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 860px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: var(--gap-md);
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-4);
    }
  }
</style>