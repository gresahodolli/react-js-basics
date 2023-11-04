import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react';

export const UserContext = React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Gresa'}>
        <ChannelContext.Provider value={'react-js-basics'}>
         <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>   
    </div>
  );
}

export default App;
