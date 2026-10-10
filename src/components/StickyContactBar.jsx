import { CallIcon, WhatsAppIcon, TelegramIcon } from './Icons.jsx'

export default function StickyContactBar() {
  return (
    <nav className="contact-bar" aria-label="Contact options">
      <a className="cb-call" href="tel:+919592393270">
        <CallIcon />
        Call
      </a>
      <a
        className="cb-whatsapp"
        href="https://wa.me/919592393270"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a
        className="cb-telegram"
        href="https://t.me/+919592393270"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
        Telegram
      </a>
    </nav>
  )
}
