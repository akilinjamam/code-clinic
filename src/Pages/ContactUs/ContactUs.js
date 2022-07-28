import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard/ContactCard';

const ContactUs = () => {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch("developersData.json").then(res => res.json()).then(data => setDevelopers(data))
    }, [])
    return (
        <div className='mt-10 '>
            <h1 className='text-4xl'>Contact ours Developers: {developers?.length}</h1>
            <div className='grid gap-5 grid-cols-3 mt-10 mb-5' >
                {
                    developers?.map(developer => <ContactCard
                        key={developer.id}
                        developer={developer}
                    />)
                }
            </div>
        </div>
    );
};

export default ContactUs;