import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero h-full  min-h-[70vh] bg-accent px-4">
                <div class="max-w-6xl flex flex-col lg:flex-row py-20">
                    <div className='flex flex-col justify-center my-6'>
                        <h3 className='font-bold md:text-xl text-2xl text-primary uppercase'>cleaning home services</h3>
                        <h1 class="lg:text-4xl md:text-3xl font-bold">We Provided Best Cleaning Services As You Want </h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary w-40">Get Started</button>
                    </div>
                    <img src="https://i.ibb.co/PrtKD4L/banner-bg.png" className='mt-[-15px]' />
                </div>
            </div>
            <div className='max-w-7xl mx-auto rounded-2xl mb-10 p-10 relative mt-[-30px] shadow-2xl bg-slate-200'>
                <h3 className='text-primary font-bold text-2xl'>Get Free Estimate</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 py-4">
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                </div>
                <button className='btn btn-primary capitalize'>Get a Request</button>
            </div>
        </>
    );
};

export default Landing;