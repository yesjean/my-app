import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  // text: todo 내용
  // checked: 체크박스 상태
  // id: todo 의 고유 아이디
  // onToggle: 체크박스를 키고 끄는 함수
  // onRemove: 아이템을 삭제시키는 함수

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함 (삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줌. 따라서 onToggle은 실행되지 않고 onRow만 실행된다.)
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;