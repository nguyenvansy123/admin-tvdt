import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableModal = ({ title, data }) => {
    return (
        <>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        {Array.from({ length: title?.length }).map((_, index) => (
                            <th key={index} className='fs-3'>{title[index]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: data?.length }).map((_, i) => (
                        <tr key={i} >
                            {
                                Array.from({ length: Object.keys(data[i])?.length }).map(
                                    (_, index) =>
                                    (
                                        <td key={index} className='fs-4'>{data[i][Object.keys(data[i])[index]]}</td>
                                    )
                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}


