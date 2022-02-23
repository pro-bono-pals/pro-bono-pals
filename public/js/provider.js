const acceptBtn = document.querySelector("#acceptbtn")

const acceptTask = async (event) => {

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    event.preventDefault();
    // when a provider accepts the task (by pressing the accept button) then in the Task.js model field isActive will change from isActive=false (the default value) to isActive=true 
    // need to make a put route in taskRoutes
    // it would be nice to have a color change to say this task is active (green)
    const isActive = true
    const id = document.querySelector('#taskId').innerHTML;
    const provider_id = document.querySelector('#provider_id').innerHTML;
    if(isActive && id && provider_id){
        const response = await fetch(`/api/task/${id}`,{
            method:'PUT',
            body: JSON.stringify({isActive, id, provider_id}),
            headers:{
                'Content-Type':'application/json',
            }, 
        });
        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            toastr.error("Failed to accept Task!", "Failure!")
        }
    }
};


acceptBtn.addEventListener("click", acceptTask)

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