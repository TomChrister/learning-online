/* eslint-disable */


import React from 'react';

const Values = () => {
    return (
        <div className="container mx-auto">
            <p className="text-1xl font-semibold text-gray-500 text-center">WHY CHOOSE US</p>
            <p className="text-5xl font-medium text-black-500 text-center mt-3">Our values</p>
            <div className="grid grid-cols-3 gap-16 py-20">
                <div className="flex flex-col gap-5 items-center">
                    <img src="/assets/v1.svg" alt="v1"/>
                    <p className="text-2xl font-semibold">Speaking clubs</p>
                    <p className="text-gray-500 text-center">In our school you will practice <br/>
                        your speaking skills and just get <br/>
                        a lot of positive emotions!
                    </p>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <img src="/assets/v2.svg" alt="v2"/>
                    <p className="text-2xl font-semibold">Quality control</p>
                    <p className="text-gray-500 text-center">A huge work has been done with <br/>
                        the teachers and their work has <br/>
                        been monitored thoroughly.
                    </p>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <img src="/assets/v3.svg" alt="v3"/>
                    <p className="text-2xl font-semibold">Progress analysis</p>
                    <p className="text-gray-500 text-center">The CEF Reference has been used <br/>
                        at our school. It allowed to control our <br/>
                        student's success in studying.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Values;