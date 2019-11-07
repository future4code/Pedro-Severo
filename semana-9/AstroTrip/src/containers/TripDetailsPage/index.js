import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTripDetail } from "../../actions/trips"


export class TripDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.getTripDetail(this.props.id)
        console.log(this.props.trip.name)

        const token = window.localStorage.getItem("token");

        if (!token) {
            this.props.goToHome();
        }
    }

    render() {

        return (
            <div>
                {/* Aqui precisa de melhorar o layout */}
            <h2>Detalhes da viagem</h2>
            <p>{this.props.trip.description}</p>
            <p>{this.props.trip.planet}</p>
            <p>{this.props.trip.durationInDays}</p>
            <p>{this.props.trip.date}</p>

            {/* Aqui precisa de colocar uma função 
                map pra abrir o array dos candidatos */}
            </div>
        )
    }
};


const mapStateToProps = state => ({
    id: state.id,
    trip: state.trip,
})

function mapDispatchToProps (dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        getTripDetail: (id) => dispatch(getTripDetail(id)),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(TripDetailsPage)