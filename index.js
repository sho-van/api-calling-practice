
// fetch the data from api
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(allData => showData(allData))

function showData(allData) {
    const parent = document.getElementById('parent')
    for (let data of allData) {
        const child = document.createElement('div')
        child.innerHTML = `
            <p class="text-2xl font-medium mt-4"> <span class="text-purple-600">${data.id}.</span> ${data.title}</p>
        <p class="text-base text-gray-400 mb-4">${data.body}</p>
        `
        parent.appendChild(child)
    }
}