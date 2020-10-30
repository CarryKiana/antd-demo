import React from 'react';
import { Layout } from 'antd';
import './index.scss'
import Nav from './Sider/menu'
import View from './Content';
import { BrowserRouter as Router } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

function Wrapper() {
  return (
    <Router>
      <Layout className="wrapper">
        <Sider theme="light" breakpoint="xl" collapsedWidth={80} collapsible defaultCollapsed>
          <Nav></Nav>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <View></View>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  )
}
export default Wrapper;
