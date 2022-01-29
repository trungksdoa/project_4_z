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


const Form_Create = (props) => {

    const { OnKeyPress, Error, values, resetFile, Image } = props;

    function OnChange(e) {
        if (OnKeyPress) {
            OnKeyPress(e);
        }
    }

    console.log(values.Au_name);
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
                        <div class="mb-3">
                            <label for="avatar" style={{ color: "black", fontSize: 18, fontWeight: 400 }}>Select avartar author (PNG,JPEG only)</label>
                            <input type='file' ref={resetFile} id="avatar" style={{ display: "none" }} onChange={OnChange} name="Au_images" />
                        </div>
                        <p style={{ color: "black" }}>{values.Au_images.name}</p>
                        <div style={{width:"30rem",height: "auto",margin:"auto"}}>
                            <img style={{
                                width: "100%"
                            }} src={Image} />
                        </div>
                        <p style={{ color: "red" ,maxWidth: "30rem",maxHeight:"340px"}}>{Error.Au_images}</p>
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
    values: { Au_name: "", Au_Published: "", Au_Information: "", Au_images: "" },
    resetFile: null,
    Image: null

};
export default Form_Create;