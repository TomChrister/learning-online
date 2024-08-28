import React from 'react';

const Teachers = () => {
    return (
        <div className="container mx-auto">
            <p className="text-1xl font-semibold text-gray-500 uppercase">
                Key person
            </p>
            <p className="text-5xl font-medium text-black-500 mt-3">
                Meet our teachers
            </p>
            <div className="grid grid-cols-3 gap-16 py-20">
                <div className="flex flex-col gap-5">
                    <img src="/assets/t1.svg" alt="teacher"/>
                    <p className="text-2xl font-semibold">Christian Howard</p>
                    <p className="text-gray-500 text-center">Italian teacher
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <img src="/assets/t2.svg" alt="teacher"/>
                    <p className="text-2xl font-semibold">Sandra Wilson</p>
                    <p className="text-gray-500 text-center">Spanish teacher
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <img src="/assets/t3.svg" alt="teacher"/>
                    <p className="text-2xl font-semibold">Jimmy cooper</p>
                    <p className="text-gray-500 text-center">English teacher
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Teachers;