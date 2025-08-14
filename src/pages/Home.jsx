import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="page-frame">
      {/* 배경 GIF 경로를 넣고 싶으면 아래 주석 해제하고 경로만 교체하세요 */}
      {/* <Hero bgSrc="/gradient.gif" /> */}
      <Hero />

      <section className="works">
        <div className="frame">
          <h2 className="section-title">WORKS</h2>

          <div className="chips">
            <button className="chip chip--active">PRODUCTS</button>
            <button className="chip">BI / BX</button>
            <button className="chip">RENEWAL</button>
            <button className="chip">3D</button>
            <button className="chip">VISUAL</button>
          </div>

          <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <article className="card" key={i}>
                <div className="thumb" />
                <div className="meta">
                  <div className="title">Wecare</div>
                  <div className="date">2025. 06. 25 - 2025. 08. 03</div>
                </div>
              </article>
            ))}
          </div>

          <div className="center">
            <a className="btn-outline" href="/works">ALL WORKS →</a>
          </div>
        </div>
      </section>

      <section className="myinfo">
        <div className="frame">
          <h2 className="section-title">MY INFO</h2>

          <div className="info-wrap">
            <div className="info-card">
              <div className="photo" />
              <div className="info">
                <div className="name"><strong>전바다</strong> <span>Jeon Bada</span></div>
                <div className="row">010-9085-3271</div>
                <div className="row">imseaofsea@gmail.com</div>

                <div className="btn-row">
                  <a className="btn-ghost" href="#">이력서 →</a>
                  <a className="btn-ghost" href="#">자기소개서 →</a>
                </div>
              </div>
            </div>

            <aside className="links">
              <div className="sns">
                <div className="sns-box">Instagram</div>
                <div className="sns-box">GitHub</div>
                <div className="sns-box">QR</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
