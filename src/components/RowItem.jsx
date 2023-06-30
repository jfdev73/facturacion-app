import PropTypes from 'prop-types';
const RowItem = ({ id, product, price, quantity, handlerDelete }) => {
	return (
		<>
			<tr>
				<td>{product}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>
					<button className='btn btn-danger' onClick={() => handlerDelete(id)}>
						Eliminar
					</button>
				</td>
			</tr>
		</>
	);
};

RowItem.propTypes = {
	id: PropTypes.number.isRequired,
	product: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	handlerDelete: PropTypes.func.isRequired,
};
export default RowItem;
