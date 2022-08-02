import React from 'react';
import { AiOutlinePushpin } from "react-icons/ai";
import { FaCreativeCommons } from "react-icons/fa";
import { BsRecordCircle, BsPlus } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import user from "../../Assets/Images/user.png"


const Video = () => {
    return (
        <div className='w-full mx-auto'>
            <div className='flex list-none items-center text-gray-200'>
                <h2 className='md:text-md lg:text-xl text-gray-200'>Discuss About Our New Projects</h2>
                <div className='flex items-center rounded px-2 ml-6 bg-green-900'>
                    <li><IoPeopleOutline /></li>
                    <li className='px-1 lg:px-3'>37+ </li>
                </div>
            </div>
            <div className='text-gray-200 flex justify-between my-4'>
                <div className='flex list-none items-center'>
                    <li className='bg-red-500 rounded-full'><BsRecordCircle /></li>
                    <li className='text-sm lg:text-md px-1 lg:px-2'>REQ : 00.02.36s </li>
                </div>
                <div className='flex list-none items-center text-gray-200'>
                    <li className='bg-green-900 rounded-full cursor-pointer'><BsPlus /></li>
                    <li className='text-sm lg:text-md px-2'>Add user to the class</li>
                </div>
            </div>

            <div className='rounded-xl bg-green-200 relative'>
                <div className='text-gray-200 list-none text-xl flex gap-3 justify-start p-4 absolute'>
                    <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><FaCreativeCommons /></li>
                    <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><AiOutlinePushpin /></li>

                </div>

                <div className="flex justify-center items-baseline">
                    <img src={user} alt="Main user" className='p-4' />
                </div>

                <div className='grid grid-rows justify-center items-baseline pb-4'>
                    <h2 className='bg-green-400 text-white mb-2 p-1'>This is the week thats we can more presentation..</h2>
                    <div className='flex gap-2 md:gap-4 justify-center place-items-end text-gray-200 font-bold cursor-pointer list-none'>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 font-bold'><i className="fal fa-microphone font-bold"></i></li>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 font-bold'><i className="fal fa-video font-bold"></i></li>
                        <li className='bg-red-500 rounded-md text-lg lg:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-2 lg:py-2'><i className="far fa-phone-alt font-bold"></i></li>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 '><i className="far fa-arrow-circle-up font-bold"></i></li>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 '><i className="far fa-ellipsis-v font-bold"></i></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;