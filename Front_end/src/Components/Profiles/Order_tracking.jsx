import React from "react";
//Bootstrap and jQuery libraries
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
const Page2 = () => {
    $(document).ready(function () {
        $('#example').DataTable();
    });
    return (
        <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Date order</th>
                    <th>Voucher</th>
                    <th>Delivery address</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td style={{ background: 'yellow' }}>On process</td>
                    <td>2022/02/24</td>
                    <td />
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê
                    </td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td style={{ background: 'yellow' }}>On process</td>
                    <td>2022/02/24</td>
                    <td />
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê</td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td style={{ background: 'rgb(77, 255, 0)' }}>Delivered</td>
                    <td>2022/02/24</td>
                    <td />
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê</td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td style={{ background: 'yellow' }}>On process</td>
                    <td>2022/02/24</td>
                    <td />
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê</td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td style={{ background: 'yellow' }}>On process</td>
                    <td>2022/02/25</td>
                    <td>T11907M0_Project4</td>
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê</td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td style={{ background: 'yellow' }}>On process</td>
                    <td>2022/02/24</td>
                    <td />
                    <td>49/15 quận thủ đức, thành phố đồng nai</td>
                    <td>
                        Ok con dê</td>
                    <td>
                        <a>Chi tiết</a>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>id</th>
                    <th>Status</th>
                    <th>Date order</th>
                    <th>Voucher</th>
                    <th>Delivery address</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default Page2