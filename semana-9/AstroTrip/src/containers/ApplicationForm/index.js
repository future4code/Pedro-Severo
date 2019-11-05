import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, getTripDetail } from "../../actions/trips"


export class ApplicationForm extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getTrips()
        this.props.getTripDetail()
    }

    render () {
        return (
            <div>
                <button>
                    Application Form
                </button>
            </div>
        );
    };
};

function mapDispatchToProps (dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        getTripDetail: () => dispatch(getTripDetail())
    };
};

export default connect (
    null,
    mapDispatchToProps
  )(ApplicationForm)