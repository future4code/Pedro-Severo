import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const NewVideoFormContainer = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40vw;
`;

export const CreateVideoText = styled.div `
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
    margin-bottom: 18px;
`;

export const InputUserName = styled(TextField)`
    margin-top: 20px;
    width: calc(100% - 32px);
    height: 56px;  
`;

export const InputVideoUrl = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const InputVideoTitle = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;

export const InputVideoDescription = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`;