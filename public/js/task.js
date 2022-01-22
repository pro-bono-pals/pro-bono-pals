const newTaskHandler = async (event) => {
  event.preventDefault();

  console.log("YOU HAVE MADE A NEW POST")

  const name = document.querySelector('#task-name').value.trim();
  const service = document.querySelector('#service-type').value.trim();
  const allotedTime = document.querySelector('#alloted-time').value.trim();
  const description = document.querySelector('#task-description').value.trim();
  const userId =document.querySelector('#user-id').innerHTML;

  let serviceId
  const getServiceid = function() {
    if(service === "coding"){
        serviceId = 1
        return;
    }else if(service ==="Law"){
        serviceId = 2
        return;
    }else if(service ==="Culinary"){
        serviceId = 3
        return;
    }else if(service ==="Trade"){
        serviceId =4
        return;
    }
  }
  getServiceid()
  console.log(service, serviceId)
  console.log(name, allotedTime, description, userId)

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

  if (name && description && allotedTime && userId && serviceId){
    const response = await fetch(`/api/task/`, {
      method:'POST',
      body:JSON.stringify({ name, description, allotedTime, userId, serviceId}),
      headers:{
          'Content-Type': 'application/json',
      },
    });
    console.log("hello there ")
    if(response.ok){
      toastr.success("You've added a new task!", "YAY! ")
      document.location.replace('/dashboard')
      console.log("do I work?", response)
    } else {
      alert('Failed to create task');
    };
  };
};


document
  .querySelector(".new-task-form")
  .addEventListener('submit', newTaskHandler)
