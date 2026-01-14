import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';

const linkClass = ({ isActive }) => (isActive ? "navlink navlink-active" : "navlink");

export default function NavBar() {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border-soft)",
        background: "rgba(2,6,23,0.6)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
          MWCD Knowledge Hub <span className="muted">CW2</span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {/* <NavLink to="/" className={linkClass}>Search</NavLink>
          <NavLink to="/upload" className={linkClass}>Upload</NavLink>
          <NavLink to="/recommendations" className={linkClass}>Recommendations</NavLink> */}
          <NavLink to="/audits" className={linkClass}>Audits</NavLink>
          <NavLink to="/consultants" className={linkClass}>Consultants</NavLink>
          <NavLink to="/knowledge_contents" className={linkClass}>Knowledge Contentes</NavLink>
          <NavLink to="/workspaces" className={linkClass}>Workspaces</NavLink>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Avatar style={{paddingTop: '6px'}} name="Admin" round={true} size="40px" />
          <div style={{ marginLeft: '8px' }}>
            <p style={{ padding: '0px', margin: '0px' }}>Administer</p>
            <p style={{ padding: '0px', margin: '0px' }}>ADMIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
