import React from 'react'

export default function Resume({ hello, name, hobby, food, color }) {
    return (
        <>
            <h1>{name}의 자기소개서</h1>
            <h2>{hello}</h2>
            <dl>
                <dt>취미:</dt>
                <dd>{hobby}</dd>
                <dt>좋아하는 음식:</dt>
                <dd>{food}</dd>
                <dt>좋아하는 색:</dt>
                <dd>{color}</dd>
            </dl>
        </>
    )
}
