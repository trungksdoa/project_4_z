import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Au_API from '../../api/AuthorAPI';
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


const Form_Edit = (props) => {

    const { OnKeyPress, Error, values } = props;

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
                            name="Au_name"
                            required
                            fullWidth
                            id="Au_name"
                            value={values.Au_name}
                            label="Author Name"
                            onChange={OnChange}
                            autoFocus
                        />
                        <p style={{ color: "red" }}>{Error.Au_name}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="Au_Published"
                            value={values.Au_Published}
                            label="Number publish book"
                            name="Au_Published"
                            onChange={OnChange}
                        />
                        <p style={{ color: "red" }}>{Error.Au_Published}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            value={values.Au_images}
                            name="Au_images"
                            label="Image"
                            id="Au_images"
                            onChange={OnChange}
                        />
                         <p style={{ color: "red" }}>{Error.Au_images}</p>
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
Form_Edit.propTypes = {
    OnKeyPress: PropTypes.func,
    Error: PropTypes.object,
    values: PropTypes.object,
};

Form_Edit.defaultProps = {
    OnKeyPress: null,
    Error: {},
    values: { Au_name: "", Au_Published: "", Au_Information: "", Au_images: "" }
};
export default Form_Edit;