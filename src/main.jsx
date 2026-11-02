import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
       <Card title="My React Course" description="Learn React" />
       <Card title="My React Course" description="Learn React" />
  </StrictMode>,
)
