import React, { createContext, useState } from 'react';

type UserContextType = {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType>({
    username: '',
    setUsername: () => {},
});

type UserProviderProps = {
    children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
