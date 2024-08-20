import userStore, { logout } from '../stores/user.store'
import { Outlet, useNavigate, useLocation } from "react-router"

import { ConfigProvider, Layout, Menu, theme } from "antd"
import { HomeOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout

const minHeightCalculated = 'calc(100dvh - ((112/16) * 1rem))'

function MainLayout() {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={{
      components: {
        Menu: {
          itemSelectedBg: '#083344',
          itemSelectedColor: '#ffffff'
        },
        Layout: {
          triggerBg: '#083344'
        }
      }
    }}>
      <Layout>
        <Sider breakpoint="xxl" collapsedWidth={0} defaultCollapsed={false} style={{ background: colorBgContainer }} className="border border-cyan-950">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[pathname]}
            items={[
              {
                key: '/',
                icon: <HomeOutlined />,
                label: 'Home',
                onClick: () => (navigate('/'))
              },
              {
                key: '/signup',
                icon: <FormOutlined />,
                label: 'Register',
                onClick: () => (navigate('/signup'))
              },
              {
                key: '/login',
                icon: <LogoutOutlined />,
                label: 'Logout',
                onClick: () => {
                  userStore.dispatch(logout())
                  navigate('/login')
                }
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header className="bg-cyan-950" />
          <Content>
          <section
            style={{ minHeight: minHeightCalculated }}
            className="flex flex-col justify-center items-center bg-white"
          >
            <Outlet />
          </section>
          </Content>
          <Footer className="bg-cyan-950" />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default MainLayout
