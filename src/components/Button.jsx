import React from 'react';
import styled from 'styled-components';

const ButtonArea = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`;
// 버튼 공통 style
const ShareBtn = styled.button`
    height: 50px;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    // x축 y축 blur
    box-shadow: 5px 5px 10px lightgrey;
`;

const LargeBtn = styled(ShareBtn)`
    width: 200px;
    background-color: white;
    border: 3px solid ${(props) => props.color};
`;
const MediumBtn = styled(ShareBtn)`
    width: 150px;
`;
const SmallBtn = styled(ShareBtn)`
    width: 100px;
`;

function Button() {
    const btnLabel = ['Large Primary Button', 'Large Negative Button'];

    const btnColor = (label) => {
        switch (label) {
            case 'Large Primary Button':
                return 'lightpink';
            default:
                return 'lightblue';
        }
    };

    // 버튼 클릭시
    const primaryClick = () => {
        alert('버튼을 만들어보세요 :-)');
    };
    const negativeClick = () => {
        prompt('어렵나요?..저는 yes여요...');
    };

    return (
        <div>
            <h1>Button</h1>
            {btnLabel.map((item, i) => {
                return (
                    <ButtonArea key={i}>
                        <LargeBtn color={btnColor(item)} onClick={i === 0 ? primaryClick : negativeClick}>
                            {i === 0 ? `${item} 👉` : `${item} 🔔`}
                        </LargeBtn>
                        <MediumBtn color={btnColor(item)}>Medium</MediumBtn>
                        <SmallBtn color={btnColor(item)}>Small</SmallBtn>
                    </ButtonArea>
                );
            })}
        </div>
    );
}
export default Button;
