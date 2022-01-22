const makePost = async () => {
    console.log("you are making a new post")
    // window.location.pathname = '/task'
    document.location.replace('/task')
};


document
    .querySelector("#newpostbtn")
    .addEventListener("click", makePost)


const completeTaskHandler = async(event) =>{
    event.preventDefault();
    // when a provider completes the task (by pressing the complete button) then in the Task.js model field isCompleted will change from isCompleted=false (the default value) to isCompleted = true
    // need to make a put route in taskRoutes
    // it would be nice to have a color change to say this task is completed (blue)
    const isCompleted = true
    const id = document.querySelector('#taskcompleteId').innerHTML;

    if (isCompleted && id ){
        const response = await fetch(`api/task/${id}`,{
            method:'PUT',
            body: JSON.stringify({isCompleted, id}),
            headers:{
                'Content-Type':'application/json',
            }, 
            
        });
        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to complete task');
        }
    }
}
document
    .querySelector('#completedbtn')
    .addEventListener('click',completeTaskHandler)