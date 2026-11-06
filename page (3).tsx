import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivo Energy | Selalu Ada Untukmu",
  description:
    "Temani setiap perjalanan bersama Vivo Energy. Energi untuk langkah yang terus bergerak.",
};

const photos = {
  hero: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90",
  station: "https://images.unsplash.com/photo-1545262810-77515befe149?auto=format&fit=crop&w=1400&q=85",
  road: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  driver: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
  night: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",
};

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 17a9 9 0 1 1 16 0M12 13l5-5M7 17h10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Vivo Energy beranda">
          <strong>VIVO</strong><span>ENERGY</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a className="active" href="#home">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#keunggulan">Keunggulan</a>
          <a href="#jaringan">Jaringan</a>
        </nav>
        <a className="nav-cta" href="#lokasi"><PinIcon /> Cari lokasi</a>
      </header>

      {/* 01 / Hero: full-bleed cinematic layout */}
      <section className="hero" id="home" style={{ backgroundImage: `url(${photos.hero})` }}>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">ENERGI UNTUK SETIAP LANGKAH</p>
          <h1>Selalu ada<br /><em>untukmu.</em></h1>
          <p className="hero-copy">
            Dari perjalanan pagi sampai pulang nanti, kami hadir menemani
            langkahmu.
          </p>
          <a className="button button-red" href="#tentang">Kenal lebih dekat <Arrow /></a>
        </div>
        <div className="hero-bottom">
          <span>01 / EVERYDAY, EVERY JOURNEY</span>
          <span>ENERGI YANG MENEMANI INDONESIA</span>
        </div>
      </section>

      {/* 02 / Intro: split editorial layout */}
      <section className="intro section-grid" id="tentang">
        <div className="intro-image image-panel" style={{ backgroundImage: `url(${photos.station})` }}>
          <span className="image-label">LEBIH DEKAT DENGAN VIVO</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">TENTANG VIVO ENERGY</p>
          <h2>Perjalananmu<br />punya cerita.</h2>
          <p>
            Ada yang berangkat saat kota belum ramai. Ada yang mengejar waktu,
            menjemput keluarga, atau sekadar menikmati jalan pulang.
          </p>
          <p>
            Apa pun tujuanmu, Vivo Energy ingin jadi bagian dari perjalanan
            yang terus bergerak.
          </p>
          <a className="text-link" href="#untukmu">Temukan ceritanya <Arrow /></a>
        </div>
      </section>

      {/* 03 / Promise: dark feature band */}
      <section className="promise" id="keunggulan">
        <div className="promise-heading">
          <p className="eyebrow light">YANG KAMI PERCAYAI</p>
          <h2>Energi baik.<br /><em>Perjalanan lebih berarti.</em></h2>
        </div>
        <div className="promise-note">
          <p>
            Kami percaya setiap perjalanan layak didukung dengan produk
            berkualitas, layanan yang ramah, dan pengalaman yang terasa mudah.
          </p>
          <span>BUILT AROUND YOUR JOURNEY</span>
        </div>
      </section>

      {/* 04 / Benefits: three-card layout */}
      <section className="benefits section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALASAN UNTUK MELANGKAH</p>
            <h2>Lebih nyaman<br />di setiap perjalanan.</h2>
          </div>
          <p className="heading-aside">Hal kecil yang membuat perjalanan sehari-hari terasa lebih baik.</p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <div className="icon-wrap"><GaugeIcon /></div>
            <span className="card-index">01</span>
            <h3>Performa terjaga</h3>
            <p>Pilihan energi untuk mendukung kendaraan menemani aktivitasmu.</p>
          </article>
          <article className="benefit-card featured">
            <div className="icon-wrap"><ShieldIcon /></div>
            <span className="card-index">02</span>
            <h3>Pengalaman nyaman</h3>
            <p>Singgah sejenak, isi energi, lalu lanjutkan perjalanan dengan tenang.</p>
          </article>
          <article className="benefit-card">
            <div className="icon-wrap"><PinIcon /></div>
            <span className="card-index">03</span>
            <h3>Mudah dijangkau</h3>
            <p>Temukan lokasi Vivo Energy untuk jadi bagian dari rute harianmu.</p>
          </article>
        </div>
      </section>

      {/* 05 / Lifestyle: image and oversized statement */}
      <section className="lifestyle" id="untukmu">
        <div className="lifestyle-photo" style={{ backgroundImage: `url(${photos.driver})` }} />
        <div className="lifestyle-copy">
          <p className="eyebrow light">UNTUK SETIAP VERSI DIRIMU</p>
          <h2>Kejar pagi.<br />Jemput mimpi.<br /><em>Nikmati jalan.</em></h2>
          <p>
            Rutinitas boleh sama, tapi setiap perjalanan selalu punya arti
            yang berbeda.
          </p>
          <a className="text-link light-link" href="#jaringan">Lanjutkan perjalanan <Arrow /></a>
        </div>
      </section>

      {/* 06 / Journey moments: horizontal editorial strip */}
      <section className="moments section-pad">
        <div className="moments-top">
          <p className="eyebrow">DARI PAGI HINGGA MALAM</p>
          <span>YOUR DAY. YOUR WAY.</span>
        </div>
        <div className="moment-grid">
          <article className="moment moment-one">
            <div className="moment-img" style={{ backgroundImage: `url(${photos.road})` }} />
            <span>07:00 AM</span><h3>Mulai lebih awal.</h3>
          </article>
          <article className="moment moment-two">
            <div className="moment-img" style={{ backgroundImage: `url(${photos.night})` }} />
            <span>08:00 PM</span><h3>Pulang dengan cerita.</h3>
          </article>
        </div>
      </section>

      {/* 07 / Network: location-focused split layout */}
      <section className="network section-grid" id="jaringan">
        <div className="network-copy">
          <p className="eyebrow">LEBIH DEKAT DI PERJALANAN</p>
          <h2>Temukan kami<br />di sepanjang jalan.</h2>
          <p>
            Rencanakan perjalananmu dan cari lokasi Vivo Energy yang paling
            dekat dengan rute harianmu.
          </p>
          <a className="button button-dark" href="#lokasi">Cari lokasi terdekat <Arrow /></a>
        </div>
        <div className="network-visual">
          <div className="map-orbit orbit-one" />
          <div className="map-orbit orbit-two" />
          <div className="map-pin"><PinIcon /></div>
          <span className="map-caption">YOUR NEXT STOP</span>
        </div>
      </section>

      {/* 08 / CTA: full-width photographic banner */}
      <section className="final-cta" id="lokasi" style={{ backgroundImage: `url(${photos.hero})` }}>
        <div className="cta-overlay" />
        <div className="cta-content">
          <p className="eyebrow light">SAMPAI JUMPA DI PERJALANAN</p>
          <h2>Ke mana pun<br /><em>tujuanmu.</em></h2>
          <p>Vivo Energy. Selalu ada untukmu.</p>
          <a className="button button-red" href="https://www.vivoenergy.com/" target="_blank" rel="noreferrer">
            Kenali Vivo Energy <Arrow />
          </a>
        </div>
      </section>

      {/* 09 / Footer: compact multi-column layout */}
      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><strong>VIVO</strong><span>ENERGY</span></a>
          <p>Selalu ada untukmu.<br />Di setiap perjalanan.</p>
          <div className="footer-links">
            <a href="#tentang">Tentang</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#jaringan">Jaringan</a>
            <a href="https://www.vivoenergy.com/" target="_blank" rel="noreferrer">Website Vivo Energy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vivo Energy. All rights reserved.</span>
          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        :root { --ink:#111315; --paper:#f3f2ee; --red:#ef2633; --muted:#777b80; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:'DM Sans',sans-serif; }
        a { color:inherit; text-decoration:none; }
        .nav { height:82px; padding:0 6vw; display:flex; align-items:center; justify-content:space-between; background:#101316; color:white; position:absolute; z-index:5; top:0; left:0; width:100%; }
        .brand { display:flex; flex-direction:column; line-height:.82; width:max-content; letter-spacing:.08em; }
        .brand strong { color:var(--red); font:800 27px Manrope,sans-serif; letter-spacing:.02em; }
        .brand span { font-size:10px; font-weight:700; letter-spacing:.24em; margin-top:5px; }
        .nav nav { display:flex; gap:34px; align-items:center; }
        .nav nav a { color:#d6d7d8; font-size:12px; transition:color .2s; }
        .nav nav a:hover,.nav nav .active { color:white; }
        .nav nav .active:after { content:''; display:block; width:18px; height:2px; background:var(--red); margin-top:8px; }
        .nav-cta { display:flex; align-items:center; gap:8px; background:white; color:#111; border-radius:30px; padding:11px 17px; font-size:11px; font-weight:700; }
        .nav-cta svg,.map-pin svg { width:15px; height:15px; fill:none; stroke:currentColor; stroke-width:1.8; }
        .hero { min-height:760px; height:100svh; max-height:950px; position:relative; background-size:cover; background-position:center; color:white; display:flex; align-items:center; padding:100px 8vw 70px; }
        .hero-shade,.cta-overlay { position:absolute; inset:0; background:linear-gradient(90deg,rgba(5,10,16,.82),rgba(5,10,16,.28) 65%,rgba(5,10,16,.08)); }
        .hero-content { position:relative; z-index:1; max-width:700px; }
        .eyebrow { font-size:10px; letter-spacing:.2em; font-weight:700; color:var(--red); margin:0 0 22px; }
        .eyebrow.light { color:#ff5a62; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Manrope,sans-serif; letter-spacing:-.065em; }
        h1 { font-size:clamp(66px,10vw,140px); line-height:.91; font-weight:800; margin:0 0 28px; }
        h1 em,h2 em { color:var(--red); font-style:normal; }
        .hero-copy { max-width:390px; color:#e0e1e2; line-height:1.7; font-size:15px; margin-bottom:30px; }
        .button { display:inline-flex; align-items:center; gap:24px; padding:16px 21px; border-radius:3px; font-size:12px; font-weight:700; transition:transform .2s,background .2s; }
        .button:hover { transform:translateY(-3px); }
        .button-red { background:var(--red); color:white; }
        .button-red:hover { background:#d91d29; }
        .button-dark { background:#111315; color:white; }
        .arrow { font-size:17px; line-height:10px; }
        .hero-bottom { position:absolute; z-index:1; left:8vw; right:8vw; bottom:30px; display:flex; justify-content:space-between; color:#c7c9ca; font-size:9px; letter-spacing:.16em; }
        .section-grid { display:grid; grid-template-columns:1fr 1fr; }
        .intro { min-height:570px; background:#f3f2ee; }
        .image-panel { background-size:cover; background-position:center; position:relative; min-height:520px; }
        .image-label { position:absolute; bottom:25px; left:30px; color:white; font-size:9px; letter-spacing:.16em; }
        .intro-copy { padding:90px clamp(40px,8vw,125px); align-self:center; }
        .intro-copy h2,.section-heading h2,.network-copy h2 { font-size:clamp(43px,5vw,70px); line-height:1.02; margin-bottom:25px; }
        .intro-copy p:not(.eyebrow),.network-copy p:not(.eyebrow) { color:#65696c; font-size:14px; line-height:1.85; max-width:440px; }
        .text-link { display:inline-flex; align-items:center; gap:20px; margin-top:20px; font-size:12px; font-weight:700; border-bottom:1px solid #b7b7b3; padding-bottom:10px; }
        .promise { background:#111518; color:white; padding:105px 8vw; display:grid; grid-template-columns:1.2fr .8fr; gap:10vw; align-items:end; }
        .promise h2 { font-size:clamp(45px,6vw,82px); line-height:1.02; margin:0; }
        .promise h2 em { color:#f4f2ee; }
        .promise-note p { color:#c4c7c8; line-height:1.8; font-size:14px; max-width:390px; }
        .promise-note span { color:#858b8f; font-size:9px; letter-spacing:.18em; }
        .section-pad { padding:110px 8vw; }
        .section-heading { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:55px; }
        .section-heading h2 { margin:0; }
        .heading-aside { max-width:230px; color:#777b80; font-size:12px; line-height:1.8; }
        .benefit-grid { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid #d2d0ca; border-bottom:1px solid #d2d0ca; }
        .benefit-card { min-height:280px; padding:35px 30px 30px 0; position:relative; }
        .benefit-card + .benefit-card { border-left:1px solid #d2d0ca; padding-left:30px; }
        .icon-wrap { width:43px; height:43px; border:1px solid #c8c6c0; display:grid; place-items:center; border-radius:50%; margin-bottom:45px; }
        .icon-wrap svg { width:21px; height:21px; fill:none; stroke:#ed2936; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; }
        .card-index { position:absolute; right:20px; top:40px; color:#a6a49e; font-size:10px; }
        .benefit-card h3 { font:700 21px Manrope,sans-serif; letter-spacing:-.04em; margin-bottom:12px; }
        .benefit-card p { max-width:260px; color:#74777a; font-size:12px; line-height:1.8; }
        .benefit-card.featured { background:#e9e7e1; padding-top:35px; padding-bottom:30px; }
        .lifestyle { display:grid; grid-template-columns:1fr 1fr; background:#111518; color:white; min-height:650px; }
        .lifestyle-photo { background-size:cover; background-position:center; min-height:550px; }
        .lifestyle-copy { align-self:center; padding:80px clamp(40px,8vw,120px); }
        .lifestyle-copy h2 { font-size:clamp(46px,6vw,82px); line-height:1.02; margin-bottom:25px; }
        .lifestyle-copy h2 em { color:var(--red); }
        .lifestyle-copy p:not(.eyebrow) { color:#c1c5c7; max-width:340px; font-size:13px; line-height:1.8; }
        .light-link { color:white; border-color:#5d6265; }
        .moments { background:#e8e7e1; }
        .moments-top { display:flex; justify-content:space-between; align-items:center; }
        .moments-top span { color:#7a7d7e; font-size:9px; letter-spacing:.16em; }
        .moment-grid { display:grid; grid-template-columns:1.25fr .75fr; gap:20px; align-items:end; }
        .moment-img { height:390px; background-size:cover; background-position:center; margin-bottom:18px; }
        .moment-two .moment-img { height:280px; }
        .moment span { color:var(--red); font-size:9px; letter-spacing:.16em; font-weight:700; }
        .moment h3 { font:700 25px Manrope,sans-serif; letter-spacing:-.04em; margin:8px 0 0; }
        .network { min-height:540px; background:#f6f5f1; }
        .network-copy { padding:90px 8vw; align-self:center; }
        .network-visual { position:relative; overflow:hidden; background-color:#dfe2dd; background-image:linear-gradient(35deg,transparent 48%,rgba(255,255,255,.8) 49%,rgba(255,255,255,.8) 50%,transparent 51%),linear-gradient(125deg,transparent 48%,rgba(255,255,255,.8) 49%,rgba(255,255,255,.8) 50%,transparent 51%); background-size:95px 95px; min-height:540px; display:grid; place-items:center; }
        .map-orbit { position:absolute; width:380px; height:380px; border:1px solid rgba(239,38,51,.35); border-radius:50%; }
        .orbit-two { width:250px; height:250px; }
        .map-pin { width:62px; height:62px; display:grid; place-items:center; border-radius:50% 50% 50% 0; transform:rotate(-45deg); background:var(--red); color:white; box-shadow:0 12px 30px #0002; }
        .map-pin svg { width:25px; height:25px; transform:rotate(45deg); }
        .map-caption { position:absolute; bottom:28px; right:30px; font-size:9px; letter-spacing:.2em; color:#737975; }
        .final-cta { min-height:530px; background-size:cover; background-position:center 60%; color:white; position:relative; display:flex; align-items:center; padding:80px 8vw; }
        .cta-overlay { background:linear-gradient(90deg,rgba(8,12,15,.88),rgba(8,12,15,.25)); }
        .cta-content { position:relative; z-index:1; }
        .cta-content h2 { font-size:clamp(55px,8vw,100px); line-height:.95; margin:0 0 20px; }
        .cta-content p:not(.eyebrow) { color:#d2d4d5; margin-bottom:25px; }
        .footer { background:#101316; color:white; padding:55px 8vw 25px; }
        .footer-main { display:grid; grid-template-columns:1fr 1fr 2fr; gap:35px; align-items:start; padding-bottom:45px; }
        .footer-main p { color:#aeb2b4; font-size:12px; line-height:1.8; }
        .footer-links { display:flex; justify-content:flex-end; flex-wrap:wrap; gap:25px; }
        .footer-links a,.footer-bottom { font-size:10px; color:#aeb2b4; }
        .footer-links a:hover,.footer-bottom a:hover { color:white; }
        .footer-bottom { border-top:1px solid #34383a; padding-top:22px; display:flex; justify-content:space-between; }
        @media (max-width:760px) {
          .nav { height:70px; padding:0 6vw; }
          .nav nav { display:none; }
          .nav-cta { padding:10px 12px; }
          .hero { min-height:720px; height:92svh; padding:120px 7vw 80px; background-position:58% center; }
          .hero-shade { background:linear-gradient(90deg,rgba(5,10,16,.82),rgba(5,10,16,.25)); }
          h1 { font-size:clamp(62px,17vw,100px); }
          .hero-bottom { left:7vw; right:7vw; font-size:8px; }
          .hero-bottom span:last-child { display:none; }
          .section-grid,.promise,.lifestyle,.network { grid-template-columns:1fr; }
          .image-panel { min-height:360px; }
          .intro-copy,.network-copy { padding:70px 7vw; }
          .promise { padding:75px 7vw; gap:35px; }
          .section-pad { padding:75px 7vw; }
          .section-heading { display:block; margin-bottom:35px; }
          .heading-aside { margin-top:20px; }
          .benefit-grid { grid-template-columns:1fr; }
          .benefit-card,.benefit-card + .benefit-card,.benefit-card.featured { min-height:unset; padding:28px 0; border-left:0; border-bottom:1px solid #d2d0ca; background:transparent; }
          .icon-wrap { margin-bottom:25px; }
          .card-index { right:0; top:32px; }
          .lifestyle-photo { min-height:390px; }
          .lifestyle-copy { padding:70px 7vw; }
          .moment-grid { grid-template-columns:1fr; gap:35px; }
          .moment-img,.moment-two .moment-img { height:280px; }
          .network-visual { min-height:370px; }
          .map-orbit { width:280px; height:280px; }
          .orbit-two { width:190px; height:190px; }
          .final-cta { min-height:490px; padding:70px 7vw; }
          .footer { padding:45px 7vw 22px; }
          .footer-main { grid-template-columns:1fr 1fr; }
          .footer-links { grid-column:1/-1; justify-content:flex-start; gap:18px; }
        }
        @media (prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } *,*::before,*::after { transition:none!important; } }
      `}</style>
    </main>
  );
}
