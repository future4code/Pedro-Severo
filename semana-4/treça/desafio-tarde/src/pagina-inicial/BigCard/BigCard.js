import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div `
    width: 45vw;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`

const TituloBigCard = styled.h2 `
`
const ContentBigCard = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: initial;
`

const Text = styled.article `
    width: 35vw;
`

const CircleImage = styled.img `
    height: 5vw;
    width: 5vw;
    border-radius: 50%;
    display: inline-block;
`

export function BigCard(props) {
    return (
        <Body>
            <TituloBigCard>{props.subtitulo}</TituloBigCard>
            <ContentBigCard>
                <CircleImage src={props.imagem} alt="" />
                <Text>
                    <p id='descricao'>{props.texto}</p>
                </Text>
            </ContentBigCard>
        </Body>
    )
}

BigCard.propTypes = {
    subtitulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}

