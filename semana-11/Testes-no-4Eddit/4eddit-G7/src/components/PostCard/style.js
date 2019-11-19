import styled from 'styled-components';

export const PostCardContainer = styled.div`  
  width: 25%;
  min-width: 300px;
  min-height: 150px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 3px 5px #aaa;
  border-radius: 5px;
  
`
export const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 30px;
  color: salmon;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;;
  font-size: 12pt;
  text-transform: lowercase;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  color: orangered;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`

export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightyellow;
  border-radius: 5px;
  padding: 10px;
  color: #804508;
`
export const TextItem = styled.p`
  margin: 0;
`