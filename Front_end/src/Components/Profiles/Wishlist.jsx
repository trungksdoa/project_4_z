import React from "react";

const Page3 = () => {
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
                <tr>
                    <td>1</td>
                    <td>Cô gái tàu hủ</td>
                    <td>999 777 888</td>
                    <td><a>Chi tiết</a> - <a>xóa</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ngôi nhà micky</td>
                    <td>999 777 999</td>
                    <td><a>Chi tiết</a> - <a>xóa</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Chú chuột can đảm</td>
                    <td>999 888 111</td>
                    <td><a>Chi tiết</a> - <a>xóa</a></td>
                </tr>
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