import React from "react";
import Layout from "../Layout/layout";
import { DataTable, Card, Footer } from "../Components/index";

const Home = () => {

    return (
        <Layout>
            <DataTable />
            <Card />
            <Footer />
        </Layout>
    )
};

export default Home;