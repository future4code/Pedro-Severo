import React, { Component } from "react";
import styled from 'styled-components';

export const SelectPlanet = (props) => {
    return (
        <select 
            id="planet" 
            name={props.name} 
            class="form-control" 
            onChange={props.handleInputChange}
            required
        >
            <option value=""></option>
            <option value="mercury">Mercúrio</option>
            <option value="venus">Vênus</option>
            <option value="earth">Terra</option>
            <option value="mars">Marte</option>
            <option value="jupiter">Júpiter</option>
            <option value="saturn">Saturno</option>
            <option value="uranus">Urano</option>
            <option value="neptune">Netuno</option>
            <option value="pluto">Plutão</option>
        </select>
    )
}

export default SelectPlanet