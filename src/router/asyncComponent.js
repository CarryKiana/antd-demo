import React from 'react';
// 异步按需加载component
export function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }
    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    componentWillUnmount() {
      this.setState = (state, callback) => {
        return;
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.prop} />
      }
      return null
    }
  }
}