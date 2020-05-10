import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';

import './App.css';

function App() {
  return (
<div className="demo-big-contentLay">
    <Layout>
        <Header title="Farm App" scroll>
            <Navigation>
                <a href="/">Bei Sokoni</a>
                <a href="/">About</a>
                <a href="/">Login</a>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>

  );
}

export default App;
