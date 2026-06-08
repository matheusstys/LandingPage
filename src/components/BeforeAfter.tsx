import { useReveal } from '../hooks/useReveal'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter() {
  const header = useReveal()
  const grid = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>A diferença</p>
          <h2 className={styles.heading}>
            Mesmo produto. Mesma verba. Resultado oposto.
          </h2>
          <p className={styles.lead}>
            À esquerda, a página que faz o cliente fechar a aba. À direita, a
            que faz ele pegar o cartão.{' '}
            <strong>A diferença é o que acontece nesta página.</strong>
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} ${grid.visible ? styles.visible : ''}`}
        >
          <div className={`${styles.mock} ${styles.bad}`}>
            <span className={styles.tag}>Antes</span>
            <div className={styles.content}>
              <p className={styles.big}>Página confusa</p>
              <p className={styles.small}>
                Texto demais, sem chamada clara, lenta pra carregar. O cliente
                desiste.
              </p>
            </div>
          </div>
          <div className={`${styles.mock} ${styles.good}`}>
            <span className={styles.tag}>Depois</span>
            <div className={styles.content}>
              <p className={styles.big}>Página que vende</p>
              <p className={styles.small}>
                Promessa clara, prova, e um único caminho: comprar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
