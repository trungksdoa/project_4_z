import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import AuthorAPI from '../../api/AuthorAPI';
import Author_table from './author_table.jsx';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Author = () => {
    const [author_list, setAuthor_list] = useState([]);
    const navigate = useNavigate();
    async function FetchData() {
        const res = await AuthorAPI.getAll();
        setAuthor_list(res.data);
        console.table(res.data);
    }
    const handleDelete = async (index) => {
        let newArr = [...author_list]; // copying the old datas array
        newArr.splice(index, 1);
        setAuthor_list(newArr)
        console.table(newArr)
        // await ReviewAPI.ChangeStatus(newArr[index].review_id, value);
    };
    function handleEdit(index) {

    }
    function handleView(index) {

    }
    function GotoCreatePage() {
        navigate("/admin/author/create")
    }
    useEffect(() => {
        FetchData();
    }, [])
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <a style={{ cursor: 'pointer' }} onClick={GotoCreatePage}><AddCircleIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Authors table</h6>
                                <span>
                                    <a style={{ position: 'absolute', top: "0.5rem", right: "2rem", cursor: 'pointer' }}
                                        onClick={FetchData}
                                    >
                                        <Fab color="primary" aria-label="add">
                                            <CachedIcon />
                                        </Fab>
                                    </a>
                                </span>

                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <Author_table authors={author_list} onDelete={handleDelete} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Author;