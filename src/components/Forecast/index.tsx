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

`