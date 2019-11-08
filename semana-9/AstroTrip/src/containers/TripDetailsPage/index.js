import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTripDetail } from "../../actions/trips";


export class TripDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount = () => {
        this.props.getTripDetail(this.props.id);
        console.log(this.props.trip.name);

        const token = window.localStorage.getItem("token");

        if (!token) {
            this.props.goToHome();
        };
    };

    render() {
        return (
            <div>
                <h2>Detalhes da viagem</h2>
                <p>{this.props.trip.description}</p>
                <p>{this.props.trip.planet}</p>
                <p>{this.props.trip.durationInDays}</p>
                <p>{this.props.trip.date}</p>
                <h2>Candidatos</h2>
                {this.props.trip.candidates.map(candidate => (
                    <div>
                        <p>{candidate.name}</p>
                        <p>{candidate.age}</p>
                        <p>{candidate.profession}</p>
                        <p>{candidate.applicationText}</p>
                        <p>{candidate.country}</p>
                    </div>
                ))}
            </div>
        );
    };
};


const mapStateToProps = state => ({
    id: state.id,
    trip: state.trip,
});

function mapDispatchToProps (dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        getTripDetail: (id) => dispatch(getTripDetail(id)),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(TripDetailsPage);