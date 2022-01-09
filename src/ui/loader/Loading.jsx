import React from 'react';
import s from "./Loading.moodle.css"

function Loading(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    );
}

export default Loading;