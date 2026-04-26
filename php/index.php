<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Swet Patel — CS Honours student at Carleton University, Ottawa. Software engineer seeking co-op." />
  <title>Swet Patel</title>

  <link rel="icon" type="image/svg+xml" href="/shared/favicon.svg" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />

  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body class="mode-php">

<?php require_once __DIR__ . '/components/nav.php'; ?>

<main>
  <?php require_once __DIR__ . '/components/hero.php'; ?>
  <?php require_once __DIR__ . '/components/projects.php'; ?>
  <?php require_once __DIR__ . '/components/skills.php'; ?>
  <?php require_once __DIR__ . '/components/experience.php'; ?>
  <?php require_once __DIR__ . '/components/education.php'; ?>
  <?php require_once __DIR__ . '/components/contact.php'; ?>
</main>

<?php require_once __DIR__ . '/components/toggle.php'; ?>

<script src="/assets/script.js" defer></script>
</body>
</html>
