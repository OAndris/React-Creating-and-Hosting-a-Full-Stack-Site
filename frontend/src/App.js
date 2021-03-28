import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/NavBar/NavBar';

const App = () => (
    <Router>
        <div className="App">
            <NavBar />
            <div id="page-body">
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/articles-list" component={ArticlesList} />
                <Route path="/article" component={ArticlePage} />
            </div>
        </div>
    </Router>
);

export default App;
