const acceptBtn = document.querySelector("#acceptbtn")

const acceptTask = async (event) => {

    // console.log("you have accepted this task")
    // const response = await fetch ('api/user/task', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    // });

    // if (response.ok) {
    //     document.location.replace('/dashboard');

    // }
    event.preventDefault();
    // when a provider accepts the task (by pressing the accept button) then in the Task.js model field isActive will change from isActive=false (the default value) to isActive=true 
    // need to make a put route in taskRoutes
    // it would be nice to have a color change to say this task is active (green)
    const isActive = true
    const id = document.querySelector('#taskId').innerHTML;
    if(isActive && id){
        const response = await fetch(`/api/task/${id}`,{
            method:'PUT',
            body: JSON.stringify({isActive, id}),
            headers:{
                'Content-Type':'application/json',
            }, 
        });
        console.log("hehe")
        if(response.ok){
            document.location.replace('/dashboard')
            console.log("haha",response)
        }else{
            alert('Failed to accept task');
        }
    }
};


acceptBtn.addEventListener("click", acceptTask)