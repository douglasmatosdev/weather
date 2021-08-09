import React from 'react'
import { WeatherContainer } from './styled'
import Search from './components/Search'

import api from './services'
import { ResponseConsult } from './types'
import Card from './components/Card'

export default function App(): JSX.Element {
    const [data, setData] = React.useState<ResponseConsult | null>(null)

    const getCity = (name: string): void => {
        const response = api.getByName(name)
            .then(res => res.cod == 200 && setData(res))
    }
    return (
        <WeatherContainer>
            <header>
                <h1 className="main-title">Previsão do tempo</h1>
                {data && <Card {...data} />}
                <Search
                    handlerClick={getCity}
                    placeholder="Insira aqui o nome da cidade"
                />
            </header>
            <hr />
            <section>
                <h2>Capitais</h2>
                <div className="capitais">
                    <ul>
                        <h5>Min Max</h5>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                    </ul>
                    <ul>
                        {/* <h5>Min Max</h5> */}
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                        <li>
                            <span className="min-max">10° 27°</span><span className="cidade">Rio de Janeiro</span>
                        </li>
                    </ul>
                </div>

            </section>
        </WeatherContainer>
    )
}