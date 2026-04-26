# swetpatel.ca — Portfolio

Personal portfolio for Swet Patel — CS Honours @ Carleton University, Ottawa. Co-op seeking summer 2026.

Two versions of the same portfolio deployed to the same GCP e2-micro VM:

| Version | URL | Stack | Served by |
|---------|-----|-------|-----------|
| React | https://swetpatel.ca | React 18 + TypeScript + Vite + Tailwind + Framer Motion | Nginx static |
| PHP | https://php.swetpatel.ca | PHP 8.3, zero dependencies | PHP-FPM + Nginx |

---

## Repo structure

```
/
├── react/              React project (compiled to react/dist/)
│   ├── src/
│   │   ├── components/ Nav, Hero, Projects, Skills, Experience, Education, Contact, Toggle, Cursor
│   │   ├── App.tsx
│   │   └── index.css
│   ├── public/         logo.svg, favicon.svg (copied from shared at build time)
│   └── dist/           → served at swetpatel.ca
│
├── php/                Pure PHP 8.3, zero composer
│   ├── index.php
│   ├── assets/         style.css + script.js (vanilla, <50 lines)
│   ├── components/     nav, hero, projects, skills, experience, education, contact, toggle
│   └── shared →        symlink to /var/www/shared/assets on the VM
│
├── shared/assets/      logo.svg + favicon.svg (source of truth)
├── nginx.conf          Server config for both domains
└── .github/workflows/  deploy.yml (CI/CD)
```

---

## Local development

### React

```bash
cd react
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to react/dist/
```

### PHP

Requires PHP 8.3:

```bash
cd php
php -S localhost:8080
# open http://localhost:8080
```

---

## Deploy — first-time setup on GCP VM

SSH into the VM, then:

```bash
# Install dependencies
sudo apt update && sudo apt install -y nginx php8.3-fpm certbot python3-certbot-nginx

# Create directories
sudo mkdir -p /var/www/react/dist /var/www/php/assets /var/www/php/components /var/www/shared/assets

# Install Nginx config
sudo cp nginx.conf /etc/nginx/sites-available/swetpatel.ca
sudo ln -s /etc/nginx/sites-available/swetpatel.ca /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# TLS — covers all three (sub)domains in one cert via SAN
sudo certbot --nginx \
  -d swetpatel.ca \
  -d www.swetpatel.ca \
  -d php.swetpatel.ca

# Allow nginx reload without password (required by CI)
echo "$USER ALL=(ALL) NOPASSWD: /usr/bin/nginx, /usr/bin/systemctl reload nginx" \
  | sudo tee /etc/sudoers.d/nginx-reload
```

---

## GitHub Actions secrets

Add these in **Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `GCP_HOST` | VM external IP (e.g. `34.x.x.x`) |
| `GCP_USER` | SSH username on the VM |
| `GCP_SSH_KEY` | Contents of the **private** deploy key |

Generate a deploy key pair (run locally):

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/swet_deploy_key -N ""
# Add the PUBLIC key to the VM:
ssh-copy-id -i ~/.ssh/swet_deploy_key.pub USER@GCP_HOST
# Paste the PRIVATE key into GitHub secret GCP_SSH_KEY
```

---

## Favicon build

Requires ImageMagick:

```bash
bash shared/assets/build-favicon.sh
# → shared/assets/favicon.ico + react/public/favicon.ico
```

---

## Design tokens

| Token | Value | Used for |
|-------|-------|----------|
| `--bg` | `#0a0a0a` | Page background |
| `--accent` (React) | `#f59e0b` | Amber — React side |
| `--accent` (PHP) | `#3b82f6` | Blue — `body.mode-php` override |
| Display | DM Serif Display | Headings, hero name |
| Body | DM Sans | Body text |
| Mono | JetBrains Mono | Tags, clock, nav labels |
