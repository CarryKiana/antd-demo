import React from 'react';
import { Menu } from 'antd';
import { routerMap } from 'router/data'
import './menu.scss';
import { useHistory } from 'react-router-dom';

const { SubMenu }  = Menu;
let _unListen;
class Nav extends React.Component {
  state = {
    openKeys: [],
    selectedKeys: []
  }
  constructor(props) {
    super(props)
    const openKey = this.props.history.location.pathname.match(/\/[^/]+/)
    this.state.openKeys = openKey ? [...openKey] : []
    this.state.selectedKeys = [this.props.history.location.pathname]
  }
  componentDidMount() {
    _unListen = this.props.history.listen(() => {
      this.urlChange()
    })
  }
  componentWillUnmount() {
    _unListen && _unListen()
  }
  urlChange = () => {
    const openKey = this.props.history.location.pathname.match(/\/[^/]+/)
    this.setState({
      openKeys: openKey ? [...openKey] : [],
      selectedKeys: [this.props.history.location.pathname]
    })
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
    this.props.history.push(obj.key)
  }
  render() {
    let map = routerMap.map((sub) => {
      if (sub.items && sub.items.length && !sub.unNest) {
        const arr = sub.items.filter(obj => !obj.hidden).map((item) => {
          return <Menu.Item key={item.path}>{ item.title }</Menu.Item>
        })
        return (
          <SubMenu key={sub.path} icon={ sub.icon } title={sub.title}>
            { arr }
          </SubMenu>
        )
      } else {
        return <Menu.Item key={sub.path} icon={ sub.icon }>{ sub.title }</Menu.Item>
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
          selectedKeys={this.state.selectedKeys}
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
// 需要用Router包住整个应用，不能随心所欲调用
// 函数式编程跳转路由可以使用withRouter或useHistory
// 只有函数式组件才能使用useHistory
// 使用useHistory的组件需要放在Router组件内，否则useHistory()为undefined
// 感觉这样的限制没有啥意义，好low啊
function HistoryNav() {
  let history = useHistory();
  return (
    <Nav history={history}></Nav>
  );
}

export default HistoryNav
