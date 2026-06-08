import { useReveal } from '../hooks/useReveal'
import styles from './Dor.module.css'

export default function Dor() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>O problema</p>
        <h2 className={styles.heading}>
          Você está pagando pra levar gente até uma porta trancada.
        </h2>
        <p>
          Você conhece essa sensação: o anúncio está rodando, o dinheiro saindo
          da conta todo dia, as visitas aparecem no painel… e as vendas, não.
          Você atualiza a tela esperando uma notificação que não chega. Começa a
          duvidar do produto. Do nicho.{' '}
          <span className={styles.highlight}>De você.</span>
        </p>
        <p>
          O problema não é nenhum desses. É que o cliente chega na sua página,
          bate o olho, não entende em 3 segundos o que você oferece — e some.
          Pra sempre. Você pagou por aquele clique e ele evaporou. De novo. E de
          novo.
        </p>
      </div>
    </section>
  )
}
