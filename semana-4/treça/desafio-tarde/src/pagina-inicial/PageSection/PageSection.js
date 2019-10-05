import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div `
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`


export function PageSection(props) {
    return (
        <Body>
            <h1>{props.titulo}</h1>
            <div>{props.children}</div>
        </Body>
    )
}

PageSection.propTypes = {
    titulo: PropTypes.string.isRequired,
}