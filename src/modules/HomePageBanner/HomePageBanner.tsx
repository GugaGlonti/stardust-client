import { NavLink } from 'react-router-dom';

export default function HomePageBanner() {
  const imageClass = "bg-[url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80')] h-screen bg-cover shadow-inner";

  return (
    <>
      <div className={`${imageClass} flex justify-between items-center`}>
        <div>
          <div className='p-32 bg-primary rounded ml-16 -backdrop-hue-rotate-60'>
            <h1 className='text-6xl text-gold-900'>THIS IS THE BEST WEBSITE EVER</h1>
            <h1 className='text-4xl text-gold-700'>EZ CASH HERE</h1>

            <NavLink
              className='block mt-8 p-8 bg-white w-max rounded text-primary hover:bg-primary-dark hover:text-white duration-200'
              to='signup'>
              Get Started &#x2192;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
