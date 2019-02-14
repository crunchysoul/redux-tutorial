import { connect } from 'react-redux';
import { setVisibiltyFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  onClick: () => dispatch(setVisibiltyFilter(ownProps.filter));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
