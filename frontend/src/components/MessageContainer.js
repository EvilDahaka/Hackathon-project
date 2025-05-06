import React, { useState, useEffect } from 'react';
import Message from './Message';
import './MessageContainer.css';

function MessageContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Імітація появи повідомлень з затримкою
    const initialMessages = [
      { id: 1, text: 'Ти прийшов... У новий світ.' },
      { id: 2, text: 'Готовий?' },
    ];

    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, msg]);
      }, index * 1500); // Затримка 1.5 секунди між повідомленнями
    });
  }, []);

  return (
    <div className="message-container">
      {messages.map(message => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}

export default MessageContainer;