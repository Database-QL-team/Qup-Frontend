import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/contactPage/ContactForm"
import Title from "../components/ui/Title";


const Contact = () => {
    

    return (
        <Layout>
            <Title sentence={"- 문의 -"} />
            <ContactForm/>
        </Layout>
    );
};

export default Contact;