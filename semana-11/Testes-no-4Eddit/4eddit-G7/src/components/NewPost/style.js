import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const NewPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: white;
  width: 25%;
  min-width: 300px;
  padding: 10px;  
  box-shadow: 0px 3px 5px #aaa;
  border-radius: 5px;
`
export const StyledTitlePost = styled(TextField)`
  width: 100%;
`
export const StyledTextArea = styled(TextField)`
  width: 100%;
`
export const StyledTitle = styled.h2`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: orange;    
`

export const StyledButton = styled(Button)`
  font-family: 'Roboto', sans-serif;
  &:hover {
    font-weight: bold;
  }
`