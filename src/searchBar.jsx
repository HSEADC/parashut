// import * as ReactDOM from 'react-dom/client' -- чем отличаются?

import { createRoot } from 'react-dom/client'
import './searchBar.scss'
import React from 'react'
import O_searchBar from './components/O_searchBar/O_searchBar.jsx'

const root = createRoot(document.querySelector('.O_header .W_search'))
root.render(<O_searchBar />)
