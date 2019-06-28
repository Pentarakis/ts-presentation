import { getBackground } from './bg-utils';
import './section.css';

export const Section = props => {
    //TODO: check for mdx components or plain text
    const children = (Array.isArray(props.children) ? props.children : [props.children]).filter(Boolean);
    const logo = props.logo === 'white' ? 'adesso/assets/logo-white.png' : 'adesso/assets/logo.png'
    const backgroundStyle = getBackground(props);
    return (
        <div className="section-wrapper" style={backgroundStyle}>
            <header>
                <img className='logo' src={logo}></img>
                {children.filter(e => e.props.mdxType === 'h1').map((h1, i) => (<h1 key={i}>{h1.props.children}</h1>))}
                {children.filter(e => e.props.mdxType === 'h2').map((h2, i) => (<h2 key={i}>{h2.props.children}</h2>))}
            </header>
            <img className='highlight-side' src='adesso/assets/title-page-side-big.png'></img>
            {children.filter(e => e.props.mdxType !== 'h1' && e.props.mdxType !== 'h2')}
        </div>
    )
}
