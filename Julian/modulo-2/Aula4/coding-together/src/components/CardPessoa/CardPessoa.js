import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
`

const NomeContainer = styled.p`
    margin-right: 20px;
`

const IdadeContainer = styled.p`
    color: orange;
`

const CardPessoa = (props) => {
    return (
        <CardContainer>
            <NomeContainer>{props.nome}</NomeContainer>
            <IdadeContainer>{props.idade}</IdadeContainer>
        </CardContainer>
    )
}

export default CardPessoa