<?php
date_default_timezone_set('America/Toronto');
$clock = date('H:i:s');
?>
<section id="hero">
  <div class="container">
    <p class="hero-eyebrow">
      Ottawa &middot; <time id="clock"><?= htmlspecialchars($clock) ?> EST</time>
    </p>

    <h1 class="hero-name">Swet<br>Patel.</h1>

    <p class="hero-sub">
      CS Honours &middot; Carleton University &middot; Ottawa<br>
      Building thoughtful software. Seeking co-op for
      <strong style="color:var(--text)">summer 2026</strong>.
    </p>

    <div class="hero-ctas">
      <a class="btn btn-primary" href="#projects">See my work</a>
      <a class="btn btn-ghost"   href="#contact">Get in touch</a>
    </div>

    <p class="hero-scroll">scroll</p>
  </div>
</section>
