
const Input = ( {classes, style, id, key, type, defaultValue, placeholder, name, ...props } ) => {

    return (
        <input type={type} key={key} name={name} {...props} id={id} className={classes} style={{...style}} value={defaultValue} placeholder={placeholder} />
    )
};

export default Input;