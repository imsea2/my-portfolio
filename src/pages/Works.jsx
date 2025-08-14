export default function Works() {
  return (
    <main className="page">
      <div className="frame">
        <h1 className="page-title">All Works</h1>
        <p className="page-desc">프로젝트 리스트 페이지입니다.</p>

        <div className="grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <article className="card" key={i}>
              <div className="thumb" />
              <div className="meta">
                <div className="title">Project {i + 1}</div>
                <div className="date">2025. 01. 01 - 2025. 02. 01</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
