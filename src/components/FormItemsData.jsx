import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const FormItemsData = ({ handler }) => {
	const [formState, setFormState] = useState({
		product: '',
		price: '',
		quantity: '',
	});

	const { product, price, quantity } = formState;

	useEffect(() => {}, [price]);

	useEffect(() => {}, [formState]);

	const onFormChange = ({ target: { name, value } }) => {
		console.log(name);
		const newValue =
			name === 'price' || name === 'quantity' ? Number(value) : value;
		setFormState({ ...formState, [name]: newValue });
	};

	const handleSubmitItems = e => {
		e.preventDefault();
		if ([product, price, quantity].includes('')) {
			console.log('Todos los campos son obligatorios');
			return;
		}

		handler(formState);
		setFormState({
			product: '',
			price: '',
			quantity: '',
		});
		// setProduct('');
		// setPrice('');
	};

	return (
		<>
			<form className='w-50' onSubmit={handleSubmitItems}>
				<input
					type='text'
					name='product'
					placeholder='Producto'
					className='form-control mb-4'
					onChange={onFormChange}
					value={product}
				/>

				<input
					type='number'
					name='price'
					placeholder='Precio'
					className='form-control mb-4'
					onChange={onFormChange}
					value={price}
				/>
				<input
					type='number'
					name='quantity'
					placeholder='Cantidad'
					className='form-control mb-4'
					onChange={onFormChange}
					value={quantity}
				/>

				<button type='submit' className='btn btn-primary m-3'>
					Crear Item
				</button>
			</form>
		</>
	);
};
FormItemsData.propTypes = {
	handler: PropTypes.func.isRequired,
};
export default FormItemsData;
