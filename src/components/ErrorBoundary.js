// ErrorBoundary.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './repo.css';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError || this.props.hasError) { // Include props check for hardcoded error
      // You can render any custom fallback UI
      return <div><p className='d-flex flex-row align-items-center justify-content-center error'>Oops! An unexpected error occured. Failed to fetch repositories</p></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
