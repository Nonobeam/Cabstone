import logo from './logo.svg';
import './App.css';
import Appbar from './component/Appbar'
import Member from './component/Member';
import MemberTable from './component/MemberTable'

function App() {
    return (
        <div className="App">
            <Appbar/>
            <Member/>
            <MemberTable/>
        </div>
    );
}

export default App;
