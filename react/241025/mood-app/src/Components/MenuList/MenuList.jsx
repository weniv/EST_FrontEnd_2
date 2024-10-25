import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList() {

    // 기분 상태 리스트
    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

    return (
        <ul className='container-list'>
            {menus.map((moodEl, index) => {
                return (
                    <MenuListItem key={index} mood={moodEl} />
                );
            })}
        </ul>
    )
}
