import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'
import { fetchTodos } from './api'

fetchTodos('all').then(todos =>
  console.log(todos)
)

let store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
