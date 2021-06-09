import { BiDonateBlood, BiWifi } from 'react-icons/bi';
import { GiSoap } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { RiParkingBoxLine, RiUserSettingsLine } from "react-icons/ri";
import { GrElevator } from "react-icons/gr";
import { MdPool } from "react-icons/md";
import { IoSnow } from "react-icons/io5";

import styles from './styles.module.scss'

export default function Imovel(){
    return(
        <div className={styles.imovelContainer}>
            <div className={styles.category}>
                <span>Imóveis > Jurerê internacional</span>      
            </div>
            <section>
                <div className={styles.sideLeft}>
                    <img src="/ap01-large.jpg" alt="Vista do apartamento" />
                    <h3>Localização</h3>
                    <p>Av. Búzios 1800, Jurerê internacional, Florianópolis - SC, CEP 89650-100</p>
                    <span>Ver localização</span>
                </div>
                
                <div className={styles.sideRight}>
                    <h2>ILC2307 - Suite Top vista mar resort Jurerê</h2>
                    <p>Jurerê Internacional, Florianópolis</p>
                    <span>2 quartos, 3 camas, 2 banheiros</span>
                    
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoContainer}>
                            <span>Máx de hóspedes</span>
                            <div>
                                <span><FiUsers size={20}/></span>
                                <p>6</p>
                            </div>
                        </div>

                        <div className={styles.cardInfoContainer}>
                            <span>Taxa de limpeza</span>
                            <div>
                                <span><GiSoap size={20}/></span>
                                <p>R$50,00</p>
                            </div>
                        </div>

                        <div className={styles.cardInfoContainer}>
                            <span>Caução</span>
                            <div>
                                <span><BiDonateBlood size={20}/></span>
                                <p>R$700,00</p>
                            </div>
                        </div>
                    </div>

                    <h3>Camas</h3>
                    <div className={styles.infos}>
                        <p><strong>● 1 cama de casal: </strong>dupla</p>
                        <p><strong>● 1 sofá cama: </strong>sala/área comum</p>
                    </div>

                    <h3>Regras</h3>
                    <div className={styles.infos}>
                        <div>
                            <p>Aceita crianças(de 02 até 12 anos)</p>
                            <p>Aceita bebês(abaixo de 02 anos)</p>
                            <p>Fornece berços</p>
                        </div>
                        <div>
                            <p>Permitido fumar no quarto</p>
                            <p>Aceita animais de estimação</p>
                        </div>
                    </div>

                    <h3>Comodidades</h3>
                    <div className={styles.infos}>
                        <ul>
                            <div>
                                <li> <RiParkingBoxLine /> Estacionamento</li>
                                <li> <GrElevator /> Elevador</li>
                                <li> <RiUserSettingsLine /> Porteiro</li>
                            </div>
                            <div>
                                <li> <MdPool /> Piscina</li>
                                <li> <BiWifi /> Wi-Fi</li>
                                <li> <IoSnow /> Ar-Condicionado</li>
                            </div>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}