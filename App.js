import * as React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Provider} from 'mobx-react';
import TodoStore from './src/store/todoStore';

export const App = () => {
  return (
    <Provider todoStore={new TodoStore()}>
      <AppNavigation />
    </Provider>
  );
};
