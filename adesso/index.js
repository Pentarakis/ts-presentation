import React from 'react';
import { useDeck } from '@mdx-deck/components';
import './styles.css';

export const theme = {
  css: {
    textAlign: 'left',
  }
};

const sideStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0
}
const logoStyle = {
  position: 'absolute',
  top: '60px',
  right: '60px'
}

const titleStyle = {

}

export const Title = props => {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  return (
    <div className="title-wrapper">
      <header>
        <img src='adesso/logo-claim.png' style={logoStyle}></img>
        {children.filter(e => e.props.mdxType === 'h1').map(h1 => (<h1 style={titleStyle}>{h1.props.children}</h1>))}
        {children.filter(e => e.props.mdxType === 'h2').map(h2 => (<h2 style={titleStyle}>{h2.props.children}</h2>))}
      </header>
      <img src='adesso/title-page-side.png' style={sideStyle}></img>
      {children.filter(e => e.props.mdxType !== 'h1' && e.props.mdxType !== 'h2')}
    </div>
  )
}

function formatCurrentDate() {
  const now = new Date();
  return `${now.getDate().toString().padStart(2, 0)}.${(now.getMonth() + 1).toString().padStart(2, 0)}.${now.getFullYear()}`;
}


export const Slide = props => {
  const state = useDeck();
  const children = Array.isArray(props.children) ? props.children : [props.children];
  return (
    <div className="slide-wrapper">
      <header>
        <div className='first-line'>
          <div className='slide-number'>{state.index + 1}</div>
          <div className='current-date'>{formatCurrentDate()}</div>  
          <div className='company-name'>adesso AG</div>
        </div>
        <img className='logo' src='adesso/logo.png'></img>
        {children.filter(e => e.props.mdxType === 'h1').map((h1, idx) => (<h1 key={idx}>{h1.props.children}</h1>))}
      </header>
      <main>{children.filter(e => e.props.mdxType !== 'h1')}</main>
    </div>
  )
}