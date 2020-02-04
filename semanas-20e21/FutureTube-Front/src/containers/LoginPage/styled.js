import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const LoginWrapper = styled.div `
    padding-top: 3.5vw;
    display: flex;
    justify-content: center;
`

export const ContainerLoginPage = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40vw;
`;

export const TextEnter = styled.div `
    font-size: 18px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
    margin-bottom: 18px;
`;

export const InputUserName = styled(TextField)`
    margin-top: 20px;
    width: calc(100% - 32px);
    height: 56px;  
`

export const InputEmail = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const InputPassword = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const TextRegisterUser = styled.div `
    font-size: 16px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
`;

export const GoToSignUp = styled.a `
    color: black;
`;

export const ErrorMessage = styled.p`
    color: red;
`;