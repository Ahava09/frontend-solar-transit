
const List = ( {classes, styles, children} ) => {

    return (
        <ul className={classes} style={styles}>
            {children}
        </ul>
    )

};

export default List;