import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api';

import { BiDonateBlood } from 'react-icons/bi';
import { GiSoap } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

import styles from './styles.module.scss'

type Imovel = {
    id: string;
    name: string;
    daily: string;
    fivedaily: string;
    total: string;
    localization: string;
    district: string;
    description: string;
    guests: string;
    cleaning: string;
    surety: string;
    beds: string[];
    rules: string[];
    amenities: string[];
}

type ImovelProps = {
    imovel: Imovel;
}

export default function Imovel( {imovel}: ImovelProps ){
    const beds = [...imovel.beds]
    const rules = [...imovel.rules]
    const amenities = [...imovel.amenities]

    const bedList = beds.map((bed, index) =>
        <li key={index}>{bed}</li>
    );

    const ruleList = rules.map((rule, index) =>
        <p key={index}>{rule}</p>
    );

    const amenitieList = amenities.map((amenitie, index) =>
        <li key={index}>{amenitie}</li>
    );
    
    return(
        <div className={styles.imovelContainer}>
            <div className={styles.category}>
                <span>Imóveis ➜ Jurerê internacional</span>      
            </div>
            
            <section>
                <div className={styles.sideLeft}>
                    <img src="/ap01-large.jpg" alt="Vista do apartamento" />
                    <h3>Localização</h3>
                    <p>{imovel.localization}</p>
                    <span>Ver localização</span>
                </div>
                
                <div className={styles.sideRight}>
                    <h2>{imovel.name}</h2>
                    <p>{imovel.district}</p>
                    <span>{imovel.description}</span>
                    
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoContainer}>
                            <span>Máx de hóspedes</span>
                            <div>
                                <span><FiUsers size={20}/></span>
                                <p>{imovel.guests}</p>
                            </div>
                        </div>

                        <div className={styles.cardInfoContainer}>
                            <span>Taxa de limpeza</span>
                            <div>
                                <span><GiSoap size={20}/></span>
                                <p>R${imovel.cleaning}</p>
                            </div>
                        </div>

                        <div className={styles.cardInfoContainer}>
                            <span>Caução</span>
                            <div>
                                <span><BiDonateBlood size={20}/></span>
                                <p>R${imovel.surety}</p>
                            </div>
                        </div>
                    </div>

                    <h3>Camas</h3>
                    <div className={styles.infos}>
                        <ul>{bedList}</ul>
                    </div>

                    <h3>Regras</h3>
                    <div className={styles.infos}>
                        <div>
                            {ruleList}
                        </div>
                    </div>

                    <h3>Comodidades</h3>
                    <div className={styles.infos}>
                        <ul>
                            {amenitieList}
                        </ul>
                    </div>
                </div>    
            </section>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    return{
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    
    const { data } = await api.get(`/imoveis/${slug}`)

    const imovel =  {
        id: data.id,
        name: data.name,
        daily: data.daily,
        fivedaily: data.fivedaily,
        total: data.total,
        localization: data.localization,
        district: data.district,
        description: data.description,
        guests: data.guests,
        cleaning: data.cleaning,
        surety: data.surety,
        beds: data.beds,
        rules: data.rules,
        amenities: data.amenities,
    }

    return{
        props: {
            imovel,
        },
        revalidate: 60 * 60 * 24 // 24 horas
    }
     
}