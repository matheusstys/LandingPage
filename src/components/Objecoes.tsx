import { useReveal } from '../hooks/useReveal'
import styles from './Objecoes.module.css'

const faqs = [
  {
    q: '"Tá caro."',
    a: (
      <>
        Caro é o que você já gasta todo mês em anúncio pra uma página que
        devolve o visitante.{' '}
        <strong>
          Uma boa página não é gasto — é a torneira que faz esse mesmo dinheiro
          virar venda.
        </strong>
      </>
    ),
  },
  {
    q: '"E se não funcionar comigo?"',
    a: (
      <>
        Você não compra no escuro. A gente constrói junto, etapa por etapa, e{' '}
        <strong>só vai pro ar quando você olhar e disser "é isso".</strong>
      </>
    ),
  },
  {
    q: '"Não tenho tempo pra isso agora."',
    a: (
      <>
        Justamente. Você cuida do seu negócio;{' '}
        <strong>eu cuido da página.</strong> Você só aprova. No ar em 24 horas.
      </>
    ),
  },
  {
    q: '"Já tentei e não deu certo."',
    a: (
      <>
        Tentou com template pronto ou com alguém que entende de conversão? São
        coisas diferentes. <strong>Uma enfeita. A outra vende.</strong>
      </>
    ),
  },
  {
    q: '"24 horas é tempo suficiente pra fazer bem feito?"',
    a: (
      <>
        É exatamente o oposto.{' '}
        <strong>Processos enxutos produzem resultados melhores.</strong> Eu já
        desenvolvi o método, as estruturas e os textos base. O que leva tempo é
        adaptar pro seu negócio — e isso eu faço com foco total nas suas 24
        horas.
      </>
    ),
  },
]

export default function Objecoes() {
  const title = useReveal<HTMLHeadingElement>()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <p className={styles.eyebrow} style={{ textAlign: 'center' }}>
          Antes de você sair
        </p>
        <h2
          ref={title.ref}
          className={`${styles.heading} ${title.visible ? styles.visible : ''}`}
        >
          A real sobre as suas dúvidas
        </h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  q,
  a,
}: {
  q: string
  a: React.ReactNode
}) {
  const { ref, visible } = useReveal<HTMLDetailsElement>()

  return (
    <details
      ref={ref}
      className={`${styles.qa} ${visible ? styles.visible : ''}`}
    >
      <summary className={styles.summary}>
        {q}
        <span className={styles.icon}>+</span>
      </summary>
      <div className={styles.answer}>{a}</div>
    </details>
  )
}
