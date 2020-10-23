import React from 'react';
import { Layout } from 'antd';
import './index.scss'
const { Header, Footer, Sider, Content } = Layout;

function Wrapper() {
  return (
    <Layout className="wrapper">
      <Sider theme="light" breakpoint="xl" collapsedWidth={80} collapsible defaultCollapsed>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
export default Wrapper;
