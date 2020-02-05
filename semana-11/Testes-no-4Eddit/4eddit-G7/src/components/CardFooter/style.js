import styled from 'styled-components';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatIcon from '@material-ui/icons/Chat';


export const CardFooterWrapper = styled.div ` 
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-style: solid none none none;
    border-width: thin;
    height: 5vh;
    width: 100%;
`

export const ReactionButtons = styled.div`
    display: flex;
    align-items: center;
`

export const StyledThumbUp = styled(ThumbUpIcon)`
    margin: 5px;
    cursor: pointer;
`

export const StyledThumbDown = styled(ThumbDownIcon)`
    margin: 5px;
    cursor: pointer;
`

export const StyledCommentP = styled.p`
    margin: 0;
    display: flex;
    align-items: center;    
`

export const StyledChatIcon = styled(ChatIcon)`
    margin: 5px;
    cursor: pointer;
`