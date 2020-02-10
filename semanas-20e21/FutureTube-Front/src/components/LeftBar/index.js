import React from "react";
import { 
    LeftBarWrapper,
    FlexDiv,
    LeftButton 
} from "./styled";
import HomeIcon from '@material-ui/icons/Home';

const LeftBar = () => {    
    return <LeftBarWrapper>
        <FlexDiv>
            <HomeIcon 
                color="primary"

            />
            <LeftButton>Home</LeftButton>
        </FlexDiv>            
    </LeftBarWrapper>
};

export default LeftBar;