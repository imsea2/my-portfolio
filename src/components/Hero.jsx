// 히어로 배경은 GIF로만 옵션 제공.
// 사용법: <Hero bgSrc="/your-gradient.gif" />
export default function Hero({ bgSrc = null }) {
  return (
    <section className="hero">
      {/* 배경 GIF (없으면 렌더 안 함) */}
      {bgSrc && (
        <img className="hero-bg" src={bgSrc} alt="" aria-hidden="true" />
      )}

      <div className="frame hero-inner">
        <div className="hero-left">
          <p className="k-sub">
            시스템은 꼼꼼하게, 대화는 즐겁게, 역할은 유연하게
          </p>
          <h1 className="headline">
            METICULOUS SYSTEMS<br />
            JOYFUL CONVERSATIONS<br />
            FLEXIBLE ROLES
          </h1>
          <a className="btn-outline" href="/works">MY WORKS →</a>
        </div>

        <div className="hero-right">
          <p className="hero-desc">
            상황에 맞게 리드와 팔로우를 오가는 <em>디자이너 전바다</em>입니다.
            <br />
            생각하는 것을 포기하지 않는 자세로 프로젝트에 임하고 있습니다.
          </p>
        </div>
      </div>

      {/* 우측 하단 메일 플로팅 (필요 없으면 제거) */}
      <a className="float-mail" href="mailto:imseaofsea@gmail.com" aria-label="email">
        ✉️
      </a>
    </section>
  )
}
