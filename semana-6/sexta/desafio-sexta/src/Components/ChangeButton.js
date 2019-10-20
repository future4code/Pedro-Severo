import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button `

`

export function ChangeButton(props) {
    return (
        <Button onClick={props.onClickTrocarTela}>
            {props.buttonText}
        </Button>
    )
}