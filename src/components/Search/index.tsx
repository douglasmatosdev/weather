import React from 'react'
import styled from 'styled-components'

import { FaSearch } from 'react-icons/fa'

interface Props {
    name?: string
    type?: string
    placeholder?: string
    handlerClick: (name: string) => void
}

export default function Search(props: Props): JSX.Element {
    const { name, type = 'text', placeholder, handlerClick } = props

    const [state, setState] = React.useState({ value: '' })

    return (
        <InputContainer>
            <input
                name={name}
                type={type}
                value={state.value}
                placeholder={placeholder}
                onChange={(event: any): void => {
                    setState({ ...state, value: event.target.value })
                }}
                onKeyUp={(event: any) => {
                    if (event.keyCode === 13) {
                        event.preventDefault()

                        handlerClick(state.value)
                    }
                }}
            />

            <button onClick={() => handlerClick(state.value)}>
                <FaSearch />
            </button>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    
    input {
        width: 100%;
        height: 48px;
        padding-left: 16px;
        font-size: 16px;
    }
    button {
        position: absolute;
        right: 0;
        width: 48px;
        height: 100%;
        border: none;
        background: none;
        font-size: 24px;
        cursor: pointer;
    }
`