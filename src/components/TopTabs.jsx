import { NavLink } from 'react-router-dom'

export default function TopTabs() {
  return (
    <nav className="page-tabs">
      <NavLink
        to="/"
        end
        className={({ isActive }) => 'tab-btn' + (isActive ? ' active' : '')}
      >
        TO-LET / PROPERTY
      </NavLink>
      <NavLink
        to="/printing-jobs"
        className={({ isActive }) => 'tab-btn' + (isActive ? ' active' : '')}
      >
        PRINTING / JOBS
      </NavLink>
    </nav>
  )
}
