import React, { useState } from 'react'

const Search = (props) => {
	const [searchValue, setSearchValue] = useState('')

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value)
	}

	const resetInputField = () => {
		setSearchValue('')
	}

	const callSearchFunction = (e) => {
		e.preventDefault()
		if (e.target.value === 'RESET') {
			resetInputField()
			props.search(searchValue)
		}
		props.search(searchValue)
		resetInputField()
	}

	return (
		<form className="search">
			<input
				className="text-input"
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
			/>
			<input
				className="btn primary"
				onClick={callSearchFunction}
				type="submit"
				value="SEARCH"
			/>
			<input
				className="btn secondary"
				onClick={callSearchFunction}
				type="submit"
				value="RESET"
			/>
		</form>
	)
}

export default Search
