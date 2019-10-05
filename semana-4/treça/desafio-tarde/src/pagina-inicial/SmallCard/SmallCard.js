import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div `
    border-style: solid;
    width: 45vw;
    margin-top: 20px;
`

const ImageIcon = styled.img `
`

export function SmallCard(props) {
    return (
        <Body>
            <ImageIcon src="" />
            <p>{props.dados}</p>
        </Body>
    )
}

SmallCard.propTypes = {
    dados: PropTypes.string.isRequired,
}