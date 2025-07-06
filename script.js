let display_on_screen = document.querySelector(".output");
let buttons = document.querySelectorAll("button");

let buttons_array = Array.from(buttons);
let string = "";

buttons_array.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "DEL") {
            string = string.slice(0, -1) || "";  
            display_on_screen.innerHTML = string;
            return;
        }

        if (value === "=") {
            try{string = eval(string);
            display_on_screen.innerHTML = string;}
            catch{
                display_on_screen.innerHTML = "Error";
            }
            return;
        }
        if(value === "AC"){
            string = "";
            display_on_screen.innerHTML = string;
            return;
        }

        else{string += value;
        display_on_screen.innerHTML = string;}
    });
});
