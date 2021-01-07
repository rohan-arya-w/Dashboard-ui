import React from 'react';
import DraggableRow from './Main-content/MainContent';
import Main from './TaskPage/TaskPage';
import NavBar from './navbar/NavBar';
import './index.css';


class App extends React.Component{

    render(){
        return(
            <div className="container">
    <NavBar />
    <Main />
    
    <DraggableRow />

    
   
    
    </div>
    );
    }
};


export default App;