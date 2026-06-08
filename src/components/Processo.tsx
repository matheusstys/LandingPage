import { useReveal } from '../hooks/useReveal'
import styles from './Processo.module.css'

const steps = [
  {
    num: '01',
    when: 'Hoje',
    title: 'Briefing pelo WhatsApp',
    desc: 'Me conta sobre seu produto, público e o que você já testou. Leva menos de 15 minutos.',
  },
  {
    num: '02',
    when: 'Nas primeiras horas',
    title: 'Copy + estrutura',
    desc: 'Escrevo a copy de conversão e monto a estrutura visual da página do zero.',
  },
  {
    num: '03',
    when: 'Você aprova',
    title: 'Revisão e ajustes',
    desc: 'Você vê, pede o que quiser mudar. Nada vai ao ar sem o seu OK.',
  },
  {
    num: '04',
    when: 'Em 24h',
    title: 'No ar e vendendo',
    desc: 'Página publicada, integrada ao seu WhatsApp ou checkout. Pronto pra receber tráfego.',
  },
]

export default function Processo() {
  const header = useReveal()
  const grid = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>Como funciona</p>
          <h2 className={styles.heading}>Do briefing ao ar em 24 horas.</h2>
          <p className={styles.lead}>
            Um processo enxuto feito pra não desperdiçar o seu tempo — nem o
            meu.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} ${grid.visible ? styles.visible : ''}`}
        >
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <p className={styles.stepNum}>{step.num}</p>
              <span className={styles.stepWhen}>{step.when}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
