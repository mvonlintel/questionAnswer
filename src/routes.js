import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage  from './components/home/HomePage';
import ConfigPage from './components/editQuestion/EditQuestionPage';
import AnswerPage from './components/answer/AnswerPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AnswerPage} />
        <Route path="answer" component={AnswerPage} />
        <Route path="config" component={ConfigPage} />
        <Route path="config/:id" component={ConfigPage} />
        <Route path="home" component={HomePage} />
    </Route>
);

