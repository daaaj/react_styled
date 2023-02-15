import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const FormArea = styled.form`
    > label {
        margin-right: 10px;
    }

    > input {
        height: 30px;
        border: 2px solid yellowgreen;
        &:focus {
            outline: 3px solid yellowgreen;
        }
        border-radius: 20px;
        padding: 0px 10px;
        margin-right: 20px;
        box-shadow: 5px 5px 10px lightgrey;
    }

    > button {
        width: 80px;
        height: 35px;
        border-radius: 20px;
        background-color: yellowgreen;
        border: none;
        cursor: pointer;
        box-shadow: 5px 5px 10px lightgrey;
    }
`;

function Input() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const nameInput = (e) => {
        setName(e.target.value);
    };
    const priceInput = (e) => {
        let value = e.target.value;

        // 정규식...숫자인지 검사
        let num = /^[0-9,]/.test(value); // true, false 리턴

        if (!num || value === '') {
            setPrice('');
            return;
        }
        if (num || value !== '') {
            // 정규식으로... 콤마 -> ''로 바꿔주기
            let newValue = value.replace('/,/g', '');
            // 정규식으로...3자리마다 콤마 넣어주기...
            value = newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // setPrice 값 넣기
            setPrice(value);
        }
    };

    // 저장 버튼 클릭시
    const submitBtn = (e) => {
        if (name !== '' && price !== '') {
            let newPrice = price.replace(/,/g, '');
            alert(`{ name : ${name} , price : ${newPrice} }`);
            // 타입 submit 변경
            e.target.type = 'submit';
        }
    };
    return (
        <div>
            <h1>Input</h1>
            <FormArea>
                {/* jsx에서는 for 대신에 htmlfor 써야함!! */}
                <label htmlFor="name">이름</label>
                <input type="text" name="name" value={name} onChange={nameInput} />
                <label htmlFor="price">가격</label>
                <input type="text" name="price" value={price} onChange={priceInput} />

                <button type="button" onClick={submitBtn}>
                    저장
                </button>
            </FormArea>
        </div>
    );
}

export default Input;
