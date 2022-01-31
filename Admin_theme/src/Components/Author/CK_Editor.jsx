
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropTypes from 'prop-types';

const Ck_editor = (props) => {
    const { OnKeyPress, values,Error } = props;
    const OnChange = (event, editor) => {
        if (OnKeyPress) {
            OnKeyPress(event, editor);
        }
        // const data = editor.getData();
        // console.log({ event, editor, data });
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
            <CKEditor
                editor={ClassicEditor}
                data={values.authorinformation}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(e, editor) => OnChange(e, editor)}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <p style={{ color: "red" }}>{Error.authorinformation}</p>
        </Box>
    )
}

Ck_editor.propTypes = {
    OnKeyPress: PropTypes.func,
    Error: PropTypes.object,
    values: PropTypes.object,
};

Ck_editor.defaultProps = {
    OnKeyPress: null,
    Error: {},
    values: { Au_name: "", Au_Published: "", Au_Information: "", Au_images: "" }
};
export default Ck_editor;