import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Section from './components/Section';
import Section2 from './components/Section2';
import './App.css';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<Section />
			<Section2 />
			<Footer />
		</div>
	);
}

export default App;
