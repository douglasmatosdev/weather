import styled, { css } from 'styled-components'

export const WeatherContainer = styled.main`
    *,
    & {
        font-family: sans-serif;
        box-sizing: border-box;
    }
   
    header {
        padding: 16px 16px 54px 16px;
       
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
        display: inline-block;
    }

    section {
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
    }
`

