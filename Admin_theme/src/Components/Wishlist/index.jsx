import React, { useState, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import WishlistTable from './WishlistTable.jsx'
import WishlistAPi from '../../api/WishlistAPI'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// ----------------------------------------------------------------
import { toast } from 'react-toastify'
import Pagination from '../Pagination/pagination';

export const currency = {
    formatToCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

const Wishlist = () => {

    //Start list
    const { id } = useParams();

    const [Wishlist_List, setWishlist_List] = useState([
    ]);
    const [filtered, setFiltered] = useState([]);
    const [searchById, setsearchById] = useState("");
    // ----------------------
    //FetchData
    // ----------------------
    async function fetchData() {
        await WishlistAPi.getAllByUserId(id).then(res => {
            setWishlist_List(res.data);
        }).catch(e => {
            alert(e.msg)
        });
    }
    // ----------------------
    //UseEffect
    // ----------------------
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    // ----------------------
    //Filter
    // ----------------------
    useEffect(() => {
        setFiltered(
            Wishlist_List.filter((wishlist) =>
                wishlist.bookname.toLowerCase().includes(searchById.toLowerCase())
            ))
    }, [searchById, Wishlist_List])

    // ----------------------
    //Pagination
    // ----------------------
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
    }
    // ----------------------
    //Return
    // ----------------------
    return (
        <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Wishlist
                        </h6>
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
                                                    label="Search by Book"
                                                    type="search"
                                                    onChange={(e) => setsearchById(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <WishlistTable wishlists={currentItem} />
                        <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Wishlist;