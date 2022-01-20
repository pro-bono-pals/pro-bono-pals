const newTaskHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#task-title').value.trim();
    const text = document.querySelector('#task-text').value.trim();
   
    if (title && text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create task');
      };
    };
};

document
  .querySelector('.new-task-form')
  .addEventListener('submit', newTaskHandler);