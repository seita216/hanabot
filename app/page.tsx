const features = [
  {
    number: "01",
    icon: "✦",
    title: "画像 CAPTCHA 認証",
    description: "画像認証で、サーバーに参加するメンバーをスムーズに確認。",
    tag: "SECURITY",
  },
  {
    number: "02",
    icon: "◖",
    title: "AI音声認証",
    description: "音声を使った認証にも対応。コミュニティに合った認証体験を。",
    tag: "SMART VOICE",
  },
  {
    number: "03",
    icon: "♧",
    title: "期限つき年齢認証",
    description: "90日ごとに更新をお知らせ。期限切れ後は対象ロールを自動解除。",
    tag: "AGE CHECK",
  },
  {
    number: "04",
    icon: "↗",
    title: "未認証メンバー管理",
    description: "30日後にリマインダー、90日後に自動Kick。対応を自動化します。",
    tag: "AUTOMATION",
  },
  {
    number: "05",
    icon: "⟲",
    title: "サーバー間連携",
    description: "複数サーバーの認証状況やロールを連携して同期。",
    tag: "SYNC",
  },
  {
    number: "06",
    icon: "▦",
    title: "カレンダー & 管理パネル",
    description: "予定や通知スケジュール、未認証メンバーをひとつの場所で管理。",
    tag: "CONTROL CENTER",
  },
];

const products = [
  { name: "Hana認証", label: "VERIFY", description: "安心できる場所を、やさしい認証から。", color: "pink" },
  { name: "HanaTicket", label: "SUPPORT", description: "問い合わせ対応を、もっとスムーズに。", color: "violet" },
  { name: "Hana管理", label: "MANAGE", description: "サーバー運営に必要な管理を、ひとまとめに。", color: "blue" },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <nav className="nav wrap">
        <a className="brand" href="#home" aria-label="Hana Bot ホーム">
          <span className="brand-mark">花</span><span>hana<span className="brand-light">bot</span></span>
        </a>
        <div className="nav-links">
          <a href="#features">できること</a>
          <a href="#series">Hanaシリーズ</a>
          <a href="#about">Hanaについて</a>
        </div>
        <a className="nav-cta" href="#series">シリーズを見る <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> YOUR COMMUNITY, IN BLOOM</div>
          <h1>コミュニティに、<br /><span className="gradient-text">花ひらく安心を。</span></h1>
          <p className="hero-description">認証からサーバー管理まで。<br className="desktop-break" />Hana Botが、毎日の運営をやさしくサポートします。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#series">Hanaシリーズを見る <span>→</span></a>
            <a className="text-link" href="#features">機能をチェック <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="tiny-flower">✿</span> あなたのサーバーに、ちょうどいいやさしさを。</div>
        </div>
        <div className="hero-art" aria-label="Hana Botの認証ダッシュボードイメージ">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="petal petal-a" /><div className="petal petal-b" /><div className="petal petal-c" />
          <div className="dashboard-card">
            <div className="dash-top"><div className="dash-brand"><span className="mini-mark">花</span> hana verify</div><span className="online"><i /> ONLINE</span></div>
            <div className="dash-greeting">WELCOME TO THE GARDEN <span>✦</span></div>
            <div className="dash-title">認証ステータス</div>
            <div className="verify-row"><div className="verify-icon">✓</div><div><strong>認証が完了しました</strong><small>ようこそ、コミュニティへ！</small></div><span className="verified-pill">VERIFIED</span></div>
            <div className="dash-divider" />
            <div className="dash-bottom"><span>認証ロール</span><span className="role-pill"><i /> Member</span></div>
            <div className="progress-track"><span /></div>
          </div>
          <div className="float-chip chip-top"><span>✧</span> 自動ロール付与</div>
          <div className="float-chip chip-bottom"><span className="chip-check">✓</span> Hanaが見守り中</div>
          <div className="sparkle sparkle-one">✦</div><div className="sparkle sparkle-two">✧</div><div className="sparkle sparkle-three">·</div>
        </div>
        <a href="#features" className="scroll-hint"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><span className="trust-label">MADE FOR YOUR COMMUNITY</span><span>✿</span><span>安心の認証</span><span>✿</span><span>運営を自動化</span><span>✿</span><span>やさしい使い心地</span></div></section>

      <section className="section wrap" id="features">
        <div className="section-heading"><div><div className="eyebrow"><span className="tiny-flower">✿</span> WHAT HANA CAN DO</div><h2>運営の「たいへん」を、<br /><span className="gradient-text">Hanaにおまかせ。</span></h2></div><p>日々の管理をもっとシンプルに。<br />必要な機能を、ひとつずつ丁寧に。</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span className="feature-icon">{feature.icon}</span><span className="feature-number">{feature.number}</span></div><div className="feature-tag">{feature.tag}</div><h3>{feature.title}</h3><p>{feature.description}</p><span className="card-arrow">↗</span></article>)}</div>
      </section>

      <section className="series-section" id="series"><div className="wrap"><div className="section-heading series-heading"><div><div className="eyebrow"><span className="tiny-flower">✿</span> MEET THE HANA SERIES</div><h2>Hanaシリーズで、<br /><span className="gradient-text">サーバー運営をひとつに。</span></h2></div><p>それぞれの役割に寄り添う、<br />Hanaのボットシリーズ。</p></div><div className="product-grid">{products.map((product, index) => <article className={`product-card product-${product.color}`} key={product.name}><div className="product-orb">{index === 0 ? "✿" : index === 1 ? "✉" : "⌘"}</div><span className="product-label">{product.label}</span><h3>{product.name}</h3><p>{product.description}</p><a href="#about" className="product-link">詳しく見る <span>↗</span></a></article>)}</div><div className="coming-note"><span>✧</span> 各サービスの招待リンクは準備中です。公開までお楽しみに。</div></div></section>

      <section className="about-section wrap" id="about"><div className="about-flower">✿</div><div className="about-content"><div className="eyebrow">A LITTLE MORE HUMAN</div><h2>テクノロジーに、<br /><span className="gradient-text">ちょっとの思いやりを。</span></h2><p>Hana Botは、ただ作業を自動化するだけじゃない。<br />管理する人にも、参加する人にも、心地よい場所をつくるためのボットです。</p></div><div className="about-signature">with <span>♥</span> from Hana</div></section>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">花</span><span>hana<span className="brand-light">bot</span></span></a><span className="footer-copy">© 2026 Hana Bot Series. Made with care.</span><a className="back-top" href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
