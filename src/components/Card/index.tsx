import Link from 'next/link';

import styles from './styles.module.scss'

export default function Card(){
    return(
        <div className={styles.cardContainer}>
            <Link href={`/imovel`}><a href="/imovel">
            
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

                <h2>ILC2307 - Suite Top vista mar resort Jurere</h2>
                <p>Jurerê Internacional - 8 hóspedes - 2 quartos</p>

                <div>
                    <span>Valor diária</span>
                    <span>R$700,00 / noite</span>
                </div>

                <div>
                    <span>Totral 5 diárias</span>
                    <span>R$3500,00</span>
                </div>

                <div>
                    <span>Taxa de limpeza</span>
                    <span>R$200,00</span>
                </div>

                <div>
                    <span>Caução:</span>
                    <span>R$1850,00</span>
                </div>

                <div>
                    <span><strong>Total:</strong></span>
                    <span>R$3700,00 | R$3300,00</span>
                </div>              
            </a></Link>
        </div>
    )
}
