import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const entryId = props.id;
  const entrySender = props.sender;
  const entryBody = props.body;
  const entryTime = props.timeStamp;
  const entryRelativeTime = TimeStamp(entryTime);
  const entryLiked = props.liked;
  const updateLike = props.updateLike;

  let locationClass = entrySender === 'Vladimir' ? 'local' : 'remote';
  let heartCondition = entryLiked === true ? '❤️':'🤍';

  function changeLike(likedStatus) {
    updateLike(entryId, likedStatus);
  }

  return (
    <div className={`chat-entry ${locationClass}`}>
      <h2 className="entry-name">{entrySender}</h2>
      <section className="entry-bubble">
        <p>{entryBody}</p>
        <p className="entry-time">{entryRelativeTime}</p>
        <button onClick={() => changeLike(!entryLiked)} className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatEntry;
