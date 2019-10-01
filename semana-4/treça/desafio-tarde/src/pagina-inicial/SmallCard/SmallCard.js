import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';

export function SmallCard(props) {
    return (
        <div id="dados">
            <p>{props.dados}</p>
        </div>
    )
}

SmallCard.propTypes = {
    dados: PropTypes.string.isRequired,
}