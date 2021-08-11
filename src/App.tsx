import React from 'react'
import styled from 'styled-components'
import Search from './components/Search'

import api from './services'
import { ListForecast, ResponseConsult, ResponseConsultForecast } from './types'
import Card from './components/Card'
import Forecast from './components/Forecast'

export default function App(): JSX.Element {
    const [data, setData] = React.useState<ResponseConsult | null>(null)
    const [forecast, setForecast] = React.useState<ListForecast[] | null>(null)
    const [close, setClose] = React.useState(false)

    const handlerClose = () => {
        setClose(!close)
    }
    const filterForecast = (obj: ResponseConsultForecast): ListForecast[] => {
        const temp: ListForecast[] = obj && obj?.list ? obj.list : []

        const forecast = temp.filter(e => e.dt_txt.includes('12:00:00'))
        forecast.pop()

        return forecast
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
                {!close && data && forecast && <Card {...data} forecast={forecast} close={handlerClose} />}
                <Search
                    clear={close}
                    handlerClick={(name) => {
                        getCity(name)
                        getForecastCity(name)
                        setClose(!close ? close : !close)
                    }}
                    placeholder="Insira aqui o nome da cidade"
                />
            </header>

            <hr />

            <Forecast />
        </WeatherContainer>
    )
}

const WeatherContainer = styled.main`
    *,
    & {
        font-family: sans-serif;
        box-sizing: border-box;
    }
   
    header {
        /* padding: 16px 16px 54px 16px; */
       
        display: flex;
        flex-direction: column;

        .main-title {
            font-size: 54px;
            font-weight: 600;
            line-height: 62px;
            margin: 24px;
            color: #fff;
        }
        
        
        
    }

    hr {
        width: 100%;
        margin-top: 24px;
        display: inline-block;
    }

   
`