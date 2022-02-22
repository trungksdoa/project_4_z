import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookAPI from '../../api/BookAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import CKEditor from '../Pagination/CK_Editor.jsx';

// -------------------------------
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CategoryAPI from '../../api/CategoryAPI.js';
import AuthorAPI from '../../api/AuthorAPI.js';
import DatePicker from 'react-datepicker';

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
const FormPage = () => {
	const [author, setAuthor] = useState([]);
	const fetchDataAuthor = async () => {
		await AuthorAPI.getAll()
			.then((res) => {
				setAuthor(res.data);
			})
			.catch((err) => alert(err.msg));
	};
	useEffect(() => {
		fetchDataAuthor();
	}, []);
	console.log(author)
	const [catagory, setCategorys] = useState([]);
	const character_only = /^[a-z\sA-Z]+$/g;
	const fetchData = async () => {
		await CategoryAPI.getAll()
			.then((catagory) => {
				// const newArray = [];
				// catagory.data.map((value, index) => {
				// 	newArray.push(value.catagoryname);
				// });
				setCategorys(catagory.data);
			})
			.catch((err) => alert(err.msg));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [groups, setGroups] = useState([]);
	// --------------------------
	const initialValues_Books = {
		format: "",
		pages: "",
		dimensions: "",
		language: "",
		illustrationsnote: "",
		// Book
		bookname: "",
		bookprice: "",
		bookdescription: "",
		bookreleasedate: new Date(),
		amounts: "",
		authorid: "",
		groupdto:[]
	};
	const [formData, setFormData] = useState(initialValues_Books);
	const [formError, setformError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [selectedFile, setFiles] = useState(null);
	const [imgData, setImgData] = useState(null);
	const formDataBody = new FormData();

	const fileUploader = useRef();

	const navigator = useNavigate();

	const { id } = useParams();

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name == "language") {
			if (character_only.test(value.trim())) {
				setFormData({ ...formData, [name]: value })
			}
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleChangeCatagory = (event) => {
		const { target: { value } } = event;
		setGroups(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	const HandleChangeCKEditor = (event, editor) => {
		const data = editor.getData();
		setFormData({ ...formData, illustrationsnote: data });
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const validateResult = validate(formData);
		setformError(validateResult);
		setIsSubmit(true);
	};
	const handleSubmit = async (e) => {

		const formbody = {

			format: formData.format,
			pages: formData.pages,
			dimensions: formData.dimensions,
			language: formData.language,
			illustrationsnote: formData.illustrationsnote,
			// Book
			groupdto: groups,
			bookname: formData.bookname,
			bookprice: formData.bookprice,
			bookdescription: formData.bookdescription,
			bookreleasedate: formData.bookreleasedate,
			amounts: formData.amounts,
			authorid: formData.authorid
		};
		formDataBody.append('file', selectedFile);
		formDataBody.append('book_String', JSON.stringify(formbody));
		if (Object.keys(formError).length === 0 && isSubmit) {
			await BookAPI.Create(formDataBody)
			navigator('/admin/book')
		} else {
			setIsSubmit(false);
		}
	};
	useEffect(() => {
		handleSubmit();
	}, [formError])
	const validate = (value) => {
		const error = {};
		if (!value.bookname) {
			error.bookname = 'Name is required';
		} else if (value.bookname.trim().length <= 10) {
			error.bookname = 'Name length must be at max 10 characters';
		} else if (value.bookname.trim().length <= 0) {
			error.bookname = 'Name can not blank';
		}
		if (selectedFile == null) {
			error.file = 'Image is required';
		}
		return error;
	};
	// useEffect(
	// 	() => {
	// 		handleSubmit();
	// 	},
	// 	[ formError ]
	// );

	const upload = () => {
		fileUploader.current.click();
	};

	const HandleImageChange = (e) => {
		var file = {};
		const { files } = e.target;
		if (files[0].type === 'image/png' || files[0].type === 'image/jpeg') {
			console.log(files[0].size);

			if (files[0].size > 5120000) {
				alert('Invalid size , must be < 5 mb');
			} else {
				for (let index = 0; index < files.length; index++) {
					const element = files[index];
					file.lastModified = element.lastModified;
					file.lastModifiedDate = element.lastModifiedDate;
					file.name = element.name;
					file.size = element.size;
					file.type = element.type;
				}
				const reader = new FileReader();
				reader.addEventListener('load', () => {
					setImgData(reader.result);
				});
				reader.readAsDataURL(files[0]);

				setFiles(files[0]);
				//Append data

				//
			}
		} else {
			alert('Invalid type');
			fileUploader.current.value = '';
		}
	};
	const goBackList = () => {
		navigator('/admin/book');
	};
	return (
		<div className="container">
			<pre>{JSON.stringify(formData)}</pre>
			<div className="col-12">
				<a style={{ cursor: 'pointer' }} onClick={goBackList}>
					Back
				</a>
				<pre>{JSON.stringify(formError, undefined, 2)}</pre>
				<div className="container">
					<div className="admin_card" style={{ width: '100%', margin: 'auto' }}>
						<h3 className="text-center">Add Book</h3>
						<form onSubmit={handleClick}>
							<div className="row">
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="bookname"
											fullWidth
											value={formData.bookname}
											onChange={handleChange}
											id="bookname"
											label="Book Name"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.bookname}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="bookprice"
											fullWidth
											value={formData.bookprice}
											onChange={handleChange}
											id="bookprice"
											label="Price"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.bookprice}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="bookdescription"
											fullWidth
											value={formData.bookdescription}
											onChange={handleChange}
											id="bookdescription"
											label="Description"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.bookdescription}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="amounts"
											fullWidth
											value={formData.amounts}
											onChange={handleChange}
											id="amounts"
											label="Amounts"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.amounts}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="dimensions"
											fullWidth
											value={formData.dimensions}
											onChange={handleChange}
											id="dimensions"
											label="Dimensions"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.dimensions}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="language"
											fullWidth
											value={formData.language}
											onChange={handleChange}
											id="language"
											label="Language"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.language}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<TextField
											name="pages"
											fullWidth
											value={formData.pages}
											onChange={handleChange}
											id="pages"
											label="Pages"
											autoFocus
										/>
										<p style={{ color: 'red' }}>{formError.pages}</p>
									</Grid>
								</div>
								<div className="col-lg-6">
									<Grid item xs={8} sm={12}>
										<label>Release date</label>
										<DatePicker
											dateFormat="yyyy/MM/dd HH:mm:ss"
											selected={new Date()}
											className={'form-control'}
											style={{ border: '1px solid' }}
											onChange={(date) => setFormData({ ...formData, bookreleasedate: date })}
											withPortal
										/>
										<p style={{ color: 'red' }}>{formError.status}</p>
									</Grid>
								</div>
								<div className="col-lg-12">
									<Grid item xs={8} sm={12}>
										<FormControl sx={{ m: 0, width: '100%' }}>
											<InputLabel id="demo-multiple-checkbox-label">Catagory</InputLabel>
											<Select
												labelId="demo-multiple-checkbox-label"
												id="demo-multiple-checkbox"
												multiple
												value={groups}
												onChange={handleChangeCatagory}
												input={<OutlinedInput label="Catagory" />}
												renderValue={(selected) => selected.join(', ')}
												MenuProps={MenuProps}
											>
												{catagory.map((value, index) => (
													<MenuItem key={index} value={value.catagoryid}>
														<Checkbox checked={groups.indexOf(value.catagoryid) > -1} />
														<ListItemText primary={value.catagoryname} />
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>

								</div>
								<div className="col-lg-12" style={{ paddingTop: 30 }}>
									<Grid item xs={8} sm={12}>
										<FormControl fullWidth>
											<InputLabel id="authorid">Author</InputLabel>
											<Select
												labelId="authorid"
												id="authorid"
												name="authorid"
												value={formData.authorid}
												label="Author"
												onChange={handleChange}
											>
												{author.map((value, index) => (
													<MenuItem key={index} value={value.authorid}>
														{value.authorname}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								</div>
								<div className="col-lg-12">
									<label>illustrations note: </label>
									<CKEditor OnKeyPress={HandleChangeCKEditor} values={formData.illustrationsnote} />
									<p style={{ color: 'red' }}>{formError.bookdescription}</p>
								</div>
								<div className="col-lg-12 text-center">
									{imgData !== null && <img src={imgData} alt="" width={350} height={350} />}
									<div className="small font-italic text-muted mb-4">
										JPG or PNG no larger than 5 MB
									</div>
									<p style={{ color: 'red' }}>{formError.file}</p>
									{/* Profile picture upload button*/}
									<input
										type="file"
										name="image"
										ref={fileUploader}
										onChange={(e) => HandleImageChange(e)}
										style={{ display: 'none' }}
									/>
									<button className="btn btn-primary" onClick={upload} type="button">
										Upload new image
									</button>
								</div>
							</div>
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
