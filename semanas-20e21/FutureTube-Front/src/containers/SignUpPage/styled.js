import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const SignUpWrapper = styled.div `
    padding-top: 4vw;
    display: flex;
    justify-content: center;
`;

export const ContainerSignUpPage = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40vw;
`;

export const TextRegister = styled.div `
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    height: 18px; 
    margin-top: 10px;  
`;

export const InputName = styled(TextField) `
    margin-top: 20px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputEmail = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputPassword = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputPasswordConfirmation = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: ${props => props.height};
    margin-bottom: 16px;
`