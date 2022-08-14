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
    Typography,
} from "@mui/material";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import router from "next/router";

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
        axios
            .get(
                "https://desicover-node.herokuapp.com/get-all-mobiles"
            )
            .then((result) => {
                let fetchedBrands = [];
                setMobilesList(result.data);
                for (var i = 0; i < result.data.length; i++) {
                    fetchedBrands.push(result.data[i].brandName);
                }
                setBrands(() => fetchedBrands);
            });
    }, []);

    const setModelByBrand = () => {
        let fetchedModels = [];
        //search for the brand to be equal in models
        for (var i = 0; i < mobilesList.length; i++) {
            if (mobilesList[i].brandName === brand) {
                fetchedModels = mobilesList[i].models;
            }
        }
        setModels(() => fetchedModels);
    };
    return (
        <>
            <Container>
                <Box sx={{ height: 20 }} />

                <Box>
                    {/* this is the selection box */}
                    <Box
                        display="flex"
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <Box
                            p={[4, 8]}
                            sx={{
                                backgroundColor: "#eee",
                                borderRadius: "10px",
                                width: ["100%", "60%"],
                            }}
                        >
                            <Box sx={{ height: 20 }} />
                            <Box textAlign={"center"}>
                                <Typography variant="h6">
                                    QUICK SEARCH
                                </Typography>
                            </Box>
                            <Box textAlign={"center"}>
                                Make your very own case. Incredibly personal and
                                completely unique!
                            </Box>
                            <Box sx={{ height: 30 }} />
                            <Box
                                display={"flex"}
                                justifyContent="center"
                                //turn this in column when the viewport is mobile
                                flexDirection={["column", "row"]}
                            >
                                <SelectBrand
                                    brands={brands}
                                    brand={brand}
                                    setBrand={setBrand}
                                    onChange={setModelByBrand}
                                />

                                <Box sx={{ width: [0, 40], height: [10, 0] }} />

                                <SelectModel
                                    models={models}
                                    model={model}
                                    setModel={setModel}
                                />
                                <Box sx={{ width: [0, 40], height: [10, 0] }} />
                                <Box>
                                    <PrimaryButton
                                        onClick={() => {
                                            router.push(
                                                "/mobile-cover/[model]",
                                                `/mobile-cover/${model}`
                                            );
                                        }}
                                    >
                                        Search Covers
                                    </PrimaryButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* the selection box ends here */}
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
                                            <>
                                                <Grid item xs={2.2}>
                                                    <ShowBrandInfoCard
                                                        name={data.brandName}
                                                        image={
                                                            data.mobileBrandImage
                                                        }
                                                        models={data.models}
                                                        count={count}
                                                        setCount={setCount}
                                                        index={index}
                                                        isImageHovered={
                                                            isImageHovered
                                                        }
                                                    />
                                                </Grid>
                                                {(index + 1) % 5 == 0 && (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        width={80}
                                                    >
                                                        <AnimatePresence>
                                                            {count != -1 && (
                                                                <motion.div
                                                                    initial={{
                                                                        height: 0,
                                                                        overflow:
                                                                            "hidden",
                                                                    }}
                                                                    animate={{
                                                                        height: "auto",
                                                                    }}
                                                                    exit={{
                                                                        height: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 1.4,
                                                                    }}
                                                                    className=""
                                                                >
                                                                    <Grid
                                                                        container
                                                                        spacing={
                                                                            3
                                                                        }
                                                                    >
                                                                        {mobilesList[
                                                                            count
                                                                        ].models.map(
                                                                            (
                                                                                data
                                                                            ) => (
                                                                                <Grid
                                                                                    item
                                                                                    xs={
                                                                                        2
                                                                                    }
                                                                                >
                                                                                    <p className="outlined-div">
                                                                                        {
                                                                                            data
                                                                                        }
                                                                                    </p>
                                                                                </Grid>
                                                                            )
                                                                        )}
                                                                    </Grid>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </Grid>
                                                )}
                                            </>
                                        ))}
                                </Grid>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
        </>
    );
};
export default MobileCover;

MobileCover.Layout = Layout;

export const SelectBrand = ({ brands, brand, setBrand, onChange }) => {
    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    useEffect(() => {
        //this sets the models in the menu dropdown
        onChange();
    }, [brand]);
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

export const SelectModel = ({ models, model, setModel }) => {
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

export const ShowBrandInfoCard = ({
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
                // className="sub_cat_main_container"
                role="tab"
                id="headingOne"
                style={{ height: 207 }}
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
                        <Image
                            src={image}
                            alt={name}
                            width={120}
                            height={120}
                            unoptimized
                        />
                        <h5>{name}</h5>
                    </Box>{" "}
                </div>
            </div>

            {/* this is the space which will be revealed and will show the models list */}
            {/* first I'm checking the index and then will check  */}
            {/* {index % 5 == 0 && (
                <>

                </>
            )} */}
        </>
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
