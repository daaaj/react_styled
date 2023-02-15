import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useState, useRef } from 'react';

const ModalArea = styled.div`
    z-index: 999;
`;
// 버튼 공통
const OpenModalBtn = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    box-shadow: 5px 5px 10px lightgrey;
    background-color: ${(props) => props.color};
`;

// 모달창 공통
const ModalBox = styled.div`
    display: ${(props) => props.isOpen};
    display: flex;
    align-items: center;
    justify-content: center;

    // 맨 위로
    z-index: 999;
    // 중앙배치
    // absolute : 상위요소 비례해서..
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 20px;
    background-color: ${(props) => props.color};

    width: 300px;
    height: 300px;

    > button {
        margin-right: 10px;
        width: 100px;
        height: 30px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }
`;

// 모달창 바깥영역 어둡게..
const ModalOutArea = styled.div`
    display: ${(props) => props.isOpen};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

function Modal() {
    // 모달창 display 속성 none / block
    const [open, setOpen] = useState('none');
    const [open2, setOpen2] = useState('none');

    // open버튼 클릭시
    const OpenModal = (e) => (e.target.name === 'first' ? setOpen('block') : setOpen2('block'));
    // close버튼 클릭시
    const closeModal = (e) => (e.target.name === 'first' ? setOpen('none') : setOpen2('none'));

    // 2번 모달창 outside 클릭시 close
    const outside = useRef();

    useEffect(() => {
        const outsideClick = (e) => {
            if (!outside.current.contains(e.target)) {
                setOpen2('none');
            }
        };
        document.addEventListener('mousedown', outsideClick);
    });

    return (
        <ModalArea>
            <h1>Modal</h1>
            <div>
                <OpenModalBtn name={'first'} color={'gold'} onClick={OpenModal}>
                    open modal
                </OpenModalBtn>
                <OpenModalBtn color={'beige'} onClick={OpenModal}>
                    open modal
                </OpenModalBtn>
            </div>

            {/* 모달창 */}
            <ModalOutArea isOpen={open}>
                <ModalBox isOpen={open} color={'#c8e074'}>
                    <button onClick={closeModal} name={'first'}>
                        close
                    </button>
                    <button>ok</button>
                </ModalBox>
            </ModalOutArea>
            <ModalOutArea isOpen={open2}>
                <ModalBox isOpen={open2} ref={outside} color={'lavender'}>
                    <button onClick={closeModal}>close</button>
                </ModalBox>
            </ModalOutArea>
        </ModalArea>
    );
}

export default Modal;
