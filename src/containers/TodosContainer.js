import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove
}) => {
    return (<Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove} />);
};

const mapStateToProps = state => ({ //어떤 것을 props로 넣어줄지 결정
    input: state.todos.text,
    todos: state.todos.todos
});
const mapDispatchToProps = dispatch => ({
    changeInput: () => {
        dispatch(changeInput());
    },
    insert: () => {
        dispatch(insert());
    },
    toggle: () => {
        dispatch(toggle());
    },
    remove: () => {
        dispatch(remove());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodosContainer);
