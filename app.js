let num = 1;

let btn = document.createElement("button");
btn.textContent = "new product";
document.body.appendChild(btn);


btn.addEventListener("click", async () => {
    try {
        let data = await fetch(`https://fakestoreapI.com/products/${num}`);
        let products = await data.json();
        let title = document.createElement("p");
        title.textContent = products.title;
        document.body.appendChild(title)
        let price = document.createElement("p");
        price.textContent = products.price;
        document.body.appendChild(price)
        num++ 
    } catch (error){
        document.write("ERROR")
    }
})