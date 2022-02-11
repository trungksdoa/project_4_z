import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Ca_API from '../../api/CategoryAPI';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Form_Create = (props) => {

    const { OnKeyPress, Error, values, resetFile, Image } = props;

    function OnChange(e) {
        if (OnKeyPress) {
            OnKeyPress(e);
        }
    }
    return (
        <Box
            sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="categoryname"
                            required
                            fullWidth
                            id="categoryname"
                            value={values.categoryname}
                            label="Category Name"
                            onChange={OnChange}
                            autoFocus
                        />
                        <p style={{ color: "red" }}>{Error.categoryname}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="catagorydescriptions"
                            value={values.catagorydescriptions}
                            label="Category Decriptions"
                            name="catagorydescriptions"
                            onChange={OnChange}
                        />
                        <p style={{ color: "red" }}>{Error.catagorydescriptions}</p>
                    </Grid>
                </Grid>
                {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register
                </Button> */}
            </Box>
        </Box>
    )
}
Form_Create.propTypes = {
    OnKeyPress: PropTypes.func,
    Error: PropTypes.object,
    values: PropTypes.object,
    resetFile: PropTypes.any,
    Image: PropTypes.any
};

Form_Create.defaultProps = {
    OnKeyPress: null,
    Error: {},
    values: { categoryname: "", Ca_catagorydescription: "",},
    resetFile: null,
    Image: null

};
export default Form_Create;