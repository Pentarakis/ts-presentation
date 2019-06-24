import { useDeck } from '@mdx-deck/components';
import './slide.css';

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
          <img className='logo' src='adesso/assets/logo.png'></img>
          {children.filter(e => e.props.mdxType === 'h1').map((h1, idx) => (<h1 key={idx}>{h1.props.children}</h1>))}
        </header>
        <main>{children.filter(e => e.props.mdxType !== 'h1')}</main>
      </div>
    )
  }