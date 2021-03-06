import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);

    case VisibilityFilters.SHOW_ALL:
      return todos;

    default:
      throw new Error('Unknown filters: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todo: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
