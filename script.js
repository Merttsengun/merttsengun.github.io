// ── Translations ──
const translations = {
  tr: {
    'nav.about': 'Hakkımda', 'nav.skills': 'Beceriler', 'nav.projects': 'Projeler',
    'nav.services': 'Hizmetler', 'nav.contact': 'İletişim',
    'hero.greeting': 'Merhaba, ben', 'hero.role': 'Web · Mobil · Yapay Zeka',
    'hero.desc': 'Kullanıcı dostu web uygulamaları, Android uygulamaları ve yapay zeka destekli projeler geliştiriyorum. Fikirlerinizi yazılıma dönüştürmek için buradayım.',
    'hero.btn.projects': 'Projelerimi Gör', 'hero.btn.contact': 'İletişime Geç',
    'hero.badge': 'Bilgisayar Mühendisi',
    'hero.stat.projects': 'Proje', 'hero.stat.web': 'Geliştirme', 'hero.stat.mobile': 'Android', 'hero.stat.ai': 'Yapay Zeka',
    'about.label': 'Hakkımda', 'about.title': 'Kim Olduğumu Biraz Anlatayım',
    'about.p1': 'Muğla Sıtkı Koçman Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim. Web geliştirme, mobil uygulama ve yapay zeka alanlarında projeler üretmeyi seviyorum.',
    'about.p2': 'Eğitimim boyunca hem akademik hem de kişisel projelerle geniş bir teknik altyapı oluşturdum. Algoritmaları görselleştiren bir platform geliştirmekten Q-Learning ile oyun oynayan bir yapay zeka yazmaya kadar pek çok farklı problem üzerinde çalıştım.',
    'about.p3': 'Bir projeniz varsa ya da teknik danışmanlık istiyorsanız, birlikte çalışmaktan memnuniyet duyarım.',
    'about.card1.title': 'Bilgisayar Mühendisliği', 'about.card1.desc': 'Muğla Sıtkı Koçman Üniversitesi — Yazılım, AI ve Mobil Geliştirme odaklı müfredat',
    'about.card2.title': 'Full Stack Web Geliştirme', 'about.card2.desc': 'HTML, CSS, JavaScript ile frontend; Node.js ve Express.js ile backend projeleri',
    'about.card3.title': 'Android Geliştirme', 'about.card3.desc': 'Java ile Android SDK üzerinde uygulama geliştirme, özel adaptörler ve UI tasarımı',
    'about.card4.title': 'Yapay Zeka & ML', 'about.card4.desc': 'Python ile pekiştirmeli öğrenme (Q-Learning), optimizasyon ve arama algoritmaları',
    'skills.label': 'Beceriler', 'skills.title': 'Teknik Yetkinliklerim', 'skills.desc': 'Çalıştığım teknolojiler ve araçlar — kategorilere göre.',
    'skills.cat.frontend': 'Frontend', 'skills.cat.backend': 'Backend', 'skills.cat.mobile': 'Mobil',
    'skills.cat.ai': 'Yapay Zeka & ML', 'skills.cat.db': 'Veritabanı', 'skills.cat.tools': 'Araçlar & Diğer',
    'skills.tag.search': 'Arama Algoritmaları', 'skills.tag.dbdesign': 'Veritabanı Tasarımı',
    'skills.tag.ds': 'Veri Yapıları', 'skills.tag.algo': 'Algoritmalar',
    'projects.label': 'Projeler', 'projects.title': 'Öne Çıkan Çalışmalarım',
    'projects.desc': 'Geliştirdiğim projelerin bir kısmı — farklı alanlarda üretilmiş gerçek uygulamalar.',
    'projects.algotube.desc': 'Sıralama ve arama algoritmalarını gerçek zamanlı animasyonlarla görselleştiren interaktif eğitim platformu. Big O karmaşıklık analizi ve adım adım görselleştirme içerir.',
    'projects.cargo.desc': 'Kargo ve lojistik yönetim platformu. Yeni sevkiyat oluşturma, admin paneli, filo yönetimi (gemi & kamyon), konteyner takibi ve fiyatlandırma modüllerini içerir.',
    'projects.snake.desc': 'Q-Learning pekiştirmeli öğrenme algoritması ile kendi kendine oynayan Snake oyunu. Epsilon-greedy keşif stratejisi, Manhattan mesafe tabanlı durum temsili ve kalıcı Q-tablo depolaması içerir.',
    'projects.tobacco.desc': "Hindistan'daki tütün kullanım anket verilerini yöneten tam yığın veritabanı uygulaması. Ham CSV verilerini 3NF'e normalize eder; Go REST API ile veri sorgulama ve CRUD arayüzü sunar.",
    'tag.animation': 'Animasyon',
    'services.label': 'Hizmetler', 'services.title': 'Size Nasıl Yardımcı Olabilirim?',
    'services.desc': 'Freelance olarak çalışabileceğim alanlar. Bir projeniz varsa, konuşalım.',
    'services.web.title': 'Web Sitesi Geliştirme', 'services.web.desc': 'Kurumsal veya kişisel web sitesi, landing page, portfolyo ve web uygulaması geliştirme.',
    'services.mobile.title': 'Android Uygulama Geliştirme', 'services.mobile.desc': 'Java ile Android SDK kullanarak özel mobil uygulamalar geliştirme ve yayınlama.',
    'services.algo.title': 'Algoritma Danışmanlığı', 'services.algo.desc': 'Veri yapıları, algoritma tasarımı, karmaşıklık analizi ve kod optimizasyonu konularında destek.',
    'services.ai.title': 'Yapay Zeka & ML Projeleri', 'services.ai.desc': 'Python ile pekiştirmeli öğrenme, arama algoritmaları ve AI tabanlı proje geliştirme.',
    'contact.label': 'İletişim', 'contact.title': 'Birlikte Çalışalım',
    'contact.desc': 'Bir projeniz veya sorunuz mu var? Formu doldurun, size en kısa sürede döneceğim.',
    'contact.email': 'E-posta', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Konum', 'contact.location.val': 'Muğla, Türkiye',
    'contact.fname.label': 'Adınız', 'contact.fname.placeholder': 'Adınız Soyadınız',
    'contact.femail.label': 'E-posta', 'contact.femail.placeholder': 'ornek@email.com',
    'contact.fsubject.label': 'Konu', 'contact.fsubject.placeholder': 'Proje hakkında bilgi almak istiyorum',
    'contact.fmessage.label': 'Mesajınız', 'contact.fmessage.placeholder': 'Projenizi veya sorunuzu kısaca anlatın...',
    'contact.submit': 'Mesaj Gönder →',
    'footer.rights': '© 2026 Mert Şengün. Tüm hakları saklıdır.',
  },
  en: {
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
    'nav.services': 'Services', 'nav.contact': 'Contact',
    'hero.greeting': "Hello, I'm", 'hero.role': 'Web · Mobile · AI',
    'hero.desc': "I build user-friendly web applications, Android apps, and AI-powered projects. I'm here to turn your ideas into software.",
    'hero.btn.projects': 'View My Projects', 'hero.btn.contact': 'Get In Touch',
    'hero.badge': 'Computer Engineer',
    'hero.stat.projects': 'Projects', 'hero.stat.web': 'Development', 'hero.stat.mobile': 'Android', 'hero.stat.ai': 'Artificial Intelligence',
    'about.label': 'About', 'about.title': 'Let Me Tell You About Myself',
    'about.p1': "I'm a Computer Engineering student at Muğla Sıtkı Koçman University. I love building projects in web development, mobile applications, and artificial intelligence.",
    'about.p2': "Throughout my education, I've built a broad technical foundation through both academic and personal projects — from an algorithm visualization platform to an AI that plays Snake using Q-Learning.",
    'about.p3': "If you have a project or need technical consulting, I'd be happy to work together.",
    'about.card1.title': 'Computer Engineering', 'about.card1.desc': 'Muğla Sıtkı Koçman University — Software, AI and Mobile Development focused curriculum',
    'about.card2.title': 'Full Stack Web Development', 'about.card2.desc': 'Frontend with HTML, CSS, JavaScript; backend with Node.js and Express.js',
    'about.card3.title': 'Android Development', 'about.card3.desc': 'Building Android apps with Java SDK, custom adapters and UI design',
    'about.card4.title': 'AI & ML', 'about.card4.desc': 'Reinforcement learning (Q-Learning), optimization and search algorithms with Python',
    'skills.label': 'Skills', 'skills.title': 'My Technical Skills', 'skills.desc': 'Technologies and tools I work with — by category.',
    'skills.cat.frontend': 'Frontend', 'skills.cat.backend': 'Backend', 'skills.cat.mobile': 'Mobile',
    'skills.cat.ai': 'AI & ML', 'skills.cat.db': 'Database', 'skills.cat.tools': 'Tools & Other',
    'skills.tag.search': 'Search Algorithms', 'skills.tag.dbdesign': 'Database Design',
    'skills.tag.ds': 'Data Structures', 'skills.tag.algo': 'Algorithms',
    'projects.label': 'Projects', 'projects.title': 'Featured Work',
    'projects.desc': "Some of the projects I've built — real applications across different domains.",
    'projects.algotube.desc': 'An interactive educational platform that visualizes sorting and searching algorithms with real-time animations. Includes Big O complexity analysis and step-by-step visualization.',
    'projects.cargo.desc': 'A cargo and logistics management platform. Includes shipment creation, admin panel, fleet management (ships & trucks), container tracking and pricing modules.',
    'projects.snake.desc': 'A self-playing Snake game using Q-Learning reinforcement learning. Features epsilon-greedy exploration, Manhattan distance-based state representation, and persistent Q-table storage.',
    'projects.tobacco.desc': 'A full-stack database app managing tobacco usage survey data across India. Normalizes raw CSV data to 3NF; provides data querying and CRUD interface via Go REST API.',
    'tag.animation': 'Animation',
    'services.label': 'Services', 'services.title': 'How Can I Help You?',
    'services.desc': "Areas I can work on as a freelancer. If you have a project, let's talk.",
    'services.web.title': 'Web Development', 'services.web.desc': 'Corporate or personal website, landing page, portfolio and web application development.',
    'services.mobile.title': 'Android App Development', 'services.mobile.desc': 'Building and publishing custom mobile applications using Java and Android SDK.',
    'services.algo.title': 'Algorithm Consulting', 'services.algo.desc': 'Support with data structures, algorithm design, complexity analysis and code optimization.',
    'services.ai.title': 'AI & ML Projects', 'services.ai.desc': 'Reinforcement learning, search algorithms and AI-based project development with Python.',
    'contact.label': 'Contact', 'contact.title': "Let's Work Together",
    'contact.desc': "Have a project or question? Fill out the form and I'll get back to you as soon as possible.",
    'contact.email': 'Email', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Location', 'contact.location.val': 'Muğla, Turkey',
    'contact.fname.label': 'Your Name', 'contact.fname.placeholder': 'First and Last Name',
    'contact.femail.label': 'Email', 'contact.femail.placeholder': 'example@email.com',
    'contact.fsubject.label': 'Subject', 'contact.fsubject.placeholder': 'I would like information about a project',
    'contact.fmessage.label': 'Your Message', 'contact.fmessage.placeholder': 'Briefly describe your project or question...',
    'contact.submit': 'Send Message →',
    'footer.rights': '© 2026 Mert Şengün. All rights reserved.',
  }
};

