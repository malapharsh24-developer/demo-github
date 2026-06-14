const gitCommandsList = [
    {
        title: "Initialize git repository locally",
        command: "git init"
    },
    {
        title: "Add github repo link in local git repo",
        command: "git remote add origin <-link->"
    },
    {
        title: "Initialize git repository locally",
        command: "git init"
    },
    {
        title: "Initialize git repository locally",
        command: "git init"
    },
]


// select elemenst from html
const gitCommandsSection = document.querySelector(".git-commands");

gitCommandsList.forEach(e => {
    gitCommandsList.innerHTML += `
            <dl>
                <dt class="git-title">${title}</dt>
                <dd class="git-command">${command}</dd>
            </dl>
`
})

