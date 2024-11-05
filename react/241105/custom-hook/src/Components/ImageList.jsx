import React from 'react'

export default function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((image) => {
                return (
                    <li key={image.id} style={{ width: '300px' }}>
                        <img src={image.download_url} alt="" style={{ width: '100%' }} />
                    </li>
                )
            })}
        </ul>
    )
}
