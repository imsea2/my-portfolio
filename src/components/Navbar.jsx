import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' is-active' : '')

  return (
    <header className="nav">
      <div className="frame nav-inner">
        {/* 좌측 로고/이름이 없다면 비워둬도 됩니다 */}
        <div className="nav-spacer" />
        <nav className="menu">
          <NavLink to="/" className={linkClass} end>HOME</NavLink>
          <NavLink to="/works" className={linkClass}>WORKS</NavLink>
          <NavLink to="/about" className={linkClass}>ABOUT ME</NavLink>
        </nav>
      </div>
    </header>
  )
}
