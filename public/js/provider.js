const acceptBtn = document.querySelector("#acceptbtn")

const acceptTask = async () => {

    console.log("you have accepted this task")
    const response = await fetch ('api/user/task', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');

    }
};


acceptBtn.addEventListener("click", acceptTask)