// ── Language Toggle ──
let currentLang = localStorage.getItem('lang') || 'tr';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-tag]').forEach(el => {
    const key = el.dataset.i18nTag;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'tr' ? 'EN' : 'TR';
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'tr' ? 'en' : 'tr');
});

// ── Theme Toggle ──
let isDark = localStorage.getItem('theme') !== 'light';

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  document.getElementById('themeToggle').textContent = dark ? '☀️' : '🌙';
  isDark = dark;
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

document.getElementById('themeToggle').addEventListener('click', () => applyTheme(!isDark));

// ── Init on load ──
applyTheme(isDark);
applyLang(currentLang);

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('open');
  });
});

// ── Mobile nav ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// ── Scroll spy ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s));

// ── Fade-up ──
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── Contact form (Formspree) ──
const FORMSPREE_URL = (typeof CONFIG !== 'undefined') ? CONFIG.FORMSPREE_URL : '';

document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const t = translations[currentLang];

  btn.disabled = true;
  btn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';

  const formData = new FormData();
  formData.append('name', document.getElementById('fname').value.trim());
  formData.append('email', document.getElementById('femail').value.trim());
  formData.append('subject', document.getElementById('fsubject').value.trim() || (currentLang === 'tr' ? 'Web Sitesinden İletişim' : 'Contact from Website'));
  formData.append('message', document.getElementById('fmessage').value.trim());

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
    });

    if (res.ok) {
      btn.textContent = currentLang === 'tr' ? 'Mesaj Gönderildi!' : 'Message Sent!';
      btn.style.background = '#22c55e';
      e.target.reset();
      setTimeout(() => { btn.disabled = false; btn.textContent = t['contact.submit']; btn.style.background = ''; }, 4000);
    } else {
      throw new Error();
    }
  } catch {
    btn.textContent = currentLang === 'tr' ? 'Hata oluştu, tekrar dene' : 'Error, please retry';
    btn.style.background = '#ef4444';
    btn.disabled = false;
    setTimeout(() => { btn.textContent = t['contact.submit']; btn.style.background = ''; }, 3000);
  }
});
