const newTaskHandler = async (event) => {
  event.preventDefault();

  console.log("YOU HAVE MADE A NEW POST")

  const name = document.querySelector('#task-name').value.trim();
  const service = document.querySelector('#service-type').value.trim();
  const allotedTime = document.querySelector('#alloted-time').value.trim();
  const description = document.querySelector('#task-description').value.trim();
  const user_id =document.querySelector('#user-id').innerHTML;

  let service_id
  const getServiceid = function() {
    if(service === "coding"){
        service_id = 1
        return;
    }else if(service ==="Law"){
        service_id = 2
        return;
    }else if(service ==="Culinary"){
        service_id = 3
        return;
    }else if(service ==="Trade"){
        service_id =4
        return;
    }
  }
  getServiceid()

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

  if (name && description && allotedTime && user_id && service_id){
    const response = await fetch(`/api/task/`, {
      method:'POST',
      body:JSON.stringify({ name, description, allotedTime, user_id, service_id}),
      headers:{
          'Content-Type': 'application/json',
      },
    });
    if(response.ok){
      toastr.success("You've added a new task!", "YAY! ")
      document.location.replace('/dashboard')
    } else {
      alert('Failed to create task');
    };
  };
};


document
  .querySelector(".new-task-form")
  .addEventListener('submit', newTaskHandler)
