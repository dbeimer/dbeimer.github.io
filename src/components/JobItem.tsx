function JobItem(props) {
    return <div class="border-l-2 px-4 pb-4 mb-4">
        <div>
          <span class="text-l">{props.jobTitle+' '}</span> 
          <span>2020-currently</span>
        </div>
        <p class="text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          corporis quae repellendus culpa dolore nemo laborum eaque aperiam
          provident libero aliquid, quasi nihil. 
        </p>
      </div>
    
}

export default JobItem