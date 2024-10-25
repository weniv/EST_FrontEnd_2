import React, { useState } from 'react'

export default function ListItem({ data }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <button onClick={() => setIsActive(!isActive)}>{data.name}</button>
            {
                isActive ? <dl>
                    <dt>email</dt>
                    <dd>{data.email}</dd>
                    <dt>job</dt>
                    <dd>{data.job}</dd>
                </dl> : null
            }
        </>
    )
}
