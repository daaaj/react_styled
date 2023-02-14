import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const SelectDiv = styled.div`
    // 높이 지정...
    height: 150px;
    border: 3px solid darkred;
    margin-top: 30px;
    padding-bottom: 50px;
    overflow: ${(props) => (props.over === true ? 'hidden' : 'visible')};
`;

const SelectListArea = styled.div`
    display: flex;
    flex-direction: row;
`;

const SelectListFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 200px;
    height: 40px;
    padding: 0px 10px;
    margin-left: 20px;
    border: 3px solid navy;

    cursor: pointer;
    // 텍스트 안잡히게!!!
    user-select: none;
`;

const SelectList = styled.div`
    background-color: white;
    display: ${(props) => props.display};

    width: 220px;
    border: 3px solid navy;
    border-top: none;
    margin-left: 20px;

    > ul {
        padding: 0;
        margin: 0;
        width: 100%;
        > li {
            list-style: none;
            padding: 0px 10px;
            // li는 line-height 로 해야 세로정렬...
            line-height: 40px;
            user-select: none;

            &:hover {
                cursor: pointer;
                background-color: lightcyan;
            }
        }
    }
`;

function Select() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const leftSelect = useRef();
    const rightSelect = useRef();

    useEffect(() => {
        const leftSelectClick = (e) => {
            if (leftSelect.current.contains(e.target)) {
                setShow(!show);
            }
        };
        document.addEventListener('mousedown', leftSelectClick);
    });

    useEffect(() => {
        const rightSelectClick = (e) => {
            if (rightSelect.current.contains(e.target)) {
                setShow2(!show2);
            }
        };
        document.addEventListener('mousedown', rightSelectClick);
    });

    return (
        <SelectDiv over={show2}>
            <h1>Select</h1>
            <SelectListArea>
                <div>
                    <SelectListFirst ref={leftSelect}>
                        <span>React</span>
                        <span>🔽</span>
                    </SelectListFirst>
                    <SelectList display={show ? 'block' : 'none'}>
                        <ul>
                            <li>React</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                        </ul>
                    </SelectList>
                </div>

                <div>
                    <SelectListFirst ref={rightSelect}>
                        <span>React</span>
                        <span>🔽</span>
                    </SelectListFirst>
                    <SelectList display={show2 ? 'block' : 'none'}>
                        <ul>
                            <li>React</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                        </ul>
                    </SelectList>
                </div>
            </SelectListArea>
        </SelectDiv>
    );
}

export default Select;
