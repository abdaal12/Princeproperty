import ContactActions from '../components/ContactActions.jsx'
import LocationCard from '../components/LocationCard.jsx'

const CATEGORIES = [
  'PG — Boys / Girls',
  'Rooms / Flats',
  "1 / 2 / 3 BHK's Flats",
  'Hostels — Boys / Girls',
  'Kothis / Villas / Resorts',
  'Hotels / Motels / Cafés',
  'Shops / Cabins / Showrooms',
  'Warehouses / Storage',
  'Industrial Plots',
  'Exhibitions & Fairs',
  'Commercial Stalls',
]

export default function Property() {
  return (
    <>
      {/* HERO / TITLE */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-tag">TO-LET · BUY · SELL · ORGANIZER</div>
          <h1 className="brand-title">
            PRINCE PROPERTY
          </h1>
        </div>
      </header>

      {/* CARD IMAGE */}
      <section className="card-image-wrap">
        <img
          className="card-image"
          src={`${import.meta.env.BASE_URL}images/to-let-card.jpg`}
          alt="To-Let / Lease — PG Boys/Girls, Rooms/Flats, Shops/Cabins — PrinceKing Property"
        />
      </section>

      <ContactActions />

      {/* OTHER SERVICES CARD */}
      <section className="services-wrap">
        <div className="services-card">
          <div className="services-line services-head">OTHER SERVICES</div>
          <div className="services-line">FOOD / LAUNDRY / WI-FI</div>
          <div className="services-line">AMBULANCE / HOUSEKEEPING</div>
          <div className="services-line">POLICE VERIFICATION</div>
          <div className="services-footer">
            M. 95923-93270, 90411-53111
            <br />
            Prince Property, Phase-11, Sector-65, Mohali
          </div>
        </div>
      </section>

      {/* CATEGORY LISTING */}
      <section className="listings">
        <div className="listings-head">WHAT WE HANDLE</div>
        <div className="listings-title">Every kind of space, one number away</div>

        <div>
          {CATEGORIES.map((name) => (
            <div className="cat-row" key={name}>
              <span className="cat-mark">›</span>
              <span className="cat-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STRIP */}
      <section className="strip">
        <div className="strip-inner">
          <h2>We don't just list. We organize.</h2>
          <p>
            Buying, selling, or renting — we handle the search, the visits, and the
            paperwork so you don't have to run around the city for it.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How it works</h2>
        <div className="step">
          <div className="step-num">1</div>
          <div className="step-body">
            <h3>Tell us what you need</h3>
            <p>Call or message us with your requirement and budget.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <div className="step-body">
            <h3>We shortlist options</h3>
            <p>Matched from our current listings across the categories above.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-body">
            <h3>You visit and decide</h3>
            <p>We arrange site visits and handle the back-and-forth with the other party.</p>
          </div>
        </div>
      </section>

      <LocationCard />

      <footer>
        PrinceKing Property · TO-LET · Buy / Sell / Organizer · 95923-93270 · 90411-53111
      </footer>
    </>
  )
}
