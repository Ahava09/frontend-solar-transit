
const Image = ( {classes, style, imageSource, alternativeText = '', id , key } ) => {

    return (
        <img id={id} key={key} src={imageSource} alt={alternativeText} className={classes} style={{...style}} />
    )
};
export default  Image;