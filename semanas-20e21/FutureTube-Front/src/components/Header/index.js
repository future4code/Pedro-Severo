import React from "react";
import { 
    HeaderWrapper, 
    LeftFlexDiv, 
    SearchBar, 
    CenterFlexDiv,
    SearchButton,
    stylesIcon,
    RightFlexDiv 
} from "./styled";
import Logo from "../Logo";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
    
    const handleClickLogout = () => {
        props.handleClickLogout();
    };

    return (
        <HeaderWrapper >
            <LeftFlexDiv>
                <MenuIcon 
                    color="secondary"
                />
                <Logo />
            </LeftFlexDiv>
            <CenterFlexDiv>
                <SearchBar 
                    placeholder="Search"
                />
                <SearchButton
                    variant="outlined"
                >
                    <SearchIcon
                        style={stylesIcon.mediumIcon}
                    />
                </SearchButton>
            </CenterFlexDiv>
            <RightFlexDiv>
                <ExitToAppIcon
                    onClick={handleClickLogout} 
                    color="secondary"
                />
                <VideoCallIcon 
                    color="secondary"                
                />
                <AccountCircleIcon 
                    color="secondary"
                />
            </RightFlexDiv>
        </HeaderWrapper>
    );
};

export default Header