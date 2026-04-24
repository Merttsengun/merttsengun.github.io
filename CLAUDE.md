# CLAUDE.md — Portfolio Projesi

## Proje Hakkında

Mert Şengün'ün kişisel portfolio web sitesi. Saf HTML/CSS/JS ile yazılmış, framework bağımlılığı yok.

## Dosya Yapısı

```
index.html   — Tek sayfalık site, tüm bölümler burada
style.css    — Tüm stiller, CSS custom properties ile tema sistemi
script.js    — Dark mode, dil geçişi, animasyonlar, Formspree formu
photo.jpeg   — Profil fotoğrafı
```

## Mimari Kararlar

- **Tek sayfa**: Tüm içerik `index.html` içinde, bölümler arası smooth scroll
- **Tema sistemi**: CSS `--bg`, `--surface`, `--text` vb. custom properties; `html.dark` class'ı ile dark mode
- **Dil sistemi**: `data-i18n`, `data-i18n-placeholder`, `data-i18n-tag` attribute'ları; `script.js` içindeki `translations` objesi ile TR/EN geçişi
- **Animasyonlar**: Intersection Observer API ile `.fade-up` → `.fade-up.visible` geçişi
- **Form**: Formspree (`https://formspree.io/f/mdaybwkj`) — backend yok, FormData ile POST

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

Preview rengi `style.css` içindeki `.preview-ISIM` class'ına gradient olarak eklenir.

## İletişim & Bağlantılar

- Email: mertsengun09@gmail.com
- GitHub: github.com/merttsengun
- LinkedIn: linkedin.com/in/merttsengun
- Formspree form ID: `config.js` içinde saklı — bu dosya `.gitignore`'da, repoya gitmez. Şablon için `config.example.js`'e bak.

## Test

Bağımlılık yok — `index.html` tarayıcıda direkt açılır. VS Code Live Server önerilir.
