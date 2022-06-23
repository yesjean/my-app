import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;

/*
value : 인풋의 내용
onCreate : 버튼이 클릭될때 실행될 함수
onChange : 인풋 내용이 변경될때 실행되는 함수
onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수, 나중에 엔터가 눌렸을때 onCreate를 한것과 동일한 작업을 하기위해 사용
*/