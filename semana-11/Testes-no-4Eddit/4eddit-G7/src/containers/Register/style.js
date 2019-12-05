import styled from "styled-components";
import { Button, FormControl } from '@material-ui/core';

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: bisque;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    min-width: 300px;
    margin: auto;
    border: 1px solid orange;
    border-radius: 5px;
    background-color: white;
`

export const StyledFormControl = styled(FormControl)`
    display: flex;
    flex-direction: column;
    padding: 0 6%;    
    width: 100%;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: darkorange;
`

export const StyledButton = styled(Button)`
    margin-top: 20px;
    &:hover {
        font-weight: bold;        
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
`