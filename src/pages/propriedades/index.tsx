import Link from 'next/link';
import { GetStaticProps } from 'next'
import { api } from '../../services/api'

import styles from './styles.module.scss'

type Imovel = {
  id: string;
  name: string;
  daily: string;
  fivedaily: string;
  total: string;
  district: string;
  guests: string;
  cleaning: string;
  surety: string;
}

type CardProps = {
  imoveis: Imovel[];
}

export default function Propriedades( props: CardProps ) {
  return (
    <div className={styles.propriedadesContainer}>
      <div className={styles.title}>
        <h2>Todos os imóveis</h2>
        <span>200 imóveis</span>      
      </div>
      
      <ul className={styles.cardsContainer}>
        
        {  

          props.imoveis.map((imovel) => {
            return(
              <li className={styles.cardContainer} key={imovel.id}>
                <Link href={`imovel/${imovel.id}`}>
                  <a >
            
                    <header>
                      <img className={styles.header} src="/ap01.jpg" alt="Apartamento 01" />

                      <Link href={`#`}>
                          <a href="#">
                          <img className={styles.icons} src="/air-bnb-small.png" alt="Air BNB" />
                          </a>
                      </Link>

                      <Link href={`#`}>
                          <a href="#">
                          <img className={styles.icons} src="/seazone-small.png" alt="Seazone" />
                          </a>
                      </Link>

                    </header>

                    <h2>{imovel.name}</h2>
                    <p>{imovel.district}</p>

                    <div>
                        <span>Valor diária</span>
                        <span>R${imovel.daily} / noite</span>
                    </div>

                    <div>
                        <span>Totral 5 diárias</span>
                        <span>R${imovel.fivedaily}</span>
                    </div>

                    <div>
                        <span>Taxa de limpeza</span>
                        <span>R${imovel.cleaning}</span>
                    </div>

                    <div>
                        <span>Caução:</span>
                        <span>R${imovel.surety}</span>
                    </div>

                    <div>
                        <span><strong>Total:</strong></span>
                        <span>R${imovel.total}</span>
                    </div>              
                  </a>
                </Link>
              </li>
            )
          })
        
        }
        
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('imoveis', {
    params: {
      _limit: 6,
    }
  })
  
  const imoveis = data.map(imovel => {
    return{
      id: imovel.id,
      name: imovel.name,
      daily: imovel.daily,
      fivedaily: imovel.fivedaily,
      total: imovel.total,
      district: imovel.district,
      guests: imovel.guests,
      cleaning: imovel.cleaning,
      surety: imovel.surety,
    }
  })

  return {
    props: {
      imoveis,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  }
}

