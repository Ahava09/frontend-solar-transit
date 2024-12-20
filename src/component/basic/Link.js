
const Link = ( {lien, classes, style, children} ) => {

    return (
        <a className={classes} style={{...style}} href={lien}>
            {children}
        </a>
    )

};

export default Link;