import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, setID } from "../../actions/trips"
import TripCreationForm from "../../components/TripCreationForm";



export const ListTripsPage = (props) => {
    const returnTripDetail = id => {
        props.setID(id);
        props.goToTripsDetails();
    }
    props.getTrips()
    return (
        <div>
            <div>
                <h2>Lista de viagens</h2>
                {props.tripsList.map(trip => (
                    <li onClick={() => {returnTripDetail(trip.id)}}>{trip.name}</li>
                ))}
            </div>
            <TripCreationForm />
        </div>
    )
};

const mapStateToProps = state => ({
    tripsList: state.tripList
})

function mapDispatchToProps (dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        setID: (id) => dispatch(setID(id)),
        goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ListTripsPage)