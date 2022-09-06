import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const HtmlCceModify5 = () => {
    const { id } = useParams()
    // import {useParams} from 'react-router-dom'

    const [dataaCce, setDataaCce] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlCce';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaCce(data))
    }, [dataaCce])



    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const title4 = event.target.title4.value

        const updateCceData5 = {
            title4: title4,
        }

        // sending data to server
        const url = `http://localhost:5000/htmlCce/title4/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCceData5)
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
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Html Quatation & Citation</p>

                    {dataaCce && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaCce && <label className="label">
                            <span className="label-text font-bold">Title:</span>
                        </label>}
                        <p> {dataaCce.map(d => d.title4)} </p>
                        <br />
                        {dataaCce && <div className=' flex'>
                            <input required type="text" name='title4' className="input input-bordered input-primary w-full max-w-xs" />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default HtmlCceModify5;