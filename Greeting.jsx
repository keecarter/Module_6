
import React from 'react';

const Greeting = ({ name, children }) => {
    // Default greeting if name is not provided
    let greetingText = 'Hello';

    if (name) {
        greetingText += ` ${name}`;
    } else {
        greetingText += ' World';
    }

    return (
        <div>
            <h1>{greetingText}</h1>
            {children && <p>{children}</p>}
        </div>
    );
};

export default Greeting;
