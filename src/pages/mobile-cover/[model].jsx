import axios from "axios";

export const getServerSideProps = async (context) => {
    const model = context.params.model;
    const res = await axios.get(
        "http://localhost:8000/get-products-by-model?model=" + model
    );
    const foundResult = res.data;
    console.log(foundResult);
    return {
        props: {
            model: model,
            categoryData: foundResult,
        },
    };
};

const MobileCoversByModel = ({model,  categoryData }) => {
    return (
        <>
            <h1>Mobile Covers by {model} {categoryData.toString()}</h1>
        </>
    );
};
export default MobileCoversByModel;
