import React from "react";
import styled from "styled-components";

const DayContainer = styled.div`
    width: 13vw;
    min-height: 100vh;
    border-style: solid;
    border-width: thin;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
    return <div>
        <DayContainer>
            <h2>{this.props.name}</h2>
        </DayContainer>
    </div>;
    }
}

export default Day;