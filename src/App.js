import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import './App.css';

import Main from './components/main'

function App() {
  return (
<div className="demo-big-contentLay">
    <Layout>
        <Header title="Farm App" scroll>
            <Navigation>
                <Link to="/">Bei Sokoni</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Manage Farm</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
