import React from 'react'

function ImageTag(props) {
    return (
        <>
            <img
                src={props.src}
                className="d-inline-block align-top ml-3"
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
        </>
    )
}

export default ImageTag