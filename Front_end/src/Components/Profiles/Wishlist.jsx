import React, { useLayoutEffect, useState } from "react";
import WishlistAPI from '../../api/WishlistAPI';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
const Page3 = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const navigate = useNavigate();
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function fetchData() {
        await WishlistAPI.getAll(cookies.loggin.userID).then(data => {
            setWishlist(data.data)
        }).catch(err => alert(err.msg))
    }
    const goToDetail = (id) => {
        navigate("/Book/" + id)
    }
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            await WishlistAPI.DeleteByWishlist(id).then(data => {
                console.log(data)
                toast(data.msg)
            }).catch(err => alert(err.msg))
        } else {

        }
    }
    useLayoutEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000)
        return (() => clearInterval(interval))
    }, [])
    return (

        <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Book name</th>
                    <th>Book price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {wishlist.length !== 0 ? (
                    wishlist.map((wishlist, index) => {
                        const { bookname, bookprice, user_id, wishlist_id, booksId } = wishlist;
                        return (
                            <tr key={index}>
                                <td>{wishlist_id}</td>
                                <td>{bookname}</td>
                                <td>{bookprice}</td>
                                <td>
                                    <a style={{ cursor: 'pointer' }} onClick={() => goToDetail(booksId)}>Chi tiết</a> - <a style={{ cursor: 'pointer' }} onClick={() => handleDelete(wishlist_id)}>xóa</a>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan="9999" style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <th>Id</th>
                    <th>Book name</th>
                    <th>Book price</th>
                    <th>Delete</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default Page3