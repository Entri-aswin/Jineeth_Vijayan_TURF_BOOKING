import React from 'react'

const FirstView = () => {
    return (
        <div className='sm:flex sm:justify-between pt-32 pb-10 pe-8 mb-10 bg-stone-50 rounded-3xl '>
            <div className='sm:mx-20 sm:w-96 h sm:flex sm:justify-center sm:items-center ms-10 mb-10 text-center  sm:text-start'>
                <h1 className='text-4xl leading-10 font-semibold text-black'>Easily book your favorite playgrounds
                    with just a few taps</h1>
            </div>
            <div className=" grid grid-cols-2 sm:w-2/4  h-96  ms-10 bg-cover">
                <div className=" bg-[url('../images/Turf-unsplash.jpg')] bg-no-repeat bg-cover bg-center">

                </div>
                <div className='grid grid-rows-2'>
                    <div className="bg-[url('../images/cricket.jpg')] bg-no-repeat bg-cover bg-center">

                    </div>
                    <div className="bg-[url('../images/Tennis.jpg')] bg-no-repeat bg-cover bg-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstView
