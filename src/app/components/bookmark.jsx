const Bookmark = ({ status, ...rest }) => {
	return (
		<>
			<button className='btn btn-light' {...rest}>
				<i
					className={
						'bi bi-suit-heart' + (status ? 'bi bi-suit-heart-fill' : '')
					}
				></i>
			</button>
		</>
	)
}

export default Bookmark
