import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
