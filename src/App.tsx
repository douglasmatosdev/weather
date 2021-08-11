import React from 'react'
import { WeatherContainer } from './styled'
import Search from './components/Search'

import api from './services'
import { ListForecast, ResponseConsult, ResponseConsultForecast } from './types'
import Card from './components/Card'
import Forecast from './components/Forecast'

export default function App(): JSX.Element {
    const [data, setData] = React.useState<ResponseConsult | null>(null)
    const [forecast, setForecast] = React.useState<ListForecast[] | null>(null)

    const filterForecast = (obj: ResponseConsultForecast): ListForecast[] => {
        const temp: ListForecast[] = obj && obj?.list ? obj.list : []

        return temp.filter(e => e.dt_txt.includes('12:00:00'))
    }

    const getForecastCity = (name: string): void => {
        const response = api.getForecastByName(name)
            .then(res => res.cod === '200' && setForecast(filterForecast(res)))
    }
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
                    handlerClick={(name) => {
                        getCity(name)
                        getForecastCity(name)
                    }}
                    placeholder="Insira aqui o nome da cidade"
                />
            </header>

            <hr />

            <Forecast />
        </WeatherContainer>
    )
}