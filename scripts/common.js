$(window).on("load", () => {
    $(".loadBar").fadeOut(1000);
    $(".mainDiv").fadeIn(1000);
})

var filename = window.location.href.split("/").pop();

function clickMenuItem(url) {
    window.location.href = url;
}

let pythonProjects = [
    {
        'name': 'Python project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '56 MB'
    },
    {
        'name': 'Python project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '54 MB'
    },
    {
        'name': 'Python project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '60 MB'
    },
    {
        'name': 'Python project 4',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '26 MB'
    },
    {
        'name': 'Python project 5',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '19 MB'
    }
]

let cProjects = [
    {
        'name': 'C project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '26 MB'
    },
    {
        'name': 'C project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '36 MB'
    },
    {
        'name': 'C project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '16 MB'
    }
]

let cppProjects = [
    {
        'name': 'C++ project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '86 MB'
    },
    {
        'name': 'C++ project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '56 MB'
    },
    {
        'name': 'C++ project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '66 MB'
    }
]

let javaProjects = [
    {
        'name': 'Java project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '56 MB'
    },
    {
        'name': 'Java project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '36 MB'
    },
    {
        'name': 'Java project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '76 MB'
    }
]

let androidProjects = [
    {
        'name': 'Android project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '67 MB'
    },
    {
        'name': 'Android project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '106 MB'
    },
    {
        'name': 'Python project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '81 MB'
    }
]

let htmlProjects = [
    {
        'name': 'HTML project 1',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '51 MB'
    },
    {
        'name': 'HTML project 2',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '26 MB'
    },
    {
        'name': 'HTML project 3',
        'href': '../assets/icons/Icons/favourite.png',
        'size': '156 MB'
    }
]


let pBtn = document.getElementsByClassName("tabBtn")[0];
let cBtn= document.getElementsByClassName("tabBtn")[1];
let cppBtn= document.getElementsByClassName("tabBtn")[2];
let jBtn= document.getElementsByClassName("tabBtn")[3];
let aBtn= document.getElementsByClassName("tabBtn")[4];
let hcBtn= document.getElementsByClassName("tabBtn")[5];
var activeBtn= pBtn;

let container = document.getElementById("containerOfElements");

if (filename == "projects.html") {
    linkBtnToArray(pBtn, pythonProjects);
    linkBtnToArray(cBtn, cProjects);
    linkBtnToArray(cppBtn, cppProjects);
    linkBtnToArray(jBtn, javaProjects);
    linkBtnToArray(aBtn, androidProjects);
    linkBtnToArray(hcBtn, htmlProjects);
    
    let elements = pythonProjects.map(param => {
        return `<li class="element"><i class='fa-regular fa-file-zipper'></i> <p class='elementTitle'>${param.name}</p> <a href='${param.href}' class='downloadBtn' download> <i class='fa-solid fa-download'></i> </a> <h6>Size : ${param.size}</h6></li>`
    }).join('');
    container.innerHTML = elements;
}

function linkBtnToArray(btn, array) {
    btn.addEventListener("click", function() {
        let elements = array.map(param => {
            return `<li class="element"><i class='fa-regular fa-file-zipper'></i> <p class='elementTitle'>${param.name}</p> <a href='${param.href}' class='downloadBtn' download> <i class='fa-solid fa-download'></i> </a> <h6>Size : ${param.size}</h6></li>`
        }).join('');
        container.innerHTML = elements;
        activeBtn.classList.toggle("active");
        activeBtn= btn;
        activeBtn.classList.toggle("active");
    })
}
