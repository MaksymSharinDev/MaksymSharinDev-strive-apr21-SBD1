import React from 'react';
import {useDropzone} from 'react-dropzone';
import './ImageDropZone.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {Button} from "bootstrap";


function ImageDropZone(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));


    return (
        <div {...getRootProps(
            {className: 'dropzone d-flex justify-content-center align-items-center'}
        )}>
            <input {...getInputProps()} />
            <div className={'uploadIcon d-flex justify-content-center align-items-center'} >
                <FontAwesomeIcon icon={faUpload}/>
            </div>
        </div>
    )
}

export default ImageDropZone

