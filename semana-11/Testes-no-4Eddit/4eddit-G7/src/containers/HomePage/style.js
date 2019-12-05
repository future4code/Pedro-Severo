import { Button, FormControl, TextField } from '@material-ui/core';
import styled from "styled-components";

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: auto;
    min-width: 900px;
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
    font-family: 'Roboto', sans-serif;
    color: darkorange;
`

export const StyledTextField = styled(TextField)`
    margin: 10px;
`

export const StyledFormControl = styled(FormControl)`
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
`

export const StyledButton = styled(Button)`
    margin: 5% 3%;
    &:hover {
        font-weight: bold;        
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;    
`