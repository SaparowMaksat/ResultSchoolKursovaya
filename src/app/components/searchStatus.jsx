const SearchStatus = ({ length }) => {
	const renderPhrase = number => {
		const lastOne = Number(number.toString().slice(-1))
		if ((number > 4 && number < 15) || lastOne === 1) return 'Человек тусанёт'
		if ([2, 3, 4].indexOf(lastOne) >= 0) return 'Человека тусанёт'

		// return 'Человек тусанёт'
	}
	return (
		<h2>
			<span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
				{length > 0
					? `${length} ${renderPhrase(length)} с тобой сегодня`
					: 'Не кто с тобой не тусанет '}
			</span>
		</h2>
	)
}

export default SearchStatus
