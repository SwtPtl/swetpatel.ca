<?php
$skills = [
  'Languages' => ['Python', 'C', 'C++', 'Haskell', 'TypeScript', 'PHP', 'Bash', 'Prolog'],
  'Systems'   => ['Linux', 'Nginx', 'GCP', 'Docker', 'Git', 'KeePassXC', 'GPGME'],
  'AI / ML'   => ['Gemini API', 'Claude API', 'n8n', 'OpenRouter', 'RAG', 'LangChain'],
  'Finance'   => ['IBKR', 'Pine Script', 'Black-Scholes', 'ib_insync', 'Bloomberg Terminal'],
];
?>
<section id="skills">
  <div class="container">
    <p class="section-label">Toolkit</p>
    <h2>Skills</h2>
    <div class="skills-groups">
      <?php foreach ($skills as $cat => $tags): ?>
      <div>
        <p class="skills-category"><?= htmlspecialchars($cat) ?></p>
        <div class="skills-tags">
          <?php foreach ($tags as $tag): ?>
          <span class="skill-tag"><?= htmlspecialchars($tag) ?></span>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
