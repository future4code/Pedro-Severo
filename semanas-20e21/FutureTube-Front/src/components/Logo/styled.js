import styled from 'styled-components';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

export const LogoWrapper = styled.h2 `
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoIcon = styled(PlayCircleFilledWhiteIcon) `
    color: #FF0000;
`

export const LogoText = styled.span `
    color: #000000;
`;
