import React from 'react';
import { Menu } from 'antd';
import {
  BarChartOutlined,
  HomeOutlined,
  PlaySquareOutlined,
  DeploymentUnitOutlined,
  AppstoreOutlined,
  CreditCardOutlined,
  GiftOutlined,
  TagOutlined,
  CarOutlined,
  UserSwitchOutlined,
  WarningOutlined,
  UserOutlined,
  EditOutlined
} from '@ant-design/icons';
import './menu.scss';

const { SubMenu }  = Menu;

const routerMap = [
  {
    path: '/report',
    title: '数据报表',
    icon: <BarChartOutlined />,
    items: [
      {
        path: '/report/basic',
        title: '基础报表'
      },
      {
        path: '/report/personas',
        title: '用户画像'
      },
      {
        path: '/report/business',
        title: '业务数据'
      },
      {
        path: '/report/interaction',
        title: '互动数据'
      }
    ]
  },
  {
    path: '/community',
    title: '社区管理',
    icon: <HomeOutlined />,
    items: [
      {
        path: '/community/contentList',
        title: '社区内容管理'
      },
      {
        path: '/community/contentDetail',
        title: '内容详情页',
        hidden: true
      },
      {
        path: '/community/carouselList',
        title: '轮播图管理'
      },
      {
        path: '/community/carouselEdit',
        title: '编辑轮播图',
        hidden: true
      },
      {
        path: '/community/carouselAdd',
        title: '新增轮播图',
        hidden: true
      }
    ]
  },
  {
    path: '/broadcastRoom',
    title: '直播间管理',
    icon: <PlaySquareOutlined />,
    items: [
      {
        path: '/broadcastRoom/appletList',
        title: '小程序直播'
      },
      {
        path: '/broadcastRoom/appletEdit',
        title: '编辑直播间',
        hidden: true
      },
      {
        path: '/broadcastRoom/appletAdd',
        title: '创建直播间',
        hidden: true
      },
      {
        path: '/broadcastRoom/appletDetail',
        title: '直播间详情',
        hidden: true
      },
      {
        path: '/broadcastRoom/externalList',
        title: '外部平台直播'
      },
      {
        path: '/broadcastRoom/externalEdit',
        title: '创建直播',
        hidden: true
      }
    ]
  },
  {
    path: '/showRoom',
    title: '智能展厅管理',
    redirect: '/showRoom/list',
    icon: <DeploymentUnitOutlined />,
    items: [
      {
        path: '/showRoom/list',
        title: '智能展厅管理'
      },
      {
        path: '/showRoom/add',
        title: '创建车型'
      },
      {
        path: '/showRoom/edit',
        title: '编辑车型'
      },
      {
        path: '/showRoom/detail',
        title: '查看车型'
      }
    ]
  },
  {
    path: '/infomation',
    title: '资讯版块管理',
    redirect: '/infomation/content',
    icon: <AppstoreOutlined />,
    items: [
      {
        path: '/infomation/content',
        title: '内容管理'
      },
      {
        path: '/infomation/detail',
        title: '内容详情'
      },
      {
        path: '/infomation/creatcontent',
        title: '创建内容'
      },
      {
        path: '/infomation/platelist',
        title: '版块管理'
      },
      {
        path: '/infomation/createPlate',
        title: '新建版块'
      }
    ]
  },
  {
    path: '/integral',
    title: '积分管理',
    icon: <CreditCardOutlined />,
    items: [
      {
        path: '/integral/goods',
        title: '商品管理'
      },
      {
        path: '/integral/goods/detail',
        title: '商品详情'
      },
      {
        path: '/integral/goods/update',
        title: '更新商品'
      },
      {
        path: '/integral/register',
        title: '签到管理'
      },
      {
        path: '/integral/order',
        title: '订单管理'
      },
      {
        path: '/integral/index',
        title: '用户积分管理'
      },
      {
        path: '/integral/detail',
        title: '用户积分详情'
      },
      {
        path: '/integral/task',
        title: '分享任务管理'
      }
    ]
  },
  {
    path: '/game',
    title: '抽奖设置',
    redirect: '/game/index',
    icon: <GiftOutlined />,
    items: [
      {
        path: '/game/index',
        title: '抽奖管理'
      },
      {
        path: '/game/rules',
        title: '抽奖规则'
      }
    ]
  },
  {
    path: '/activity',
    title: '活动管理',
    icon: <TagOutlined />,
    items: [
      {
        path: '/activity/index',
        title: '小程序活动'
      },
      {
        path: '/activity/type',
        title: '选择活动类型'
      },
      {
        path: '/activity/online',
        title: '创建线上常规活动'
      },
      {
        path: '/activity/question',
        title: '创建线上调查问卷'
      },
      {
        path: '/activity/offline',
        title: '创建线下活动'
      },
      {
        path: '/activity/detail',
        title: '活动详情'
      },
      {
        path: '/activity/cloudHall',
        title: '云展厅抽奖活动'
      }
    ]
  },
  {
    path: '/testdrive',
    title: '试驾管理',
    icon: <CarOutlined />,
    items: []
  },
  {
    path: '/agent/agent',
    title: '经销商管理',
    icon: <UserSwitchOutlined />,
    items: [
      {
        path: '/agent/agent',
        title: '经销商管理'
      },
      {
        path: '/agent/ranking',
        title: '拉新总排行榜'
      },
      {
        path: '/agent/consultant',
        title: '查看顾问'
      }
    ]
  },
  {
    path: '/senseword',
    title: '敏感词管理',
    icon: <WarningOutlined />,
    items: [

    ]
  },
  {
    path: '/user',
    title: '用户管理',
    icon:  <UserOutlined />,
    items: [
      {
        path: '/user/index',
        title: '用户管理'
      },
      {
        path: '/user/role',
        title: '用户角色管理'
      }
    ]
  },
  {
    path: '/account/role',
    title: '账号管理',
    icon: <EditOutlined />,
    items: [
      {
        path: '/account/role',
        title: '账号管理'
      },
      {
        path: '/account/editrole',
        title: '角色管理'
      }
    ]
  }
]
class Nav extends React.Component {
  state = {
    openKeys: ['sub1']
  }
  onOpenChange = openKeys => {
    if (openKeys.length) {
      this.setState({
        openKeys: openKeys.slice(openKeys.length - 1)
      })
    } else {
      this.setState({
        openKeys: []
      })
    }
  }
  onClick = obj => {
    console.log(obj)
  }
  render() {
    let map = routerMap.map((sub, index) => {
      if (sub.items && sub.items.length) {
        const arr = sub.items.map((item,index) => {
          return <Menu.Item key={index}>{ item.title }</Menu.Item>
        })
        return (
          <SubMenu key={index} icon={ sub.icon } title={sub.title}>
            { arr }
          </SubMenu>
        )
      } else {
        return <Menu.Item key={index} icon={ sub.icon }>{ sub.title }</Menu.Item>
      }
    })
    return (
      <>
        <div className="slider-logo">
          运营管理系统
        </div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.onClick}
        >
          {
            map
          }
        </Menu>
      </>
    );
  }
}

export default Nav
