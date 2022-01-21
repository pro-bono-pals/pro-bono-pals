const newPostBtn = document.querySelector("#new-post-btn")

const newTaskHandler = async (event) => {
    event.preventDefault();
    console.log("YOU HAVE MADE A NEW POST")
    const title = document.querySelector('#task-title').value.trim();
    const text = document.querySelector('#task-text').value.trim();
   
    if (title && text) {
      const response = await fetch(`/api/user/task`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/task');
      } else {
        alert('Failed to create task');
      };
    };
};

newPostBtn.addEventListener('submit', newTaskHandler);