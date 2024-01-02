function randomizer(min, max) {
    /* 
        0 = Violet | 1 = Cyan | 2 = Sky | 3 = Blue | 4 = Indigo
    */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function titleColor() {
    switch (randomizer(0, 4)) {
        case 0:
            return "font-bold text-violet-500 dark:text-violet-700 hover:dark:text-neutral-200 hover:text-neutral-800 transition-all ease-out delay-150 duration-1000 hover:transition-none";
        break;

        case 1:
            return "font-bold text-cyan-500 dark:text-cyan-700 hover:dark:text-neutral-200 hover:text-neutral-800 transition-all ease-out delay-150 duration-1000 hover:transition-none";
        break;

        case 2:
            return "font-bold text-sky-500 dark:text-sky-700 hover:dark:text-neutral-200 hover:text-neutral-800 transition-all ease-out delay-150 duration-1000 hover:transition-none";
        break;

        case 3:
            return "font-bold text-blue-500 dark:text-blue-700 hover:dark:text-neutral-200 hover:text-neutral-800 transition-all ease-out delay-150 duration-1000 hover:transition-none";
        break;

        case 4:
            return "font-bold text-indigo-500 dark:text-indigo-700 hover:dark:text-neutral-200 hover:text-neutral-800 transition-all ease-out delay-150 duration-1000 hover:transition-none";
        break;
    }
}

function generateValeriaTitleColumn(numOfSubPanels) {
    let element = document.createElement("div");
    element.classList = "flex flex-col font-zen-dots";

    for (let index = 1; index <= numOfSubPanels; index++) {
        let childElement = document.createElement("p");

        if (index == numOfSubPanels) {
            childElement.classList = "font-bold text-neutral-800 dark:text-neutral-200";
        } else if (index == numOfSubPanels - 1) {
            childElement.classList = titleColor() + " opacity-90";
        } else if (index == numOfSubPanels - 2) {
            childElement.classList = titleColor() + " opacity-80";
        } else if (index == numOfSubPanels - 3) {
            childElement.classList = titleColor() + " opacity-70";
        } else if (index == numOfSubPanels - 4) {
            childElement.classList = titleColor() + " opacity-60";
        } else if (index == numOfSubPanels - 5) {
            childElement.classList = titleColor() + " opacity-50";
        } else {
            childElement.classList = titleColor() + " opacity-35";
        }

        childElement.innerHTML = "VALERIA";
        element.appendChild(childElement);
    }
    
    document.getElementById("arika-panel").appendChild(element);
}

window.onscroll = function (e) {
    // var vertical_position = 0;
    // if (scrollY)//usual
    //   vertical_position = scrollY;
    // else if (document.documentElement.clientHeight) //ie
    //   vertical_position = document.documentElement.scrollTop;
    // else if (document.body) //ie quirks
    //   vertical_position = document.body.scrollTop;
  
    // var your_div = document.getElementById('arika-panel');
    // your_div.top = (vertical_position - 0) + 'px'; //200 is arbitrary.. just to show you could now position it how you want
    

}