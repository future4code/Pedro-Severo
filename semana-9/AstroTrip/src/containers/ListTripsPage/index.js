import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, setID } from "../../actions/trips"
import TripCreationForm from "../../components/TripCreationForm";


export class ListTripsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    componentDidMount = () => {
        this.props.getTrips()
        const token = window.localStorage.getItem("token");
        // if (!token) {
        //     this.props.goToHome();
        // }
    }

    returnTripDetail = id => {
        this.props.setID(id);
        this.props.goToTripsDetails();        
    }


    render () {
        return (
            <div>
                <div>
                    <h2>Lista de viagens</h2>
                    {this.props.tripsList.map(trip => (
                        <li onClick={() => {this.returnTripDetail(trip.id)}}>{trip.name}</li>
                    ))}
                </div>
                <TripCreationForm />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    tripsList: state.tripList
})

function mapDispatchToProps (dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        setID: (id) => dispatch(setID(id)),
        goToHome: () => dispatch(push(routes.home)),
        goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ListTripsPage)