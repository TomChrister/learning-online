/* eslint-disable */


import React from "react";

const Students = () => {
    return (
        <div className="container mx-auto ">
            <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
                Top students
            </p>
            <p className="text-gray-800 text-3xl lg:text-5xl font-medium">
                Our students say
            </p>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-10">
                <img src="/assets/student.svg" alt="student" className="w-24rem"/>
                <div className="flex flex-col gap-5 items-start pl-8">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
                    <div className="flex items-center gap-2">
                        <img src="/assets/spain.svg" alt="spain"/>
                        <p className="text-gray-500">B2 course student</p>
                    </div>
                    <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl italic opacity-80">
                        "There is no way I could have made the same progress learning Spanish
                        without using Lingua. The best part is that learning Spanish has now
                        become one of my biggest hobbies."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Students;