import React from 'react';

const componentName = (props) => {
    return (
        <div className="movie-wrap">
            <div className="movie">
                <div className="movie-title">{props.movie.title}
                    <span className="movie-year">{props.movie.year}</span>
                </div>
                <div><button className='d-btn'  onClick={( ) => {}}>삭제</button></div>
            </div>
        </div >
    );
};

export default componentName;