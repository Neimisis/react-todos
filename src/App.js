import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Error from './pages/Error/Error.jsx';
import Footer from './component/Footer/Footer.jsx';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}


function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer/>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
