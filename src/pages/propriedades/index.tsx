import Card from '../../components/Card'

import styles from './styles.module.scss'

export default function Propriedades() {
  return (
    <div className={styles.propriedadesContainer}>
      <div className={styles.title}>
        <h2>Todos os imóveis</h2>
        <span>200 imóveis</span>      
      </div>
      
      <ul className={styles.cardsContainer}>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
      </ul>
    </div>
  )
}