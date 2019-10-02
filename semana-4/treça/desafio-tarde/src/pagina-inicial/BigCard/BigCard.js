import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';

export function BigCard(props) {
    return (
        <div id='bigCard'>
            <h2>{props.subtitulo}</h2>
            <div>
                <img src={props.imagem} alt="" />
                <article>
                    <p id='descricao'>{props.texto}</p>
                </article>
            </div>
        </div>
    )
}

BigCard.propTypes = {
    subtitulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}

