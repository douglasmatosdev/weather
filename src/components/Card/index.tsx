import React from 'react'
import styled from 'styled-components'
import { Main, Sys, Weather, Wind } from '../../types'

interface Props {
    name: string
    main: Main
    weather: Weather
    wind: Wind
    sys: Sys
}

export default function Card({ name, main, weather, wind, sys }: Props): JSX.Element {

    return (
        <CardContainer>
            <div className="card__header">
                <h3>{name || 'Rio de Janeiro'} - {sys?.country || 'BR'}</h3>
                <h1>{main?.temp || 25}°C {weather && weather[0]?.description || 'Nublado'}</h1>
                <div className="card__box">
                    <div className="card__box-column">
                        <div className="box__column-item">
                            <span>{main?.temp_min || 15}°</span>
                            <span>{main?.temp_min || 30}°</span>
                        </div>
                        <div className="box__column-item">
                            <span>Vento</span>
                            <span>{wind?.speed || 16}km/h</span>
                        </div>
                    </div>
                    <div className="card__box-column">
                        <div className="box__column-item">
                            <span>Sensação</span>
                            <span>{main?.feels_like || 24}°</span>
                        </div>
                        <div className="box__column-item">
                            <span>Humidade</span>
                            <span>{main?.humidity || 18}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card__body">

            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    .card__header {

        background-color: #fff;
        width: 100%;
        padding: 16px;
        margin-bottom: 16px;
        
        &, span {
            font-size: 16px;
            line-height: 16px;
        }
        
        
        h1, h3 {
            color: #000;
            font-weight: 600;
            line-height: 24px;
        }
        h3 { 
            font-size: 16px;
            margin: 0 16px 16px 16px;
        }
        h1 { 
            font-size: 32px;
            margin: 24px 16px;
        }
        
        .card__box {
            display: flex;
            padding: 0 16px;
            
            .card__box-column {
                flex: 1;
            }
            .box__column-item {
                
                span:last-child {
                    margin-left: 8px;
                    font-weight: 600;
                }
            }
            .box__column-item:first-child {
                margin-bottom: 24px;
                
            }
        }
    }

    hr {
        background-color: #ec8a11;
    }
`