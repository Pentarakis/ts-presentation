export const getBackground = (props) => {
    let background = undefined;
    if (typeof props.bg === 'number') {
        background = `url(adesso/assets/BG${props.bg}.jpg)`
    } else if (typeof props.bgSrc === 'string') {
        background = `url(${props.bgSrc})`;
    } else if (props.bg) {
        background = props.bg
    }
    const backgroundStyle = background ? {
        background,
        backgroundPosition: props.bgPosition || 'top',
        backgroundRepeat: props.bgRepeat || 'no-repeat',
        backgroundSize: props.bgSize || '100% 100%'
    }: undefined;

    return backgroundStyle;
}
