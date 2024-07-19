"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import "./../globals.css";


const Main: React.FC = () => {
    const router = useRouter();

    
        const navigateToMain = () => {
            router.push('/main');
        };
    
    
    return (
        
        <div className="welcome-container">
        <div className="welcome-header">
            <h1>Welcome to Winnie Tasks</h1>
            <p>Your ultimate tool to manage projects efficiently and effectively.</p>
        </div>
        <div className="features-section">
            <div className="feature">
                <h2>Organize Tasks</h2>
                <p>Easily create, assign, and track tasks for your projects.</p>
            </div>
            <div className="feature">
                <h2>Collaborate</h2>
                <p>Work together with your team in real-time with our collaboration tools.</p>
            </div>
            <div className="feature">
                <h2>Track Progress</h2>
                <p>Monitor project progress with visual dashboards and reports.</p>
            </div>
        </div>
        <button onClick={navigateToMain} className="welcome-button">Get Started</button>
        <div className="animation-container">
            {/* Add your animated characters or SVGs here */}
            <div className="animated-character">📈</div>
            <div className="animated-character">👥</div>
            <div className="animated-character">🗂️</div>
        </div>
    </div>
    );
};

export default Main;
