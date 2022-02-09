import React, { useEffect, useState } from "react";
import WishlistAPI from '../../api/WishlistAPI';
import { useCookies } from 'react-cookie';
const Page3 = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function fetchData() {
        await WishlistAPI.getAll(cookies.loggin.userID).then(data => {
            setWishlist(data.data)
        }).catch(err => alert(err.msg))
    }
    const goToDetail = (id) => {
        alert(id)
    }
    const handleDelete = (id) => {

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Book name</th>
                    <th>Book price</th>
                    <th>Date wishlist</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {wishlist.map((wishlist, index) => {
                    const { booksId, user_id, wishlist_id, wishlist_createddate } = wishlist;
                    return (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{booksId.bookname}</td>
                                <td>{booksId.bookprice}</td>
                                <td>{wishlist_createddate}</td>
                                <td>
                                    <a style={{cursor: 'pointer' }} onClick={() => goToDetail(booksId.booksid)}>Chi tiết</a> - <a style={{cursor: 'pointer' }} onClick={() => alert("xóa: " + wishlist_id)}>xóa</a>
                                </td>
                            </tr>
                        </>
                    )
                })}
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