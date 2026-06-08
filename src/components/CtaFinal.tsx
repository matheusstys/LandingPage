import { links } from '../config'
import { useReveal } from '../hooks/useReveal'
import { IconArrow } from '../icons'
import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden />
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>Última coisa</p>
        <h2 className={styles.heading}>
          Cada dia que passa, seu concorrente está fechando a venda que era{' '}
          <em>sua.</em>
        </h2>
        <p className={styles.text}>
          Você já tem o produto. Já tem o tráfego. Só falta a página que
          transforma um no outro. Em 24 horas, ela pode estar no ar.
        </p>
        <a
          href={links.whatsapp('Quero começar agora')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Quero começar agora <IconArrow />
        </a>
      </div>
    </section>
  )
}
