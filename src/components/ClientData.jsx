import PropTypes from 'prop-types';
const ClientData = ({ title, client }) => {
	const {
		name: nameClient,
		lastName,
		address: { country, city, street, number },
	} = client;

	return (
		<>
			<h3>{title}</h3>
			<ul className='list-group'>
				<li className='list-group-item active'>
					{nameClient} {lastName}
				</li>
				<li className='list-group-item'>{`${country} / ${city} `}</li>
				<li className='list-group-item'>
					{street} {number}
				</li>
			</ul>
		</>
	);
};

ClientData.propTypes = {
	title: PropTypes.string.isRequired,
	client: PropTypes.object.isRequired,
};

export default ClientData;
