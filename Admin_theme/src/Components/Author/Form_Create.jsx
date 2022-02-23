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
                            name="authorname"
                            required
                            fullWidth
                            id="authorname"
                            value={values.authorname}
                            label="Author Name"
                            onChange={OnChange}
                            autoFocus
                        />
                        <p style={{ color: "red" }}>{Error.authorname}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="numberpublishedbooks"
                            value={values.numberpublishedbooks}
                            label="Number publish book"
                            name="numberpublishedbooks"
                            onChange={OnChange}
                        />
                        <p style={{ color: "red" }}>{Error.numberpublishedbooks}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="mb-3">
                            <label htmlFor="avatar" style={{ color: "black", fontSize: 18, fontWeight: 400 }}>Select avartar author (PNG,JPEG only)</label>
                            <input type='file' ref={resetFile} id="avatar" style={{ display: "none" }} onChange={OnChange} name="authorImage" />
                        </div>
                        <div style={{width:"12rem",height: "auto",margin:"auto"}}>
                            <img style={{
                                width: "100%"
                            }} src={Image} />
                        </div>
                        <p style={{ color: "red" }}>{Error.image}</p>
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
    values: { authorname: "", Au_Published: "", Au_Information: "", Au_images: "" },
    resetFile: null,
    Image: null

};
export default Form_Create;