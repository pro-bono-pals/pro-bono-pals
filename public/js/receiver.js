const makePost = async () => {
    console.log("you are making a new post")
    window.location.pathname = '/task'
};


document.querySelector("#make-post-btn").addEventListener("click", makePost)