import React from 'react'

import Header from './Header';
import Footer from './Footer';
import Content from './Content'
import '../../style/App.css'

export default function Layout(props) {

  const layoutStyle = {
    minHeight: 100 + 'vh',
    padding: 0
  };

  return (
    <div className='section is-centered' style={layoutStyle}>
      <Content >
        {props.children}
      </Content>
    </div>
  )
}
