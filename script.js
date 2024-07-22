var btn = document.querySelector("button");
var coupon = document.querySelector("#drag");

var flag = 0;
btn.addEventListener("click", ()=>{
    btn.textContent = "clicked..."
    console.log("click++");
    flag += 1;
    if(flag == 1){
        var num = prompt("place the coupon code here...");
        if(num == 6969){
            console.log("coupon verified...");
            alert("go in the box for get coupon");
            coupon.addEventListener("mouseover", ()=>{
                coupon.style.opacity = 1;
            });
        }
        else{
            alert("invalid coupon...");
            console.warn("it may invaild user !!!");
        }
    }
    if(flag >= 2){
        alert("you already clicked multiple times...");
    }
});