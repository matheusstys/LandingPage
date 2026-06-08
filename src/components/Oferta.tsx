import { links } from '../config'
import { useReveal } from '../hooks/useReveal'
import { IconArrow, IconCheck } from '../icons'
import styles from './Oferta.module.css'

const items = [
  'Copy de alta conversão escrita do zero pro seu público',
  'Design responsivo, rápido e que abre lindo no celular',
  'Estrutura testada: promessa, prova, oferta e CTA no lugar certo',
  'Botões integrados ao seu WhatsApp ou checkout',
  'Você acompanha e aprova cada etapa',
  <>Entrega no ar em <strong>24 horas</strong></>,
]

export default function Oferta() {
  const header = useReveal()
  const card = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>A oferta</p>
          <h2 className={styles.heading}>
            Tudo que sua página precisa pra vender.
          </h2>
          <p className={styles.sub}>Uma oferta. Sem letra miúda.</p>
        </div>

        <div
          ref={card.ref}
          className={`${styles.card} ${card.visible ? styles.visible : ''}`}
        >
          <p className={styles.planName}>Página que Vende</p>
          <p className={styles.planSub}>
            Do briefing ao "no ar" em 24h, feita pra converter.
          </p>
          <p className={styles.anchor}>Agências cobram R$ 3.000+</p>
          <p className={styles.price}>
            R$ 497 <small>à vista</small>
          </p>
          <p className={styles.priceNote}>
            Menos que uma semana de tráfego queimado.
          </p>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>
                  <IconCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={links.whatsapp('Quero minha página por R$497')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Quero a minha por R$ 497 <IconArrow />
          </a>
        </div>

        <p
          className={`${styles.compare} ${card.visible ? styles.visible : ''}`}
        >
          Uma página que converte só 5% a mais{' '}
          <strong>se paga no primeiro mês de anúncio.</strong>
        </p>
      </div>
    </section>
  )
}
