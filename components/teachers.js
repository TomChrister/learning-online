import React from 'react';

const Teachers = () => {
    return (
        <div className="container mx-auto py-40">
            <p className="text-1xl font-semibold text-gray-500 uppercase ml-8">
                Key person
            </p>
            <p className="text-5xl font-medium text-black-500 mt-3 ml-8">
                Meet our teachers
            </p>
            <div className="grid grid-cols-3 gap-16 py-10">
                <div className="flex flex-col gap-5">
                    <img src="/assets/t1.svg" alt="teacher" className="flex self-center"/>
                    <p className="flex self-center text-2xl font-semibold">Christian Howard</p>
                    <div className="flex items-center gap-2 self-center">
                        <img src="/assets/italy.svg" alt="Italian"/>
                        <p className="text-gray-500">
                            Italian teacher
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                <img src="/assets/t2.svg" alt="teacher" className="flex self-center"/>
                    <p className="flex self-center text-2xl font-semibold"> Sandra Wilson</p>
                    <div className="flex items-center gap-2 self-center">
                        <img src="/assets/spain.svg" alt="Spanish"/>
                        <p className="text-gray-500">
                            Spanish teacher
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <img src="/assets/t3.svg" alt="teacher" className="flex self-center"/>
                    <p className="flex self-center text-2xl font-semibold">Jimmy Cooper</p>
                    <div className="flex items-center gap-2 self-center">
                        <img src="/assets/uk.svg" alt="English"/>
                        <p className="text-gray-500">
                            English teacher
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers;