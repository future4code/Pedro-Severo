import styled from 'styled-components';
import { Button } from "@material-ui/core";

export const HeaderWrapper = styled.div `
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
`;

export const LeftFlexDiv = styled.div`
    width: 15vw;
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
`

export const CenterFlexDiv = styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchBar = styled.input `
    width: 45vw;
    height: 32px;
    font-size: 16px;
    padding-left: 7px;
`

export const SearchButton = styled(Button)`
    height: 32px;
`

export const stylesIcon = {
    mediumIcon: {
      width: 20,
      height: 20,
    },
};

export const RightFlexDiv = styled.div`
    width: 10vw;
    display: flex; 
    align-items: center;
    justify-content: space-between;
`
