import React, { useState } from 'react';

const Emoji = () => {
    
    const [emoji, setEmoji] = useState('😊'); // Initial emoji is happy face

    // Function to change the emoji
    const changeMood = () => {
        // Toggle between two emojis
        const newEmoji = emoji === '😊' ? '😢' : '😊';
        setEmoji(newEmoji);
    };

    return (
        <div>
            <span style={{ fontSize: '2rem' }}>{emoji}</span>
            <br />
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
};

export default Emoji;

