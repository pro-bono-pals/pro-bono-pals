const newPostBtn = document.querySelector("#new-post-btn")

const newTaskHandler = async (event) => {
    event.preventDefault();
    console.log("YOU HAVE MADE A NEW POST")
    const title = document.querySelector('#task-title').value.trim();
    const text = document.querySelector('#task-text').value.trim();

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
   
    if (title && text) {
      const response = await fetch(`/api/user/task`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        toastr.success("You've added a new task!", "YAY! ")
        document.location.replace('/task');
      } else {
        alert('Failed to create task');
      };
    };
};

newPostBtn.addEventListener('submit', newTaskHandler);