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

export default ApplicationForm