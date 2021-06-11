import Link from 'next/link';

import styles from './styles.module.scss'

export default function Header(){
    return(
        <header className={styles.headerContainer}>
            <div>
                <Link href={`/`}><img src="/logo.png" alt="Seazone" /></Link>
                <ul>
                    <Link href={`/calendario`}><a href="/calendario"><li>Calendário</li></a></Link>
                    <Link href={`/clientes`}><a href="/clientes"><li>Clientes</li></a></Link>
                    <Link href={`/orcamentos`}><a href="/orcamentos"><li>Orçamentos</li></a></Link>
                    <Link href={`/propriedades`}><a href="/propriedades"><li>Propriedades</li></a></Link>
                    <Link href={`/controle`}><a href="/controle"><li>Controle</li></a></Link>
                </ul>
            </div>
            <div className={styles.user}>
                <img src="/user.png" alt="User" />
                <select name="" id=""></select>
            </div>
        </header>
    )
}