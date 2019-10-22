import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;

class MainNav extends React.Component {
  
  constructor(props){
    super(props);
  }

  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="budgets">
          <Icon type="clock-circle" />
          Budgets
        </Menu.Item>
        {/* LEAVING IN FOR REFERENCE AS WE GET FURTHER */}
        {/* SEE https://ant.design/components/menu/ */}
        {/*<SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        */}
      </Menu>
    );
  }
}
MainNav.propTypes = {
}

export default MainNav;