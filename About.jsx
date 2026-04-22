export default function About({ onBack }) {
  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <div className="about-hero">
        <div className="about-hero-overlay" />
        <img
          src="/hotel.jpg"
          alt="Hilton Garden Inn where it all began in 2011"
          className="about-hero-img"
        />
        <div className="about-hero-content">
          <div className="about-eyebrow">Our Story</div>
          <h1 className="about-hero-title">From 10 Strangers<br />to a <em>Movement</em></h1>
          <p className="about-hero-sub">2011 · Hilton Garden Inn · $200 · A Testimony</p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="about-body">

        <div className="about-intro">
          <p className="about-lead">
            I was tired of being the mama who gave everything — and had nothing left in the end.
          </p>
        </div>

        <div className="about-columns">
          <div className="about-text">
            <p>
              In 2011, I walked into a Hilton Garden Inn with 10 strangers, $200 in my pocket, a burning desire, and a testimony. I didn't have a 501c3. I didn't have experience as an event host. I didn't have a team or a budget or a blueprint anyone handed me. What I had was faith — and that was enough.
            </p>
            <p>
              For 15 years I searched for the kind of community that would hold me, grow me, and walk beside me in purpose. When I couldn't find it, I built it. And what I discovered along the way changed everything: when it comes to the things of God, there is no such thing as oversaturated.
            </p>
            <p>
              Every woman who has ever felt the pull toward something bigger — toward community, toward purpose, toward building something that matters — she is who this is for. You don't need credentials. You don't need a big budget. You just need your faith and a blueprint. I will show you the rest.
            </p>
            <p>
              If you learn like me — show me one time and I've got it — then you already know what to do. Let me be that one time for you.
            </p>

            <div className="about-quote">
              "If you needed community but can't find it — <em>create it.</em>"
            </div>

            <p>
              The Soft Life Bible Study was born from the same heart. A space where women can come as they are, search the Word for whatever they're carrying, and leave equipped to serve, build, and walk in purpose. This is what the soft life looks like in faith — not passive, but purposeful. Not striving, but grounded.
            </p>
            <p>
              15 years later, I am still here. And if I can do it, so can you. Let me teach you how.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="about-stat-card">
              <div className="about-stat-number">15</div>
              <div className="about-stat-label">Years of Building Community</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">10</div>
              <div className="about-stat-label">Strangers in a Room Where It All Started</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">$200</div>
              <div className="about-stat-label">In Her Pocket. Faith in Her Heart.</div>
            </div>
          </div>
        </div>

        {/* WHAT YOU GET */}
        <div className="about-offer">
          <div className="about-offer-header">
            <div className="about-eyebrow">The Blueprint</div>
            <h2 className="about-offer-title">Pretty & Paid — <em>Learn to Build Your Community</em></h2>
            <p className="about-offer-sub">
              Everything I have learned in 15 years of hosting events, building community from scratch, and walking women into their purpose — handed directly to you.
            </p>
          </div>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">✝</div>
              <h4>Faith as Your Foundation</h4>
              <p>No 501c3 required. No experience required. Just your faith and the willingness to show up.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">🌸</div>
              <h4>A Real Blueprint</h4>
              <p>Step by step guidance on how to create community events that transform lives — including yours.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">👑</div>
              <h4>Serve, Build & Walk in Purpose</h4>
              <p>This is the soft life — doing what God called you to do without burning yourself out to do it.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">🤝</div>
              <h4>Hand in Hand Mentorship</h4>
              <p>I walk with you. Show you one time. You run with it. That is the promise.</p>
            </div>
          </div>

          {/* PAYMENT CTA */}
          <div className="about-cta">
            <div className="about-cta-inner">
              <p className="about-cta-eyebrow">Today is the day</p>
              <h3 className="about-cta-title">Get Pretty & Paid</h3>
              <p className="about-cta-desc">
                Join Kemi and get the full blueprint for building your community, hosting your events, and walking fully in your purpose.
              </p>
              <div className="about-price">
                <span className="about-price-amount">$997</span>
                <span className="about-price-note">one time investment</span>
              </div>
              <a
                href="https://buy.quickbooks.com/app/qbo/invoicing/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="about-pay-btn"
              >
                Yes, I'm Ready — Enroll Now →
              </a>
              <p className="about-cta-fine">
                Secure payment powered by QuickBooks · Questions? Reach out before purchasing.
              </p>
            </div>
          </div>

        </div>

        <div className="about-back">
          <button className="about-back-btn" onClick={onBack}>
            ← Back to Bible Study
          </button>
        </div>

      </div>
    </div>
  )
}
