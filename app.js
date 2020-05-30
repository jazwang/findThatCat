const game = () => {
    let catX = 0;
    let catY = 0;

    

    const clickScreen = document.querySelector('.click-screen');
    clickScreen.addEventListener("click", getClickPosition, true);
    const cat = document.querySelector('.cat');

    //choose random cat
    const randomCatNum = Math.ceil(Math.random() * 8);
    cat.src = `./assets/${randomCatNum}.png`;

    catX = Math.floor(Math.random() * window.innerWidth);
    catY = Math.floor(Math.random() * window.innerHeight);

    if (catX + cat.width > window.innerWidth)
    {
        catX = catX - cat.width;
    }
    if (catY + cat.height > window.innerHeight)
    {
        catY = catY - cat.height;
    }
    cat.style.marginLeft = `${catX}px`;
    cat.style.marginTop = `${catY}px`;

    // const checkResult = () => {
    //     if (mouseX >= catX && mounseX <= (catX + cat.width) && mouseY >=catY && mouseY <=(catY + cat.height))
    //     {
    //         alert("You found the cat!");
    //         cat.classList.add('fadeIn');
    //     }
    //     else{
    //         console.log("x:" + mouseX);
    //         console.log("y:" + mouseY);
    //         console.log("catX" + catX);
    //         console.log("catY" + catY);
    //         console.log("too bad");
    //     }
    // }

    function getClickPosition(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        console.log(mouseX);
        console.log(mouseY);
        
        if (mouseX >= catX && mouseX <= (catX + cat.width) && mouseY >=catY && mouseY <=(catY + cat.height))
        {
            clickScreen.style.backgroundColor  = "#a1a112";
            alert("You found the cat!");
            cat.classList.add('fadeIn');
        }
        else if ((catX - mouseX <= 50 || mouseX - (catX + cat.width) <= 50)
                && (catY - mouseY <= 50 || mouseY - (catY + cat.height) <= 50)){
                    console.log("hahh1");

            clickScreen.style.backgroundColor  = "#e6e619";
        }
        else if ((catX - mouseX <= 125 || mouseX - (catX + cat.width) <= 125)
                && (catY - mouseY <= 125 || mouseY - (catY + cat.height) <= 125)){
                    console.log("hahh4");

            clickScreen.style.backgroundColor  = "#eded5e";
        }
        else if ((catX - mouseX <= 750 || mouseX - (catX + cat.width) <= 750)
                && (catY - mouseY <= 750 || mouseY - (catY + cat.height) <= 750)){
                    console.log("hahh7");

            clickScreen.style.backgroundColor  = "#f2f28c";
        }
        else
        {
            clickScreen.style.backgroundColor  = "#f7f7ba";
            console.log("hahh");
        }

    }
    
    
    

};

game();