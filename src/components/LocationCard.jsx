import { PinIcon } from './Icons.jsx'

export default function LocationCard() {
  return (
    <section className="location">
      <h2>Visit us</h2>
      <a
        className="location-card"
        href="https://www.google.com/maps/search/?api=1&query=Jama+Masjid+Phase+11+Sector+65+Mohali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="location-icon">
          <PinIcon />
        </span>
        <span className="location-text">
          <span className="location-addr">Jama Masjid, Phase 11, Sector 65, Mohali</span>
          <span className="location-cta">Open in Google Maps</span>
        </span>
        <span className="location-arrow">›</span>
      </a>
    </section>
  )
}
