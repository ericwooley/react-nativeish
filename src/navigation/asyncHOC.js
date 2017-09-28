import React from 'react'
// getComponent is a function that returns a promise for a component
// It will not be called until the first mount

/**
 * 
 * @example
 *  const Foo = asyncComponent(() =>
 *    System.import('./Foo').then(module => module.default)
 *  )
 *  const Bar = asyncComponent(() =>
 *    System.import('./Bar').then(module => module.default)
 *  )
 */
export default function asyncComponent (getComponent) {
  class AsyncComponent extends React.Component {
    constructor () {
      super()
      this.state = { Component: AsyncComponent.Component }
    }

    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          console.log('async loaded')
          this.setState({ Component })
        })
      }
    }
    render () {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
  AsyncComponent.Component = null
  return AsyncComponent
}
