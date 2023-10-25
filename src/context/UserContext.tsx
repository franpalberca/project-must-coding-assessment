import React, { createContext, useState } from 'react';

type UserContextType = {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType>({
    username: '',
    setUsername: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
