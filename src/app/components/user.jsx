import React from 'react'
import Bookmark from './bookmark'
import Quality from './quality'

const User = ({
	_id,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	bookmark,
	onDelete,
	onToggleBookMark,
}) => {
	return (
		<>
			<tr key={_id}>
				<td>{name}</td>
				<td>
					{qualities.map(qual => (
						<Quality key={qual._id} {...qual} />
					))}
				</td>
				<td>{profession.name}</td>
				<td>{completedMeetings}</td>
				<td>{rate}</td>
				<td>
					<Bookmark status={bookmark} onClick={() => onToggleBookMark(_id)} />
				</td>
				<td>
					<button className={'btn btn-danger'} onClick={() => onDelete(_id)}>
						Delete
					</button>
				</td>
			</tr>
		</>
	)
}

export default User
