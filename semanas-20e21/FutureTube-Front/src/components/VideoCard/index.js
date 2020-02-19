import React from "react";
import { 
    VideoCardWrapper, 
    ImageWrapper, 
    VideoInfoWrapper,
    stylesIcon,
    FlexDivInfos,
    Title,
    Autor,
    ViewsAndDate 
} from "./styled";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const VideoCard = () => {
    return (
        <VideoCardWrapper>
            <ImageWrapper 
                src="https://picsum.photos/200/200"
            />
            <VideoInfoWrapper>
                <AccountCircleIcon 
                    style={stylesIcon.bigIcon}
                />
                <FlexDivInfos>
                    <Title>Title</Title>
                    <Autor>Autor</Autor>
                    <ViewsAndDate>Views and date</ViewsAndDate>
                </FlexDivInfos>
            </VideoInfoWrapper>
        </VideoCardWrapper>
    );
};

export default VideoCard;