import { useReveal } from '../hooks/useReveal'
import styles from './Virada.module.css'

export default function Virada() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>Agora repara</p>
        <h2 className={styles.heading}>
          Você chegou <em>até aqui.</em> Isso não foi sorte.
        </h2>
        <p className={styles.text}>
          Cada palavra que você leu foi posicionada pra te trazer a este ponto
          exato.{' '}
          <strong>
            Esta é a página que vende o meu serviço. Imagina o que ela faz pelo
            seu.
          </strong>
        </p>
      </div>
    </section>
  )
}
