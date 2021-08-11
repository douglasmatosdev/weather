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
            <div className="capitais">
                <ul>
                    <h5>Min Max</h5>
                    {capitals?.map((e, i) => {
                        return (
                            <li key={i}>
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
    h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 32px;
        color: #fff;
    }

    .capitais {
        h5 {
            font-size: 13px;
            font-weight: 100;
            margin: 24px 0px 16px 0px;
        }
        &, ul {
            display: flex;
        }
        flex-wrap: wrap;
        ul {
            width: 100%;
            /* border: 1px solid #000; */
            flex-direction: column;

            li {
                padding: 8px 0px;

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
`