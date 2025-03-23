import React, { useState } from 'react';
import Topbar from '@/components/Topbar';
import Question from '../components/MockInterview/questions'
import AnswerInput from '../components/MockInterview/answerInput';

const MockInterview = () => {

    return (
        <div className='bg-black text-white min-h-screen'>
            <Topbar/>
           
                <div>
                    <Question/>
                    <AnswerInput/>
                </div>
           
        </div>
    );
};

export default MockInterview;