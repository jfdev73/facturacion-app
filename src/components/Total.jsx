import PropTypes from 'prop-types';
const Total = ({ total }) => {
	return (
		<>
			<div className='text-end'>
				<p>
					Total: <span className='badge bg-success'>{total}</span>
				</p>
			</div>
		</>
	);
};
Total.propTypes = {
	total: PropTypes.number.isRequired,
};
export default Total;
