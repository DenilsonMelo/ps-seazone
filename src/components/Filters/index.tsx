import { useState } from 'react'

import styles from './styles.module.scss'

export default function Filters(){
    const [counter, updateCounter] = useState(1);

    const handleDecrement = () => counter > 1 ? updateCounter(counter - 1) : updateCounter(counter + 0)
    const handleIncrement = () => updateCounter(counter + 1)

    return(
        <div className={styles.filtersContainer}>
            <form action="/">
                <div>
                    <label>Localização</label>
                    <select id="localization">
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Blumenau">Blumenau</option>
                    </select>
                </div>
                
                <div>
                    <label>Preço</label>
                    <select id="price">
                        <option value="1">100-1000</option>
                        <option value="2">1001-2500</option>
                    </select>
                </div>
                
                <div>
                    <label>Check-in</label>
                    <input id="date" type="date"></input>
                </div>
                
                <div>
                    <label>Check-out</label>
                    <input id="date" type="date"></input>
                </div>
                
                <div>
                    <label>N° de hóspedes</label>
                    <div>
                        <p onClick={handleDecrement}>-</p>
                        <label>{counter}</label>
                        <p onClick={handleIncrement}>+</p>
                    </div>         
                </div>

                <div>
                    <button>Buscar</button>
                </div>

                <div>
                    <span>+ Mais filtros</span>
                </div>
            </form>
            
        </div>
    )
}
