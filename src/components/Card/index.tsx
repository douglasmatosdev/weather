import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { ListForecast, Main, Sys, Weather, Wind } from '../../types'

interface Props {
    name: string
    main: Main
    weather: Weather
    wind: Wind
    sys: Sys
    forecast: ListForecast[] | null
    close: () => void
}

export default function Card({ name, main, weather, wind, sys, forecast, close }: Props): JSX.Element {


    return (
        <CardContainer>
            <div className="card__header">
                <div className="icon-close" onClick={() => close()}>
                    <IconContext.Provider value={{ size: '24px', color: 'orange', className: 'global-class-name' }}>
                        <FaTimes />
                    </IconContext.Provider>
                </div>
                <h3>{name || 'Rio de Janeiro'} - {sys?.country || 'BR'}</h3>
                <h1>{main?.temp.toFixed(0) || 25}°C {weather && weather[0]?.description || 'Nublado'}</h1>
                <div className="card__box">
                    <div className="card__box-column">
                        <div className="box__column-item">
                            <span className="column__item-value value-icon">
                                <IconContext.Provider value={{ size: '24px', color: 'orange', className: 'global-class-name' }}>
                                    <BsArrowDown />
                                </IconContext.Provider>
                                <span>{main?.temp_min || 15}°</span>
                            </span>
                            <span className="column__item-value value-icon">
                                <IconContext.Provider value={{ size: '24px', color: 'orange', className: 'global-class-name' }}>
                                    <BsArrowUp />
                                </IconContext.Provider>
                                <span>{main?.temp_max || 30}°</span>
                            </span>
                        </div>
                        <div className="box__column-item">
                            <span>Vento</span>
                            <span className="column__item-value">{wind?.speed || 16}km/h</span>
                        </div>
                    </div>
                    <div className="card__box-column">
                        <div className="box__column-item">
                            <span>Sensação</span>
                            <span className="column__item-value">{main?.feels_like || 24}°</span>
                        </div>
                        <div className="box__column-item">
                            <span>Humidade</span>
                            <span className="column__item-value">{main?.humidity || 18}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__body">
                {forecast?.map((e, i) => {
                    return (
                        <div key={i} className="body__day">
                            <h3>Terça</h3>
                            <div>
                                <span>{e.main.temp_min.toFixed(0) || 15}°</span>
                                <span>{e.main.temp_max.toFixed(0) || 26}°</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    .card__header .icon-close {
        position: absolute;
        right: 24px;
    }
    .card__header {
        position: relative;
        padding: 16px;
        background-color: #FDF2E4;
        width: 100%;
       
        
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
                
                .column__item-value:not(.value-icon) {
                   margin-left: 8px;
                }
                .column__item-value {
                    font-weight: 600;

                }
                
            }
            .box__column-item:first-child {
                margin-bottom: 24px;
                margin-left: -8px;
                display: flex;
                height: 24px;
                .value-icon, .value-icon span {
                    display: inline-block;
                }
                .value-icon {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    hr {
        background-color: #ec8a11;
    }

    .card__body {
        padding: 16px;
        margin-top: 1px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-around;
        background-color: #FDF2E4;

        .body__day {
            display: flex;
            flex-direction: column;

            h3 {
                font-weight: bolder;
                font-size: 1.2em;
                margin-bottom: 16px;
            }

            div {
                display: flex;
                justify-content: space-between;
            }

            span {
                font-weight: bolder;
                font-size: 1em;
                color: #ec8a11;
            }
        }
    }
`