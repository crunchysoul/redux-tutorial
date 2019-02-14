import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  <div>
    <span>Show: </span>
    <FilterLink fliter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
    <FilterLink fliter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
    <FilterLink fliter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
  </div>;
};

export default Footer;
