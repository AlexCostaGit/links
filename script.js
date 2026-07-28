const links = [
    {link: "https://qutvirtual4.qut.edu.au/group/student/study/pursue-further-study/vacation-research-experience-scheme", name: "QUT Vacation Research Experience Scheme"},
    {link: "https://qutvirtual4.qut.edu.au/group/student/it-and-printing/printing-copying-and-scanning", name: "QUT Printing and Scanning"},
    {link: "https://qut.graduations.com.au/", name: "QUT Graduations"},
    {link: "https://jupyter.eres.qut.edu.au/hub/spawn", name: "QUT Jupyter Workspace"},
    {link: "https://appsanywhere.qut.edu.au/login", name: "QUT AppsAnywhere"},
    {link: "https://www.gradescope.com.au/", name: "QUT Gradescope"},
    {link: "https://spaces.library.qut.edu.au/day?area=2", name: "QUT Library Study Spaces"}
]

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