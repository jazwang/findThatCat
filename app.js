const game = () => {
    let catX = 0;
    let catY = 0;

    let found = false;

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

    function getClickPosition(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        if(found === true)
        {
            // cat.toggleAttribute("fadeIn", false);
            cat.style.opacity = "0";
            // cat.style.visibility = "hidden";
            clickScreen.style.backgroundColor  = "#fafad2";
            found = false;
            game();
        }
        
        if (mouseX >= catX && mouseX <= (catX + cat.width) && mouseY >=catY && mouseY <=(catY + cat.height))
        {
            // cat.classList.add('fadeIn');
            // cat.style.visibility = "visible";
            cat.style.opacity = "1";
            clickScreen.style.backgroundColor  = "#a1a112";
            found = true;
        }
        else if (((catX-mouseX > 0 && catX - mouseX <= 150) || mouseX - (catX + cat.width) <= 150)
                && ((catY - mouseY >0 && catY - mouseY <= 150) || mouseY - (catY + cat.height) <= 150)){
            clickScreen.style.backgroundColor  = "#e6e619";
        }
        else if (((catX-mouseX > 0 && catX - mouseX <= 350) || mouseX - (catX + cat.width) <= 350)
                && ((catY - mouseY >0 &&catY - mouseY <= 350) || mouseY - (catY + cat.height) <= 350)){

            clickScreen.style.backgroundColor  = "#eded5e";
        }
        else if (((catX-mouseX > 0 && catX - mouseX <= 550) || mouseX - (catX + cat.width) <= 550)
                && ((catY - mouseY >0 && catY - mouseY <= 550) || mouseY - (catY + cat.height) <= 550)){

            clickScreen.style.backgroundColor  = "#f2f28c";
        }
        else
        {
            clickScreen.style.backgroundColor  = "#f7f7ba";
        }

    }
    
    
    

};

game();