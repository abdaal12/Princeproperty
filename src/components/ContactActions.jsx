import { CallIcon, WhatsAppIcon, TelegramIcon } from './Icons.jsx'

const PHONE = '+919592393270'
const WA_NUMBER = '919592393270'
const TELEGRAM_LINK = 'https://t.me/+919592393270'

export default function ContactActions() {
  return (
    <section className="contact-actions-wrap">
      <div className="contact-actions">
        <a className="action-btn ab-call" href={`tel:${PHONE}`}>
          <CallIcon />
          Call
        </a>
        <a
          className="action-btn ab-whatsapp"
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          className="action-btn ab-telegram"
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
          Telegram
        </a>
      </div>
    </section>
  )
}
