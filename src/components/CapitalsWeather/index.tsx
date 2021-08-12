import React from 'react'
import styled from 'styled-components'
import { ListForecast } from '../../types'

interface Props {
    capitals: ListForecast[]
}

export default function CapitalsWeather({ capitals }: Props): JSX.Element {

    return (
        <CapitalsWeatherContainer>
            <h2>Capitais</h2>
            <div className="capitals">
                <ul id="title-columns">
                    <li>Min Max</li>
                    <li>Min Max</li>
                </ul>
                <ul id="capitals-columns">
                    {capitals?.map((e, i) => {
                        return (
                            <li key={i} className={i <= 4 ? 'left-column' : 'right-column'}>
                                <span className="min-max">
                                    {e?.main?.temp_min?.toFixed(0)}°
                                    {e?.main?.temp_max?.toFixed(0)}°
                                </span>
                                <span className="cidade">{e?.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </CapitalsWeatherContainer>
    )
}

const CapitalsWeatherContainer = styled.section`
    padding: 24px;
    margin: 0 auto;
    width: 90%;

  
    h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 32px;
        color: #fff;
    }

    .capitals {
        display: flex;
        flex-wrap: wrap;

        #title-columns {
            font-size: 13px;
            font-weight: 100;
            margin: 24px 0px 16px 0px;
        }

        #title-columns,
        #capitals-columns {

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }
        #capitals-columns {
            li {
                padding: 8px 0px;
                margin-bottom: 10px;

                .min-max {
                    margin-right: 16px;
                }
            }
            li span {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    @media (max-width: 500px) {
        .capitals {
            #title-columns {
                li:last-child {
                    display: none;
                }
            }
            #capitals-columns {

                .left-column,
                .right-column {
                    grid-column: 1 / span 5;
                }
            }
        }
       
    }
    @media (min-width: 550px) {
        width: 70%;
        margin: 0 auto;
    }
`