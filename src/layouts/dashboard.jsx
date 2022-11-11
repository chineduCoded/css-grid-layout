import React from 'react'
import "./dashboard.css"

export const Dashboard = ({ children }) => {
    return (
        <div className='container'>
            <header className='header'>Header</header>
            <nav className='navigation'>
                <ul>
                    <li><a href='#'>Nav 1</a></li>
                    <li><a href='#'>Nav 2</a></li>
                    <li><a href='#'>Nav 3</a></li>
                </ul>
            </nav>
            <main className='content'>
                {children}
            </main>
            <aside className='sidebar'>Sidebar</aside>
            <footer className='footer'>Footer</footer>
        </div>
    )
}
