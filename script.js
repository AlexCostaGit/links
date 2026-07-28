fetch("https://alexcostagit.github.io/links/data.json").then((response) => response.json()).then((links) => {

    console.log(links)

    const linkContainer = document.getElementById("link-container");
    for(var index = 0; index < links.length; index++)
    {
        const value = links[index];

        const linkElement = document.createElement("div");
        linkElement.className = 'link-container';
        linkElement.onclick = () => window.location.href = value.link;

        var iconLocation = value.icon ? value.icon : `"https://s2.googleusercontent.com/s2/favicons?domain=canvas.qut.edu.au"`
        
        linkElement.innerHTML = `<img width=16 height=16 src=${iconLocation}/><div>${value.name}</div>`;
        linkContainer.appendChild(linkElement);
    }
});

