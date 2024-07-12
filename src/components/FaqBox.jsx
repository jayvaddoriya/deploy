import React, { useState } from 'react';

export default function FaqBox(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-6">
      <dt className="text-md">
        {/* <!-- Expand/collapse question button --> */}
        <button onClick={() => setOpen(!open)} type="button" className="text-left w-full flex justify-between items-start text-gray-400">
          <span className="font-medium text-md text-black">{props.question}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg className={`h-6 w-6 transform transition-all ease-linear duration-300 ${open ? '-rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 ${open ? '' : 'hidden'} transition-all ease-in-out delay-150`} >
        <p className="text-sm text-black">{props.answer}</p>
      </dd>
    </div>
  )
}