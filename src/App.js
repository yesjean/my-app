import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  // 초기 state 정의하기
  state = {
    input: '',
    todos: [
      { id: 0, text: ' 나의', checked: false },
      { id: 1, text: ' 할일을', checked: true },
      { id: 2, text: ' 적어보자', checked: false }
    ]
  }

  /*
  Form 컴포넌트에서 필요한 기능

  1. 텍스트 내용 바뀌면 state 업데이트
  2. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
  3. 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기

  위 기능들을 구현하기 위해선 컴포넌트에 handleChange, handleCreate, handleKeyPress 메소드들을 만들어주고
  이를 상태의 input 값과 함께 Form 컴포넌트로 전달
  */

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가 (리액트에서 배열을 다룰때는 push 사용 X)
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;