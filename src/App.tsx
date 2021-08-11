import React from 'react'
import styled from 'styled-components'
import Search from './components/Search'

import api from './services'
import { filterForecast, groupId, sortId } from './utils'
import { ListForecast, ResponseConsult, ResponseConsultForecast, ResponseConsultGroupForecast } from './types'
import Card from './components/Card'
import CapitalsWeather from './components/CapitalsWeather'

export default function App(): JSX.Element {
    const [data, setData] = React.useState<ResponseConsult | null>(null)
    const [forecast, setForecast] = React.useState<ListForecast[] | null>(null)
    const [capitals, setCapitals] = React.useState<ListForecast[] | null>(null)
    const [close, setClose] = React.useState(false)

    const getForecastCity = (name: string): void => {
        const response = api.getForecastByName(name)
            .then(res => res.cod == '200' && setForecast(filterForecast(res)))
    }
    const getCityByName = (name: string): void => {
        const response = api.getByName(name)
            .then(res => res.cod == '200' && setData(res))
    }

    const getCityByGroupId = (groupId: number[]): void => {
        const response = api.getByGroupId(groupId)
            .then(res => res && res?.list && setCapitals(res?.list))
    }

    React.useEffect(() => {
        if (groupId && groupId?.length) {
            const group = sortId(groupId)
            getCityByGroupId(group)
        }
    }, [groupId])

    return (
        <WeatherContainer>
            <header>
                <h1 className="main-title">Previsão do tempo</h1>
                {!close && data && forecast && <Card {...data} forecast={forecast} close={() => setClose(!close)} />}
                <Search
                    clear={close}
                    handlerClick={(name) => {
                        getCityByName(name)
                        getForecastCity(name)
                        setClose(!close ? close : !close)
                    }}
                    placeholder="Insira aqui o nome da cidade"
                />
            </header>

            <hr />

            {capitals && <CapitalsWeather capitals={capitals} />}
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