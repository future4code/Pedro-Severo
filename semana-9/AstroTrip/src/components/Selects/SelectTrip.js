import React, { Component } from "react";
import styled from 'styled-components';

export const SelectTrip = () => {
    return (
        <select id="tripId" name="Trip ID" class="form-control">
            <option value="NXw3cviXO0zwpG4XKN1F">Festa Marciana - Marte</option>
            <option value="bW0B6KSZKTogB1wtzWSR">Multi Lual em Jupter - Jupter</option>
            <option value="gQzCPlK8piSjCA3NOGre">Picnic de inverno em Plutão - Plutão</option>
            <option value="kCfHWyymzDzNLNYdWeXH">Surfando em Netuno - Netuno</option>
        </select>
    )
}

export default SelectTrip