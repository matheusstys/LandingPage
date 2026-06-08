import { links } from '../config'
import { IconArrow } from '../icons'
import styles from './Hero.module.css'

const badges = [
  { label: 'No ar em', highlight: '24 horas' },
  { label: 'Você aprova', highlight: 'cada etapa' },
  { label: 'Pra', highlight: 'quem vive de venda online' },
]

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>Landing pages de alta conversão</p>
        <h1 className={styles.heading}>
          Seu anúncio funciona. Sua página <em>não.</em>
        </h1>
        <p className={styles.sub}>
          Eu construo páginas que pegam o visitante pela mão e não soltam até
          ele clicar em comprar. Sem template genérico, sem enrolação.
        </p>
        <div className={styles.badges}>
          {badges.map((b) => (
            <div key={b.highlight} className={styles.badge}>
              {b.label} <strong>{b.highlight}</strong>
            </div>
          ))}
        </div>
        <a
          href={links.whatsapp('Oi! Quero uma página que vende.')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Quero uma página que vende <IconArrow />
        </a>
        <p className={styles.micro}>
          Resposta em até 1h · Entrega em 24h · Sem compromisso
        </p>
      </div>
    </header>
  )
}
