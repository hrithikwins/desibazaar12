import Layout from "@components/layout/layout";
import PrimaryButton from "@components/ui/button";
import Container from "@components/ui/container";
import { styled } from "@mui/material/styles";
import {
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Grid,
    Paper,
} from "@mui/material";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

const MobileCover = () => {
    const [mobilesList, setMobilesList] = useState([]);
    const [isImageHovered, setImageHovered] = useState(false);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [model, setModel] = React.useState("");
    const [brandIndex, setBrandIndex] = useState(0);
    const [count, setCount] = useState(-1);

    const [brand, setBrand] = React.useState("");
    useEffect(() => {
        // [
        //     {
        //         _id: "62625ce86987988a163bd91d",
        //         mobileBrandImage: "Apple",
        //         brandName: "Apple",
        //         models: ["iPhone SE", "iPhone 5", "iPhone 6", "iPhone 6s"],
        //         createdAt: "2022-04-22T07:44:40.421Z",
        //         updatedAt: "2022-04-22T07:44:40.421Z",
        //         __v: 0,
        //     },
        // ];
        axios.get("http://localhost:8000/get-all-mobiles").then((result) => {
            let fetchedBrands = [];
            setMobilesList(result.data);
            for (var i = 0; i < result.data.length; i++) {
                fetchedBrands.push(result.data[i].brandName);
            }
            setBrands(() => fetchedBrands);
        });
    }, []);

    function setModelByBrand() {
        let fetchedModels = [];
        //search for the brand to be equal in models
        for (var i = 0; i < mobilesList.length; i++) {
            if (mobilesList[i].brandName === brand) {
                fetchedModels = mobilesList[i].models;
            }
        }
        setModels(() => fetchedModels);
    }
    return (
        <>
            <Container>
                <Box sx={{ height: 20 }} />
                <Box display={"flex"} justifyContent="center">
                    <SelectBrand
                        brands={brands}
                        brand={brand}
                        setBrand={setBrand}
                        onChange={setModelByBrand}
                    />
                    <Box sx={{ width: 40 }} />
                    {/* {brand}
                    {JSON.stringify(models)} */}

                    <SelectModel
                        models={models}
                        model={model}
                        setModel={() => setModel()}
                    />
                    <Box sx={{ width: 40 }} />
                    <Box>
                        <PrimaryButton>Load</PrimaryButton>
                    </Box>
                </Box>
                <Box sx={{ height: 80 }} />
                <Box
                    // sx={{ width: 800 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <div>
                        <div
                            className="category-main-container"
                            role="tablist"
                            aria-multiselectable="true"
                        >
                            <Grid container spacing={2}>
                                {mobilesList &&
                                    mobilesList.length != 0 &&
                                    mobilesList.map((data, index) => (
                                        <Grid item xs={3}>
                                            <ShowBrandInfoCard
                                                name={data.brandName}
                                                image={data.mobileBrandImage}
                                                models={data.models}
                                                count={count}
                                                setCount={setCount}
                                                index={index}
                                                isImageHovered={isImageHovered}
                                            />
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>
                    </div>
                    {/* <Box>{data.mobileBrandImage}</Box> */}
                    {/* <Grid container spacing={2}>
                        <Grid item xs={4}> */}
                    {/* </Grid>
                    </Grid> */}
                </Box>
            </Container>
        </>
    );
};
export default MobileCover;

MobileCover.Layout = Layout;

const SelectBrand = ({ brands, brand, setBrand, onChange }) => {
    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">My Brand</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brand}
                    label="My Brand"
                    onChange={(e) => {
                        handleChange(e);
                        onChange();
                    }}
                >
                    {brands.map((item, index) => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

const SelectModel = ({ models, model, setModel }) => {
    const handleChange = (event) => {
        setModel(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">My Model</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={model}
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
};

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "forms",
                "menu",
                "privacy",
                "footer",
            ])),
        },
    };
};

/**
 *
 * @name {name} is the brandName
 * @image {image} is the brandImage
 * @models {models} is the array of models
 * @setCount {setCount} is for updating the  value stored in the setCount (in the parent)
 * @count {count} is also from the parent
 * @index {index} is count of current element
 * @returns
 */

const ShowBrandInfoCard = ({
    name,
    image,
    models,
    setCount,
    count,
    index,
    isImageHovered,
}) => {
    // const [clicked, setClicked] = useState(false);
    return (
        <>
            <div
                className="sub_cat_main_container"
                role="tab"
                id="headingOne"
                style={{ height: 107 }}
                onClick={() => setCount(count != index ? index : -1)}
            >
                <div>
                    <Box
                        sx={{
                            filter: "grayscale(100%)",
                            cursor: "pointer",
                            "&:hover": {
                                filter: "grayscale(0%)",
                            },
                        }}
                        display="flex"
                        flexDirection={"column"}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {image}
                        <Image
                            src={image}
                            alt="apple-logo_3"
                            width={80}
                            height={50}
                        />
                        <h5>{name}</h5>
                    </Box>{" "}
                </div>
                <AnimatePresence>
                    {count == index && count != -1 && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            className="outlined-container"
                        >
                            <Grid container spacing={1}>
                                <Grid container spacing={3}>
                                    {models.map((data) => (
                                        <Grid item xs={2}>
                                            <div className="outlined-div">
                                                {data}
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
