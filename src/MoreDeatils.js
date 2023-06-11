import { Link } from "react-router-dom"
import Germany from './Germany.svg.webp'
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function MoreDeatils(props){
    const {moreDeatilsId} = useParams()

    const countries = props.countries.find(country => {
        const officialName = Object.values(country.name.official).join('')
       return moreDeatilsId === officialName
    })

    const values = value => Object.values(value).join('')
    const checkForProperty = property => countries.hasOwnProperty(property)
    
    return(
        <div className="container nextPage_grid selecting">
            <div className="back_button_container selecting">
                <Link to='/' className="back_button">Back</Link>
                <div className="flag_img_container">
                    <img src={values(countries.flags.svg)} width="600" height="400"/>
                </div>
            </div>

            <div className="margin_bottom selecting">
                <h2>{values(countries.name.common)}</h2>
                {/* <p>Native Name: <span className="light_text">{Object.values(countries.name.nativeName.ara.official)}</span></p> */}
                <p>Population: <span className="light_text">{countries.population.toLocaleString()}</span></p>
                <p>Region: <span className="light_text">{countries.region}</span></p>
                <p>Sub Region: <span className="light_text">{checkForProperty(countries.subregion) ? countries.subregion : 'None'}</span></p>
                <p>Capital: <span className="light_text">{checkForProperty(countries.capital) ? countries.capital : 'None'}</span></p>
            </div>

            <div className="margin_bottom selecting">
                {/* if the type countries.tld is an array or or object display it, else display it regularly  */}
                <p>Top Level Domain: <span className="light_text">{typeof countries.tld ? countries.tld.join(' ') : countries.tld}</span></p>
                {/* <p>Currencies: <span className="light_text">{countries.currencies}</span></p> */}
                {/* <p>Languages: <span className="light_text">{countries.languages}</span></p> */}
            </div>
            {/* if the country has borders than display it, else display none */}
            <div className="border_countries_container selecting">
                <p className="border_countries_title">Border Countries: </p>
                <div className="border_countries_content">
                    {checkForProperty('borders') ? 
                        countries.borders.map(border => <span className="light_text button_padding">{border}</span>) :
                        <span className="light_text button_padding">None</span> 
                    }
                </div>
            </div> 
        </div>
    )
}