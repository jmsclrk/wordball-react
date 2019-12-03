import React from 'react'

import Header from './Header';
import Footer from './Footer';
import Content from './Content'

export default function Layout(props) {

  const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </div>
  )
}