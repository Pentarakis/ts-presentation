import { getBackground } from './bg-utils';
import './title.css';

export const Title = props => {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const backgroundStyle = getBackground(props);

    return (
        <div className="title-wrapper">
            <header>
                <img className='logo' src='adesso/assets/logo-claim.png'></img>
                {children.filter(e => e.props.mdxType === 'h1').map((h1, i) => (<h1 key={i}>{h1.props.children}</h1>))}
                {children.filter(e => e.props.mdxType === 'h2').map((h2, i) => (<h2 key={i}>{h2.props.children}</h2>))}
            </header>
            <main style={backgroundStyle}>
                <img className='highlight-side' src='adesso/assets/title-page-side.png'></img>
                {children.filter(e => e.props.mdxType !== 'h1' && e.props.mdxType !== 'h2')}
            </main>
        </div>
    )
}
