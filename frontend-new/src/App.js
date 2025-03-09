import React, { useState } from 'react';
import { Button, Card, Typography, Layout, message } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import './App.css';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMsg(data.message);
      message.success('获取消息成功！');
    } catch (error) {
      console.error('Error fetching message:', error);
      message.error('获取消息失败，请查看控制台');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" />
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          Ant Design Hello World
        </Title>
      </Header>
      <Content style={{ padding: '50px', minHeight: 'calc(100vh - 134px)' }}>
        <Card style={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
          <Typography>
            <Title level={2}>Hello World Demo</Title>
            <Paragraph>
              这是使用Ant Design框架构建的Hello World示例应用。
              点击下面的按钮从API获取消息。
            </Paragraph>
          </Typography>
          
          <Button 
            type="primary" 
            onClick={fetchMessage} 
            loading={loading}
            style={{ marginBottom: 16 }}
          >
            获取消息
          </Button>
          
          {msg && (
            <Card type="inner" style={{ marginTop: 16 }}>
              <Typography>
                <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
                  {msg}
                </Paragraph>
              </Typography>
            </Card>
          )}
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Hello World Demo ©{new Date().getFullYear()} Created with <HeartTwoTone twoToneColor="#eb2f96" /> and Ant Design
      </Footer>
    </Layout>
  );
}

export default App;
