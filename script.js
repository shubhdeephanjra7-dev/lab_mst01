const username = document.getElementById("username");
const role = document.getElementById("role");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

function logout() {
    location.reload();
}

submitBtn.addEventListener("click", function() {
    const name = username.value.trim();
    const userRole = role.value.trim().toLowerCase();

    if (name === "" || userRole === "") {
        result.textContent = "Please enter username and role";
        return;
    }

    if (userRole !== "admin" && userRole !== "viewer") {
        result.textContent = "Invalid role. Please enter Admin or Viewer";
        return;
    }

    const container = document.querySelector(".container");

    container.innerHTML = "";
    container.style.justifyContent = "flex-start";
    container.style.paddingTop = "35px";
    container.style.overflow = "hidden";

    const welcome = document.createElement("h2");
    welcome.textContent = "Hello " + name + ", welcome";
    welcome.style.color = "white";
    welcome.style.margin = "0 0 20px 0";

    container.appendChild(welcome);

    if (userRole === "admin") {

        const access = document.createElement("p");
        access.textContent = "Admin Access";
        access.style.color = "white";
        access.style.margin = "5px 0 15px 0";

        const createButton = document.createElement("button");
        createButton.textContent = "Create Post";
        createButton.style.margin = "5px";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Post";
        deleteButton.style.margin = "5px";

        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.style.margin = "15px 5px";

        container.appendChild(access);
        container.appendChild(createButton);
        container.appendChild(deleteButton);
        container.appendChild(logoutButton);

        createButton.addEventListener("click", function() {

            if (document.getElementById("postBox")) {
                return;
            }

            const postBox = document.createElement("textarea");
            postBox.id = "postBox";
            postBox.placeholder = "Write your post here...";

            postBox.style.width = "90%";
            postBox.style.height = "80px";
            postBox.style.marginTop = "10px";
            postBox.style.padding = "10px";
            postBox.style.borderRadius = "8px";
            postBox.style.border = "none";
            postBox.style.boxSizing = "border-box";
            postBox.style.resize = "none";

            const publishButton = document.createElement("button");
            publishButton.textContent = "Publish Post";
            publishButton.style.marginTop = "8px";

            container.appendChild(postBox);
            container.appendChild(publishButton);

            publishButton.addEventListener("click", function() {

                const post = postBox.value.trim();

                if (post === "") {
                    alert("Please write something");
                    return;
                }

                const oldPost = document.getElementById("postDisplay");

                if (oldPost) {
                    oldPost.remove();
                }

                const postDisplay = document.createElement("div");
                postDisplay.id = "postDisplay";
                postDisplay.textContent = post;

                postDisplay.style.width = "90%";
                postDisplay.style.maxHeight = "100px";
                postDisplay.style.overflowY = "auto";
                postDisplay.style.boxSizing = "border-box";
                postDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                postDisplay.style.padding = "12px";
                postDisplay.style.borderRadius = "8px";
                postDisplay.style.marginTop = "12px";
                postDisplay.style.color = "#333";
                postDisplay.style.wordWrap = "break-word";

                container.appendChild(postDisplay);

                postBox.remove();
                publishButton.remove();
            });
        });

        deleteButton.addEventListener("click", function() {

            const post = document.getElementById("postDisplay");

            if (post) {
                post.remove();
            } else {
                alert("No post to delete");
            }
        });

        logoutButton.addEventListener("click", logout);

    } else {

        const content = document.createElement("p");

        content.textContent = "FSD Practical is going on. Today's practical covers HTML, CSS and JavaScript.";
        content.style.color = "white";
        content.style.fontSize = "18px";
        content.style.marginTop = "30px";

        const access = document.createElement("p");

        access.textContent = "Read-only access";
        access.style.color = "white";
        access.style.marginTop = "20px";

        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.style.marginTop = "20px";

        container.appendChild(content);
        container.appendChild(access);
        container.appendChild(logoutButton);

        logoutButton.addEventListener("click", logout);
    }
});