import ContactActions from '../components/ContactActions.jsx'
import LocationCard from '../components/LocationCard.jsx'

const PRINT_SERVICES = ['Visiting Cards', 'Banners', 'Flex Printing']

export default function PrintingJobs() {
  return (
    <>
      {/* HERO / TITLE */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-tag">PRINTING · DESIGN · JOB HUB</div>
          <h1 className="brand-title">
            PRINCE Jobs and Printing Works
          </h1>
        </div>
      </header>

      <ContactActions />

      {/* PRINT SHOP LISTING */}
      <section className="listings">
        <div className="listings-head">PRINT SHOP</div>
        <div className="listings-title">Fast prints, done right</div>

        <div>
          {PRINT_SERVICES.map((name) => (
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
          <h2>Need something printed today?</h2>
          <p>
            Send us your design or details over WhatsApp — we'll quote you a price and
            timeline the same day.
          </p>
        </div>
      </section>

      {/* JOB HUB */}
      <section className="steps">
        <h2>Job Hub</h2>
        <p className="steps-intro">
          Looking for work? We share current job openings from local businesses and
          shops around Mohali. Here's how it works.
        </p>
        <div className="step">
          <div className="step-num">1</div>
          <div className="step-body">
            <h3>Send your details</h3>
            <p>Share your name, the kind of work you're looking for, and your contact number over Call or WhatsApp.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <div className="step-body">
            <h3>We check current openings</h3>
            <p>We match you against job openings we currently know of in the area.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-body">
            <h3>Get connected</h3>
            <p>If there's a match, we pass your details on to the employer directly.</p>
          </div>
        </div>
      </section>

      <LocationCard />

      <footer>
        PrinceKing Property · Printing & Job Hub · 95923-93270 · 90411-53111
      </footer>
    </>
  )
}
