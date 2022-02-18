import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryAPI from '../../api/CategoryAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';

// -------------------------------
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder'
];

const FormPage = () => {
	// -------------------------

	const [ catagory, setCatagory ] = React.useState([]);
	const handleChangeCatagory = (event) => {
		const { target: { value } } = event;
		setCatagory(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	// --------------------------
	const [ formData, setFormData ] = useState({});
	const [ formError, setformError ] = useState({});
	const [ isSubmit, setIsSubmit ] = useState(false);
	const [ selectedFile, setFiles ] = useState(null);
	const [ imgData, setImgData ] = useState(null);
	const formDataBody = new FormData();

	const fileUploader = useRef();

	const navigator = useNavigate();

	const { id } = useParams();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleClick = async (e) => {
		e.preventDefault();
		const validateResult = validate(formData);
		setformError(validateResult);
		setIsSubmit(true);
	};
	const handleSubmit = async () => {
		if (Object.keys(formError).length === 0 && isSubmit) {
			const formbody = {
				category_name: formData.category_name,
				category_description: formData.category_description
			};
			formDataBody.append('categorys_string', JSON.stringify(formbody));
			await CategoryAPI.Create(formDataBody)
				.then((res) => {
					toast(res.msg);
				})
				.catch((err) => {
					alert(err.msg);
				});

			navigator('/admin/category');
		} else {
			setIsSubmit(false);
		}
	};
	const validate = (value) => {
		const error = {};
		if (!value.category_name) {
			error.category_name = 'Catagory name is required';
		} else if (value.category_name.trim().length <= 3) {
			error.category_name = 'Catagory name length must be at max 3 characters';
		} else if (value.category_name.trim().length <= 0) {
			error.category_name = 'Catagory name can not blank';
		}
		if (!value.category_description) {
			error.category_description = 'Catagory Description is required';
		} else if (value.category_description.trim().length <= 10) {
			error.category_description = 'Catagory Description length must be at max 10 characters';
		} else if (value.category_description.trim().length <= 0) {
			error.category_description = 'Catagory Description can not blank';
		}
		return error;
	};
	useEffect(
		() => {
			handleSubmit();
		},
		[ formError ]
	);

	const goBackList = () => {
		navigator('/admin/category');
	};
	return (
		<div className="container">
			{/* <pre>{JSON.stringify(formData)}</pre>
            <pre>{JSON.stringify(formError)}</pre> */}
			<div className="col-12">
				<a style={{ cursor: 'pointer' }} onClick={goBackList}>
					Back
				</a>
				<div className="container">
					<div className="admin_card" style={{ width: '50%', margin: 'auto' }}>
						<h3 className="text-center">Add Category</h3>
						<form onSubmit={handleClick}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12}>
									<TextField
										name="category_name"
										fullWidth
										value={formData.category_name}
										onChange={handleChange}
										id="category_name"
										label="Category name"
										autoFocus
									/>
									<p style={{ color: 'red' }}>{formError.category_name}</p>
								</Grid>
								<Grid item xs={8} sm={12}>
									<TextField
										name="category_description"
										fullWidth
										value={formData.category_description}
										onChange={handleChange}
										id="category_description"
										label="Category Description"
										autoFocus
									/>
									<p style={{ color: 'red' }}>{formError.category_description}</p>
								</Grid>
							</Grid>

							<div className="mb-3">
								<button className="btn btn-primary" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FormPage;
