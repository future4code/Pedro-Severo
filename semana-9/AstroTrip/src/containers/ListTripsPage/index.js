import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, getTripDetail } from "../../actions/trips"

export const ListTripsPage = (props) => {
    props.getTrips()
    return (
        <div>
            <h2>Lista de viagens</h2>
            {props.tripsList.map(trip => (
                <li>{trip.name}</li>
            ))}
        </div>
    )
};

const mapStateToProps = state => ({
    tripsList: state.trips
})

function mapDispatchToProps (dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ListTripsPage)