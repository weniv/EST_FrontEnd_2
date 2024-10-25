import React from 'react'

export default function DisplayMood({ mood }) {
    return (
        <div>
            <strong>{mood ? `기분이 ${mood}` : "아직 아무런 기분도 선택되지 않았습니다."}</strong>
        </div>
    )
}
