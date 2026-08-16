# CLAUDE.md — Portfolio Projesi

## Proje Hakkında

Mert Şengün'ün kişisel portfolio web sitesi. Saf HTML/CSS/JS ile yazılmış, framework bağımlılığı yok.
Canlı adres: **https://mertsengun.com** — Mert'in kendi VPS'inde (Coolify ile) barındırılıyor, nginx (Dockerfile) üzerinden statik olarak sunuluyor. Bu VPS tek bir projeye özel değil, birden fazla proje barındırıyor (bkz. `sunucu-kontrol` skill'i).

## Dosya Yapısı

```
index.html                        — Tek sayfalık site, tüm bölümler burada
style.css                         — Tüm stiller, CSS custom properties ile tema sistemi
script.js                         — Dark mode, dil geçişi, animasyonlar, Formspree formu
config.js                         — Formspree URL (repoda placeholder, build sırasında enjekte edilir)
photo.jpeg                        — Profil fotoğrafı
Dockerfile                        — nginx:alpine tabanlı build, config.js enjeksiyonu ve nginx.conf kopyalama
nginx.conf                        — www → non-www 301 yönlendirmesi + statik dosya sunumu
.gitignore                        — (boş — photo ve config artık repoda)
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

`config.js` repoda **placeholder** değerle duruyor (`BURAYA_FORM_ID`, tam hâli `https://formspree.io/f/BURAYA_FORM_ID` — yani sadece form ID'si placeholder, URL'in geri kalanı sabit).
Gerçek Formspree form ID'si Coolify'da **build-time environment variable** olarak saklanıyor (`FORMSPREE_URL`, değeri sadece ID — örn. `mdaybwkj`, tam URL değil).
Docker build sırasında (`Dockerfile` içindeki `ARG FORMSPREE_URL` + `sed`) placeholder → gerçek ID olarak değiştiriliyor.
Local'de `git update-index --skip-worktree config.js` ile gerçek değer korunuyor, git görmüyor.

## Deploy Akışı

Site Mert'in VPS'inde Coolify (self-hosted PaaS) ile barındırılıyor. Deploy tamamen `git push` ile otomatik:

```
git push → Coolify webhook tetiklenir (GitHub App entegrasyonu üzerinden)
         → Dockerfile ile image build edilir (nginx:alpine + config.js enjeksiyonu)
         → yeni container ayağa kalkar, Traefik (Coolify'ın proxy'si) trafiği ona yönlendirir
         → https://mertsengun.com ve https://www.mertsengun.com güncellenir
```

`www.mertsengun.com` → `mertsengun.com` yönlendirmesi **nginx seviyesinde** (`nginx.conf`) yapılıyor, Coolify/Traefik'in kendi "redirect www" özelliği kullanılmıyor (o özellikte bilinen bir bug var — regex replacement'ı bozuk geliyor ve 502'ye sebep oluyor).

Coolify panelinde resource: proje adı `mertsengun`, uygulama adı `merttsengun.github.io:master-...`. Build pack: **Dockerfile**, port: **80**.

DNS Cloudflare üzerinden yönetiliyor (kayıt Veridyen'de duruyor, nameserver'lar Cloudflare'e yönlendirilmiş). Tüm kayıtlar "DNS only" (proxy kapalı) — Coolify kendi Let's Encrypt sertifikasını çıkarıyor.

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
Canlı test için `git push` yeterli, Coolify webhook'u yakalayıp otomatik build+deploy eder (~30-60 saniye).
