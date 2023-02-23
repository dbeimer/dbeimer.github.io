import React from 'react'

function JobItem(props) {
  let colorClass="bg-red-500/10 text-red-900 dark:text-red-300 border-red-500"
  let periodColorClass="bg-red-700"
  let simbol=" - "
  if(props.period.toLowerCase().includes('actualmente')||props.period.toLowerCase().includes('currently')){
    colorClass="bg-green-500/10 text-green-900 dark:text-green-300 border-green-500"
    periodColorClass="bg-green-700"
    simbol=" + "
  }
    return <div className={"border-l-2 px-4 pb-4 my-4 "+colorClass}>
        <span>{simbol}</span><b>{props.company}</b>
        <div>
          <span>{simbol}</span><span className="text-l">{props.jobTitle+' '}</span> 
          <span>{simbol}</span><span className={"text-white rounded-lg text-sm px-2 "+periodColorClass}>{props.period}</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </div>
}

export default JobItem