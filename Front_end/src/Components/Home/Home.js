import React from "react";
import { useEffect, useState } from "react";
// import styles from './style.module.css';
import userApi from "../../api/employeeApi";

//Component
import Sectionspace from './sectionspace.jsx';
import FeatureBook from './Feature_book.jsx';
import Releases from './Release.jsx';
import Collection from './Collection_count.jsx';
import PB_author from './PB_Author.jsx';
import Testimonials from './Testimonials.jsx';
import Index_news from './Index_news.jsx';
const Home = () => {
    const [user, setUser] = useState([]);
    const [Emails, setEmails] = useState('');
    const [Passwords, setPasswords] = useState('');
    const fetchUser = async () => {
        try {
            const response = await userApi.getAll();
            setUser(response);
            console.log('List_Employee is ', response);

        } catch (error) {
            console.log('failed to fetch employee list', error);
        }
    }
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await userApi.login(Emails, Passwords);
            console.log('List_Employee is ', response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
            {/*************************************
					Best Selling Start
			**************************************/}
            {<Sectionspace></Sectionspace>}
            {/*************************************
					Best Selling End
			**************************************/}
            {/*************************************
					Featured Item Start
			**************************************/}
            {<FeatureBook></FeatureBook>}
            {/*************************************
					Featured Item End
			**************************************/}
            {/*************************************
					New Release Start
			**************************************/}
            {<Releases></Releases>}
            {/*************************************
					New Release End
			**************************************/}
            {/*************************************
					Collection Count Start
			**************************************/}
            {<Collection></Collection>}
            {/*************************************
					Collection Count End
			**************************************/}
            {/*************************************
					Picked By Author Start
			**************************************/}

            {<PB_author></PB_author>}

            {/*************************************
					Picked By Author End
			**************************************/}
            {/*************************************
					Testimonials Start
			**************************************/}
            {<Testimonials></Testimonials>}
            {/*************************************
					Testimonials End
			**************************************/}
            {/* Latest News Start */}
            {/* **************************************/}
            {<Index_news></Index_news>}
            {/*************************************
					Latest News End
			**************************************/}
            {/*************************************
				Main End
		**************************************/}
        </div>
    )

}
export default Home