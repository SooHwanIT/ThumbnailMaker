import './Css/Canvas.css'

const Canvas = ({state}) => {
    const { title,title_size, title_color , title_outline_color ,subtitle, subtitle_color ,subtitle_outline_color,background_color,outline_color,width_size,height_size} = state;
    // title,subtitle,background_color,outline_color,height_size,width_size
    const canvas_style = {
        backgroundColor: background_color,
        border:'2px solid',
        borderColor: outline_color,
        width:width_size+'px', //width_size
        height:height_size+'px',  //height_size
    }
    const title_style = {
        color: title_color,
        fontSize :  Number(title_size),
        textShadow: '-1px 0 '+title_outline_color+', 0 1px '+title_outline_color+', 1px 0 '+title_outline_color+', 0 -1px '+title_outline_color,
    }
    const subtitle_style = {
        color: subtitle_color,
        textShadow: '-1px 0 '+subtitle_outline_color+', 0 1px '+subtitle_outline_color+', 1px 0 '+subtitle_outline_color+', 0 -1px '+subtitle_outline_color,
    }
    return (
            <span className="canvas" style={canvas_style}> 
                <p className='title' style={title_style}>{title}</p>
                <p className='subtitle' style={subtitle_style}>{subtitle}</p>
            </span>
        )
};
export default Canvas;