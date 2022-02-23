import React, { useState, useLayoutEffect, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import BookAPI from '../../api/BookAPI';
import Book_table from './book_table.jsx';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Pagination from '../Pagination/pagination';
import { toast } from 'react-toastify';

const Book = () => {
    const [book_list, setBook_list] = useState([]);
    const [SearchByName, setSearchByName] = useState("");
    const [filtered, setFiltered] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        async function FetchData() {
            await BookAPI.getAll().then(res => {
                setBook_list(res.data);
                //console.log(res.data);
            }).catch(e => {
                alert(e.msg)
            });
        }

        const interval = setInterval(() => {
            FetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    useEffect(() => {
        setFiltered(
            book_list.filter((books) =>
                books.bookname.toLowerCase().includes(SearchByName.toLowerCase())
            ))
    }, [SearchByName, book_list])

    const handleDelete = async (index) => {
        let newArr = [...book_list]; // copying the old datas array
        const id = newArr[index].bookid;
        await BookAPI.Delete(id).then((res) => {
            newArr.splice(index, 1);
            setBook_list(newArr)
            toast(res.msg);
        });
    };

    function handleView(index) {
        const newArray = [...book_list];
        console.log(book_list)
        const object = newArray.find(obj => obj.booksid === index);
        navigate("/admin/book/edit/" + object.booksid)
    }

    function GotoCreatePage() {
        navigate("/admin/book/create")
    }

    // /////////////////////////////////////
    // // ---------------------------------
    // /////////////////////////////////////
    // // We start with an empty list of items.
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)


    const paginate = page => {
        setCurrentPage(page)
        console.log(currentItem)
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <a style={{ cursor: 'pointer' }} onClick={GotoCreatePage}><AddCircleIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Books table</h6>


                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="pt-4 pb-3">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3">
                                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                        <TextField
                                                            id="filled-search"
                                                            label="Search by book name"
                                                            type="search"
                                                            onChange={(e) => setSearchByName(e.target.value)}
                                                            variant="filled"
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Book_table books={currentItem} onViewDetail={handleView} />
                                <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Book;