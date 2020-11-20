import React from 'react';
import {Link} from 'react-router-dom';
import countries from '../countries.json'


const CountryDetails = (props) => {
    // console.log(props.match.params.flag)

    let country = countries.find((country) => {
        return country.flag === props.match.params.flag
        
    })




    let borderCountries = []

    for (let border of country.borders) {
        let borderCountry = countries.find( country => {
            return country.cca3 === border
        }
        )
        borderCountries.push(<li><Link to={`/country/${borderCountry.flag}`}>{borderCountry.name.common}</Link></li>)
    }


    console.log(country)
    return (

        <div>
            <h1>{country.name.common}</h1>
            <hr />
            Capital - {country.capital}
            <hr />
            Area - {country.area} km<sup>2</sup>
            <hr />
            Borders - {borderCountries}
        </div>

    )
}

export default CountryDetails;