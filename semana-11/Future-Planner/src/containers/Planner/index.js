import React from "react";
import { connect } from "react-redux";
import { Week } from "../../components/week";
import { Form } from "../../components/form";

class Planner extends React.Component {
  render() {
    return <div>
      <Form />
      <Week />
    </div>;
  }
}

export default connect()(Planner);
