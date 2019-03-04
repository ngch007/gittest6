import React from 'react';
import { Route } from 'react-router-dom';
import {
  TaskOngoingHome,
  TaskOngoingList,
  Basic,
  TaskUnfinishedHome,
  TaskUnfinishedList,
  TaskHistoricalList
} from 'react-pages';

/**
 * 为react页面配置路径 
 * */
export default () => {
  return (
    <Basic>
      <Route  path="/task/ongoing/home" component={TaskOngoingHome} />
      <Route  path="/task/ongoing/list" component={TaskOngoingList} />
      <Route  path="/task/unfinished/home" component={TaskUnfinishedHome} />
      <Route  path="/task/unfinished/list" component={TaskUnfinishedList} />
      <Route  path="/task/historica/list" component={TaskHistoricalList} />
    </Basic>
  )
}



