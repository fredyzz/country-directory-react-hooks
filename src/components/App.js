import React, { useState, useEffect } from 'react'
// Componentes imports
import Header from './Header'
import Search from './Search'
import Country from './Country'
// Styles imports
import '../styles/App.css'

const COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2/all'

function App() {
	const [loading, setLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState({
		key: '',
		list: []
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(COUNTRIES_API_URL)
				let jsonResponse = await response.json()
				setCountries(jsonResponse)
				setFilteredCountries({ key: '', list: jsonResponse })
				setLoading(false)
			} catch (error) {
				setErrorMessage(error.message)
				console.log(error)
			}
		}

		fetchData()
	}, [])

	const search = (searchValue) => {
		let countryList = countries.filter((country) =>
			country.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		setFilteredCountries({ key: searchValue, list: countryList })
		setErrorMessage(null)
	}
	return (
		<div className="App">
			<Header text="Country directory" />
			<Search search={search} />
			<p className="App-intro">
				{filteredCountries && filteredCountries.key === ''
					? `Showing ${countries.length} countries`
					: `Searching countries including "${filteredCountries.key}" in their names`}
			</p>
			<div className="countries">
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : (
					filteredCountries.list.map((country) => (
						<Country key={country.numericCode} country={country} />
					))
				)}
			</div>
		</div>
	)
}

export default App
