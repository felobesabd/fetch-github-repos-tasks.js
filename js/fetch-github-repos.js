let input = document.querySelector('.get-repos input'),
    button = document.querySelector('.get-button'),
    showData = document.querySelector('.show-data');

button.onclick = function () {
    repos();
}
// Get Repos Function
function repos() {
    if (input.value === '') {
        showData.innerHTML = "<span>Please Write Github Username.</span>";
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((response) => response.json())
            .then((data) => {
                showData.innerHTML = '';
                data.forEach((repo) => {
                    // console.log(e.name)
                    // Create New Elements
                    let newDiv = document.createElement('div'),
                        textDiv = document.createTextNode(repo.name),
                        linkUrl = document.createElement('a'),
                        textLink = document.createTextNode('visit'),
                        spanStars = document.createElement('span'),
                        spanStarsText = document.createTextNode(`Stars ${repo.stargazers_count}`)
                    linkUrl.href = `https://github.com/${input.value}/${repo.name}`
                    linkUrl.setAttribute('target', '_blank')
                    newDiv.classList.add('repo-box')
                    // Appends New Elements
                    spanStars.appendChild(spanStarsText)
                    linkUrl.appendChild(textLink)
                    newDiv.appendChild(textDiv)
                    newDiv.appendChild(linkUrl)
                    newDiv.appendChild(spanStars)
                    showData.appendChild(newDiv)
                })
            });
    }
}


















