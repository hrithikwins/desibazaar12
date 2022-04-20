import Layout from "@components/layout/layout";
import PrimaryButton from "@components/ui/button";
import Container from "@components/ui/container";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const MobileCover = () => {
    const brands = ["Oneplus", "Samsung", "Apple"];
    const models = [];
    useEffect(() => {}, [brands]);
    return (
        <>
            <Container>
                <Box sx={{ height: 20 }} />
                <Box display={"flex"} justifyContent="center">
                    <SelectBrand brands={brands} />
                    <SelectModel models={models} />
                    <PrimaryButton>Load</PrimaryButton>
                </Box>
            </Container>
        </>
    );
};
export default MobileCover;

MobileCover.Layout = Layout;

function SelectBrand() {
    const [age, setAge] = React.useState("");

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">My Brand</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="My Brand"
                    onChange={handleChange}
                >
                    {brands.map((item, index) => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

function SelectModel({ models }) {
    const [age, setAge] = React.useState("");

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">My Model</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="My Model"
                    onChange={(e) => handleChange(e)}
                >
                    {models.map((item, index) => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
