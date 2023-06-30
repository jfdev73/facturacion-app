import { getInvoice, calculateTotal } from './services/getInvoice';
import ClientData from './components/ClientData';
import CompanyData from './components/CompanyData';
import InvoiceData from './components/InvoiceData';
import ListItemsData from './components/ListItemsData';
import Total from './components/Total';
import { useState, useEffect } from 'react';
import FormItemsData from './components/FormItemsData';
//import { invoice } from './data/invoice';

const invoiceInitial = {
	id: 0,
	name: '',
	client: {
		name: '',
		lastName: '',
		address: {
			country: '',
			city: '',
			street: '',
			number: 0,
		},
	},
	company: {
		name: '',
		fiscalNumber: 0,
	},
	items: [],
	total: 0,
};

const InvoiceApp = () => {
	const [activeForm, setActiveForm] = useState(false);

	const [total, setTotal] = useState(0);

	const [counter, setCounter] = useState(4);

	const [invoice, setInvoice] = useState(invoiceInitial);

	const [items, setItems] = useState([]);
	const { id, name, client, company } = invoice;

	useEffect(() => {
		const data = getInvoice();
		setInvoice(data);
		setItems(data.items);
	}, []);

	useEffect(() => {
		setTotal(calculateTotal(items));
		setActiveForm(false);
	}, [items]);

	const handleAddItems = ({ product, price, quantity }) => {
		setItems([
			...items,
			{
				id: counter,
				product,
				price,
				quantity,
			},
		]);

		setCounter(counter + 1);
	};

	// const [product, setProduct] = useState('');
	// const [price, setPrice] = useState('');
	// const [quantity, setQuantity] = useState('');

	// const onChangePrice = e => {
	// 	setPrice(Number(e.target.value) || '');
	// };

	// const onChangeQuantity = e => {
	// 	setQuantity(Number(e.target.value) || '');
	// };

	const handlerDelete = id => {
		setItems(items.filter(item => item.id !== id));
	};

	const onActiveForm = () => {
		setActiveForm(!activeForm);
	};

	return (
		<>
			<div className='container'>
				<div className='card my-3'>
					<div className='card-header'>Ejemplo de Factura</div>

					<div className='card-body'>
						<InvoiceData id={id} name={name} />

						<div className='row my-3'>
							<div className='col'></div>
							<ClientData title='Datos del Cliente' client={client} />

							<div className='col'>
								<CompanyData title='Datos de la empresa' company={company} />
							</div>
						</div>

						<h4>Productos de la Factura</h4>

						<ListItemsData
							title='Productos de la Factura'
							items={items}
							handlerDelete={handlerDelete}
						/>

						<Total total={total} />
						<button className='btn btn-secondary my-2' onClick={onActiveForm}>
							{!activeForm ? 'Agregar Item' : 'Ocultar formulario'}
						</button>

						{activeForm && <FormItemsData handler={handleAddItems} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default InvoiceApp;
