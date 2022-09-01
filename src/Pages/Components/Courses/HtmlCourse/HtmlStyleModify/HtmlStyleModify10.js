import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HtmlStyleModify10 = () => {
    const { id } = useParams()

    const [dataaStyle, setDataaStyle] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlStyle';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaStyle(data))
    }, [dataaStyle])



    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const description4 = event.target.description4.value

        const updateStyleData10 = {
            description4: description4,
        }

        // sending data to server
        const url = `http://localhost:5000/htmlStyle/description4/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStyleData10)
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
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Html Style</p>

                    {dataaStyle && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaStyle && <label className="label">
                            <span className="label-text font-bold">Description:</span>
                        </label>}
                        <p> {dataaStyle.map(d => d.description4)} </p>
                        <br />
                        {dataaStyle && <div className=' flex'>
                            <textarea required type="text" name='description4' className="input input-bordered input-primary w-full " />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default HtmlStyleModify10;