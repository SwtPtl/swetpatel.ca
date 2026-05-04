<?php
$projects = [
  [
    'name'  => 'OpenApply — AI Job Application Suite',
    'desc'  => 'Chrome extension scrapes job postings and routes them to a FastAPI backend. RAG pipeline tailors resume content via Claude/Gemini/DeepSeek, compiles LaTeX PDFs, and tracks applications — all on-device.',
    'tags'  => ['Python', 'TypeScript', 'FastAPI', 'RAG', 'LLM APIs', 'Docker', 'SQLite'],
    'github'=> 'https://github.com/SwtPtl',
  ],
  [
    'name'  => 'swetpatel.ca — Dual-Stack Portfolio',
    'desc'  => 'The same portfolio built twice — React/Vite/Tailwind and zero-dependency PHP 8.3 — deployed side-by-side on one VM. Live stack toggle, Nginx reverse proxy, GitHub Actions CI/CD, strict security headers.',
    'tags'  => ['React', 'TypeScript', 'PHP 8.3', 'Nginx', 'GitHub Actions'],
    'github'=> 'https://github.com/SwtPtl/swetpatel.ca',
  ],
  [
    'name'  => 'Real-Time Collaborative Curling Game',
    'desc'  => '30+ concurrent connections at sub-150ms latency with a 60Hz server-side tick rate. Event batching and delta compression keep client state in sync. HTML5 Canvas physics and collision detection. 85% code coverage.',
    'tags'  => ['Node.js', 'Socket.IO', 'HTML5 Canvas', 'Docker', 'Oracle Cloud'],
    'github'=> 'https://github.com/SwtPtl',
  ],
  [
    'name'  => 'HinLIBS — Library Management System',
    'desc'  => 'Desktop library management app in C++/Qt. Layered DAO architecture, 6-table SQLite schema, RBAC for 3 user types, fine calculation, and loan validation across 2,400+ lines. 25+ unit tests.',
    'tags'  => ['C++', 'Qt', 'SQLite', 'Git'],
    'github'=> 'https://github.com/SwtPtl',
  ],
  [
    'name'  => 'Health & Fitness Club Management',
    'desc'  => '12-table PostgreSQL schema with 18 foreign key relationships covering scheduling, billing, and trainer allocation. 18 RESTful endpoints with RBAC middleware. Query optimization cut execution time by 75%. 82% coverage.',
    'tags'  => ['Python', 'PostgreSQL', 'SQLAlchemy', 'REST APIs'],
    'github'=> 'https://github.com/SwtPtl',
  ],
];
?>
<section id="projects">
  <div class="container">
    <p class="section-label">Work</p>
    <h2>Projects</h2>
    <div class="projects-grid">
      <?php foreach ($projects as $p): ?>
      <article class="project-card">
        <h3 class="project-name"><?= htmlspecialchars($p['name']) ?></h3>
        <p class="project-desc"><?= htmlspecialchars($p['desc']) ?></p>
        <div class="project-tags">
          <?php foreach ($p['tags'] as $tag): ?>
          <span class="tag"><?= htmlspecialchars($tag) ?></span>
          <?php endforeach; ?>
        </div>
        <div class="project-footer">
          <a class="project-gh" href="<?= htmlspecialchars($p['github']) ?>" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub ↗
          </a>
        </div>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
