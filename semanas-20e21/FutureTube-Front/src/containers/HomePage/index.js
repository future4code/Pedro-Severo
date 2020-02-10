import React from "react";
import * as firebase from 'firebase';
import { HomePageWrapper, FlexDivBody } from './styled';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import Header from '../../components/Header';
import Body from '../Body';
import LeftBar from '../../components/LeftBar';

const HomePage = (props) => {
    
    const handleClickLogout = () => {
        firebase.auth().signOut();
        props.goToLoginPage();    
    };

    return (
        <HomePageWrapper>
            <Header 
                handleClickLogout={handleClickLogout}
            />
            <FlexDivBody>
                <LeftBar 
                    
                />
                <Body 
                
                />
            </FlexDivBody>
        </HomePageWrapper>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
      goToLoginPage: () => {dispatch(push(routes.login))}
    };
};

export default connect(null, mapDispatchToProps)(HomePage);