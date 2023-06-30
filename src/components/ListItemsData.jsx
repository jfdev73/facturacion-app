import RowItem from './RowItem';
import PropTypes from 'prop-types';
const ListItemsData = ({ title, items, handlerDelete }) => {
	return (
		<>
			<h4>{title}</h4>
			<table className='table table-striped table-hover text-center'>
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{items.map(({ id, product, price, quantity }) => (
						<RowItem
							key={id}
							id={id}
							product={product}
							price={price}
							quantity={quantity}
							handlerDelete={handlerDelete}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

ListItemsData.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	handlerDelete: PropTypes.func.isRequired,
};

export default ListItemsData;
