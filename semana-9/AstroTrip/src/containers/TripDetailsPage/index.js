import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTripDetail } from "../../actions/trips"


export const TripDetailsPage = (props) => {
    props.getTripDetail(props.id)
    console.log(props.trip.name)
    return (
        <div>
            {/* Aqui precisa de melhorar o layout */}
           <h2>Detalhes da viagem</h2>
           <p>{props.trip.description}</p>
           <p>{props.trip.planet}</p>
           <p>{props.trip.durationInDays}</p>
           <p>{props.trip.date}</p>

           {/* Aqui precisa de colocar uma função 
            map pra abrir o array dos candidatos */}
        </div>
    )
};


const mapStateToProps = state => ({
    id: state.id,
    trip: state.trip,
})

function mapDispatchToProps (dispatch) {
    return {
        getTripDetail: (id) => dispatch(getTripDetail(id)),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(TripDetailsPage)