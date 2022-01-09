import React from 'react';
import MyButton from '../ui/buton/MyButton';

const TableItem = (props) => {
    return (
        <div className="border d-flex m-2 p-3 justify-content-between align-items-center">
            <div>
                <span>
                    {props.post.id}.
                    <b>{props.post.title}</b>
                </span>

                <p className='lead'>{props.post.body}</p>
            </div>
            <p>
                <MyButton onClick={() => props.remove(props.post)} className="btn btn-outline-danger">
                    delete
                </MyButton>
            </p>
        </div>
    );
};

export default TableItem;