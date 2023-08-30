import { NavLink } from 'react-router-dom';

export default function HomePageBanner() {
    const imageClass = "bg-[url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80')] h-screen bg-cover shadow-inner";

    return (
        <>
            <div className={`${imageClass} flex justify-between items-center`}>
                <div>
                    <div className="p-32 bg-blue-400 rounded ml-16 -backdrop-hue-rotate-60">
                        <h1 className="text-6xl text-blue-700">THIS IS THE BEST WEBSITE EVER</h1>
                        <h1 className="text-4xl text-blue-500">EZ CASH HERE</h1>

                        <NavLink
                            className="block mt-8 p-8 bg-white w-max rounded text-blue-400"
                            to="signup">
                            Get Started &#x2192;
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
