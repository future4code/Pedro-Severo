import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types';

export function PageSection(props) {
    return (
        <div id="pageSection">
            <h1>{props.titulo}</h1>
            <div>{props.children}</div>
        </div>
    )
}

PageSection.propTypes = {
    titulo: PropTypes.string.isRequired,
}