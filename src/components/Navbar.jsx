import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Reset scroll & state when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', path: '/about', isExternal: false },
    { name: 'Agency', path: 'https://www.digitalyagnesh.com/', isExternal: true },
    { name: 'Podcast', path: '/podcast', isExternal: false }, // Updated to dedicated page
    { name: 'Events', path: '/events', isExternal: false },
    { name: 'Coaching', path: '/coaching', isExternal: false },
    { name: 'Contact', path: '/contact', isExternal: false },

  ];

  return (
    <nav style={{
      position: 'fixed',
      // Banner is now global, so we always offset by approx banner height (46px) initially
      top: isScrolled ? '0' : '46px',
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 0',
      backgroundColor: isScrolled ? '#000000' : 'transparent', // Consistent Transparent -> Black everywhere
      transition: 'all 0.3s ease-out',
      borderBottom: isScrolled ? '1px solid #222' : 'none'
    }}>

      {!isScrolled && (location.pathname === '/' || location.pathname === '/about' || location.pathname === '/podcast' || location.pathname === '/contact') && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
      )}

      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: 'var(--container-width)',
      }}>

        {/* Logo Area */}
        <NavLink to="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{
            fontFamily: '"Satisfy", cursive',
            fontSize: '2.2rem',
            color: 'white',
            fontWeight: 700,
            lineHeight: 1,
            marginRight: '12px',
          }}>
            YP
          </span>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.75rem',
            color: 'white',
            textAlign: 'left',
            lineHeight: 1.2,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderLeft: '1px solid rgba(255,255,255,0.4)',
            paddingLeft: '12px',
            marginLeft: '5px'
          }}>
            Yagnesh Pandya<br />Digital Growth
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div style={{
          display: 'none',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-nav">
          {links.map((link) => (
            link.isExternal ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  opacity: 0.9,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-coral)'; e.currentTarget.style.opacity = 1; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.opacity = 0.9; }}
              >
                {link.name} ↗
              </a>
            ) : (
              link.path.startsWith('/#') ? (
                /* Hash links redirect to home first if on other page */
                <a
                  key={link.name}
                  href={link.path}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    opacity: 0.9,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-coral)'; e.currentTarget.style.opacity = 1; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.opacity = 0.9; }}
                >
                  {link.name}
                </a>
              ) : (
                /* Internal Route links */
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-coral)' : 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    opacity: isActive ? 1 : 0.9,
                    transition: 'all 0.2s ease',
                  })}
                >
                  {link.name}
                </NavLink>
              )
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <div style={{ cursor: 'pointer', color: 'white' }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-toggle">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{ position: 'absolute', top: '24px', right: '32px', cursor: 'pointer', color: 'white' }} onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </div>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '1rem 0',
              }}
              target={link.isExternal ? "_blank" : "_self"}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
                @media (min-width: 1024px) {
                  .desktop-nav { display: flex !important; }
                  .mobile-toggle { display: none !important; }
                }
              `}} />
    </nav>
  );
};

export default Navbar;
