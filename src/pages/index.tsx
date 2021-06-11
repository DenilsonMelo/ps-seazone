import styles from '../styles/app.module.scss'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <h1>Página em branco</h1>  
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/imoveis')
  const data = await response.json()

  return {
    props: {
      imoveis: data,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  }
}
