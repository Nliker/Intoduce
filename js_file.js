let icons = document.querySelectorAll(".ico");
let length = icons.length;
let menuItem = document.querySelector(".dock-container");
let modalItem = document.querySelectorAll(".modal");


const onClickMenuItem = (e) => {
    const menuItems = menuItem.children;
    for (let item of menuItems) {
        item.classList.remove('li-marker');
    }

    for (let item of modalItem) {
        item.classList.add('blind');
    }

    const liTag = e.target.closest('li');
    const selectedModal = e.target.closest('.modal');

    console.log(selectedModal);
    liTag.classList.add('li-marker');
    selectedModal.classList.remove('blind');
}

menuItem.addEventListener('click', onClickMenuItem);


icons.forEach((item, index) => {
    item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
    });
    item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
            item.style.transform = "scale(1)  translateY(0px)";
        });
    });
});

const focus = (elem, index) => {
    let previous = index - 1;
    let previous1 = index - 2;
    let next = index + 1;
    let next2 = index + 2;

    if (previous == -1) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else if (next == icons.length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
        icons[previous1].style.transform = "scale(1.1)";
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
        icons[next2].style.transform = "scale(1.1)";
    }
};
