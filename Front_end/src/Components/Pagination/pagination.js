import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Pagenation = ({ PerPage, total, paginate, currenPages }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / PerPage); i++) {
        pageNumbers.push(i);
    }
    // alert(pageNumbers)
    const handleChange = (event, value) => {
        if (paginate) {
            paginate(value);
        }
    };
    return (
        <>
            <Stack spacing={2}>
                <Pagination count={pageNumbers.length} page={currenPages} onChange={handleChange} shape="rounded" />
            </Stack>
        </>
    );
};

export default Pagenation;