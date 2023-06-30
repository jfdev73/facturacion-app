import PropTypes from 'prop-types';

const InvoiceData = ({ id, name }) => {
	return (
		<>
			<ul className='list-group'>
				<li className='list-group-item'>Id: {id}</li>
				<li className='list-group-item'>Name: {name}</li>
			</ul>
		</>
	);
};

InvoiceData.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};

export default InvoiceData;
