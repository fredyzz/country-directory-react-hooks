import React from 'react'
import '../styles/components/country.css'

const Country = ({ country }) => {
	return (
		<div className="country card">
			<div className="face front">
				<img
					src={country.flag}
					alt={`${country.name} flag`}
					width="200"
					loading="lazy"
				/>
				<h2>{country.name}</h2>
			</div>
			<div className="face back">
				<h2>More information</h2>
				<p>Region: {country.region}</p>
				<p>Capital: {country.capital}</p>
				<p>Population: {country.population}</p>
			</div>
		</div>
	)
}

export default Country
