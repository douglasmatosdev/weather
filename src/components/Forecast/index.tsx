import React from 'react'
import styled from 'styled-components'

interface Props {

}

export default function Forecast(props: Props): JSX.Element {

    return (
        <ForecastContainer>
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

        </ForecastContainer>
    )
}

const ForecastContainer = styled.section`
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