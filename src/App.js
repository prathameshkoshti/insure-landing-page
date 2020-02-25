import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<Footer />
		</div>
	);
}

export default App;
