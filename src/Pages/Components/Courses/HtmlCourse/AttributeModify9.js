import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AttributeModify9 = () => {
    const { id } = useParams();
    const [dataaAtt, setDataaAtt] = useState([])


    useEffect(() => {
        const url = 'http://localhost:5000/htmlAtt';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaAtt(data))
    }, [dataaAtt])


    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const description3 = event.target.description3.value
        const updateHtmlData9 = {
            description3: description3,
        }
        // sending data to server
        const url = `http://localhost:5000/htmlAtt/description3/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHtmlData9)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log('success', data)
                alert('sent successfully');
                event.target.reset()
            })
    }


    return (
        <div>


            <form onSubmit={handleModify} action="">

                <div className='p-5'>
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Attributes</p>

                    {dataaAtt && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaAtt && <label className="label">
                            <span className="label-text font-bold"> Description:</span>
                        </label>}
                        <p> {dataaAtt.map(d => d.description3)} </p>
                        <br />
                        {dataaAtt && <div className=''>
                            <textarea required type="text" name='description3' className="input input-bordered input-primary w-full" />
                            <br />
                            <input className='btn btn-primary   text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AttributeModify9;