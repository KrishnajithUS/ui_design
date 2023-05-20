import React from 'react'

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div>
                <a className='hamburger'>
                    Cloudbankin
                </a>
                <button className="hamburger1">
                    <svg xmlns="http://www.w3.org/2000/svg" width='25px' fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </div>

        </nav>
    )
}

export default Navbar