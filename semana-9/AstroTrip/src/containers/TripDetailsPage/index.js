import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, getTripDetail } from "../../actions/trips"


export const TripDetailsPage = (props) => {
    props.getTripDetail()
    return (
        <div>
           <h2>Detalhes da viagem</h2>
           <p>{props.tripsList.name}</p>
        </div>
    )
};


const mapStateToProps = state => ({
    tripsList: state.trips
})

function mapDispatchToProps (dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        getTripDetail: () => dispatch(getTripDetail())
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(TripDetailsPage)