import React from 'react';
import PropTypes from 'prop-types';

const NoteCard = (props) => {
    const { imgSrc, title, description, link } = props;

    const onClickHandler = () => {
        window.location.href = link;
    };

    return (
        <div className="note-card" aria-hidden="true" onClick={onClickHandler}>
            <img alt="" src={imgSrc} />
            <div className="note-content">
                <h3 className="note-title">{title}</h3>
                <p className="note-description">{description}</p>
            </div>
        </div>
    );
};

NoteCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default NoteCard;
