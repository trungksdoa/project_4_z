import React from 'react';

const Setting = () => {

    return (
        <div className="container">
            <div className="col-12">
                <a style={{ cursor: 'pointer' }} onClick={backToList}>Back</a>
                <div className="container">
                    <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
                        <h3 className="text-center">Create new admin</h3>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="adminemail"
                                        fullWidth
                                        id="adminemail"
                                        label="Email"
                                        value={formvalue.adminemail}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formError.adminemail}</p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="adminpassword"
                                        fullWidth
                                        value={formvalue.adminpassword}
                                        type="password"
                                        label="Password"
                                        name="adminpassword"
                                        onChange={handleChange}
                                    />
                                    <p style={{ color: "red" }}>{formError.adminpassword}</p>
                                </Grid>
                            </Grid>
                            <div className="mb-3">
                                <FormControl variant="filled" style={{ marginTop: 30 }} sx={{ m: 0, minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-filled-label">Roles</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={formvalue.roles}
                                        fullWidth
                                        onChange={handleChange}
                                        name="roles"
                                    >
                                        {roles.map((item, index) => {
                                            return <MenuItem key={index} value={item}>{item}</MenuItem>;
                                        })}
                                    </Select>
                                    <p style={{ color: "red" }}>{formError.roles}</p>
                                </FormControl>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Setting