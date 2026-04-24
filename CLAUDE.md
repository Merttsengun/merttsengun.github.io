# CLAUDE.md — Portfolio Projesi

## Proje Hakkında

Mert Şengün'ün kişisel portfolio web sitesi. Saf HTML/CSS/JS ile yazılmış, framework bağımlılığı yok.
Canlı adres: **https://merttsengun.github.io**

## Dosya Yapısı

```
index.html                        — Tek sayfalık site, tüm bölümler burada
style.css                         — Tüm stiller, CSS custom properties ile tema sistemi
script.js                         — Dark mode, dil geçişi, animasyonlar, Formspree formu
config.js                         — Formspree URL (repoda placeholder, local'de gerçek değer)
photo.jpeg                        — Profil fotoğrafı
.gitignore                        — (boş — photo ve config artık repoda)
.github/workflows/deploy.yml      — GitHub Actions deploy workflow'u
README.md                         — Proje açıklaması
CLAUDE.md                         — Bu dosya
```

## Mimari Kararlar

- **Tek sayfa**: Tüm içerik `index.html` içinde, bölümler arası smooth scroll
- **Tema sistemi**: CSS `--bg`, `--surface`, `--text` vb. custom properties; `html.dark` class'ı ile dark mode (varsayılan: dark)
- **Dil sistemi**: `data-i18n`, `data-i18n-placeholder`, `data-i18n-tag` attribute'ları; `script.js` içindeki `translations` objesi ile TR/EN geçişi
- **Animasyonlar**: Intersection Observer API ile `.fade-up` → `.fade-up.visible` geçişi
- **Form**: Formspree — backend yok, FormData ile POST. URL `config.js`'den okunur (`CONFIG.FORMSPREE_URL`)

## Gizli Bilgi Yönetimi (config.js)

`config.js` repoda **placeholder** değerle duruyor (`BURAYA_FORM_ID`).
Gerçek Formspree form ID'si GitHub Secret olarak saklanıyor (`FORMSPREE_URL`).
GitHub Actions deploy sırasında `sed` ile placeholder → gerçek değer olarak değiştiriliyor.
Local'de `git update-index --skip-worktree config.js` ile gerçek değer korunuyor, git görmüyor.

## Deploy Akışı

```
git push → GitHub Actions tetiklenir
         → config.js'e secret enjekte edilir
         → GitHub Pages'e deploy edilir
         → https://merttsengun.github.io güncellenir
```

## Yeni Bölüm veya Metin Eklerken

1. HTML elementine `data-i18n="anahtar"` ekle
2. `script.js` içindeki `translations.tr` ve `translations.en` objelerine aynı anahtarı ekle
3. Stil için mevcut CSS class'larını kullan (`section-label`, `section-title`, `section-desc`, `fade-up` vb.)

## Yeni Proje Kartı Eklerken

```html
<div class="project-card fade-up">
  <div class="project-preview preview-ISIM">...</div>
  <h3>Proje Adı</h3>
  <p data-i18n="projects.ISIM.desc">Açıklama</p>
  <div class="project-tags">
    <span class="project-tag">Teknoloji</span>
  </div>
</div>
```

`style.css`'e `.preview-ISIM { background: linear-gradient(...); }` ekle.
`translations.tr` ve `translations.en`'e `projects.ISIM.desc` anahtarını ekle.

## İletişim & Bağlantılar

- Email: mertsengun09@gmail.com
- GitHub: github.com/merttsengun
- LinkedIn: linkedin.com/in/merttsengun
- Formspree form ID: `config.js` içinde (local) ve GitHub Secret `FORMSPREE_URL` olarak saklanıyor

## Test

Bağımlılık yok — `index.html` tarayıcıda direkt açılır. VS Code Live Server önerilir.
Canlı test için `git push` yeterli, GitHub Actions otomatik deploy eder (~20 saniye).
