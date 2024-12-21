
const ButtonComponent = ( {classes, styles, type, text, ...props} ) => {
    return (
        <button className={classes} style={{...styles}} type={type} {...props}>
            {text}
        </button>
    )
};

export default ButtonComponent;