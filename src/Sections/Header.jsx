import React from 'react'

const Header = () => {
  return (
    <div className='text-center'>
        <h1 className='text-6xl font-bold pt-32'>A warm welcome!</h1>
        <p className='text-3xl font-normal pt-8'>Bootstrap utility classes are used to create this jumbotron since the old component has <br /> been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <div className='my-10'> 
        <a href="#" className="rounded-md bg-sky-500 px-3.5 py-2.5 text-2xl font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800">Call to action </a></div>
    </div>
  );
};

export default Header;