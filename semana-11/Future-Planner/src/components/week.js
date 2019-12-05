import React from "react";
import styled from "styled-components";
import Day from "./day";

const WeekWrapper = styled.div `
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
    }
  }
  render() {
    return <WeekWrapper>
      {this.state.days.map(day => {
        return <Day 
          name={day}
        />
      })}
    </WeekWrapper>;
  }
}

export default Week;