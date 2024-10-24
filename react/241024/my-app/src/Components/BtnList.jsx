import React from "react";
import { useState } from "react";

const fill = [
    { id: 1, text: "좋아요! 😃" },
    { id: 2, text: "정말 좋아요! 😚" },
    { id: 3, text: "최고에요! 😄" },
    { id: 4, text: "미쳤어요!! 😜" },
];

export default function BtnList() {
    let [isGood, setIsGood] = useState("아직 아무것도 선택하지 않았어요.");

    function clickBtn(e) {
        setIsGood(e.target.textContent);
    }

    function Display() {
        return (
            <div className="displayWrap">
                <h2>{isGood}</h2>
            </div>
        );
    }

    const fillText = fill.map((item) => {
        return (
            <>
                <button key={item.id} onClick={clickBtn}>
                    기분이: {item.text}
                </button>
            </>
        );
    });
    return (
        <>
            {fillText}
            <Display />
        </>
    );
}