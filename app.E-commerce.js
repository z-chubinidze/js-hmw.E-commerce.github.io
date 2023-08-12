
var row = document.getElementById("aidi")


axios.get("https://fakestoreapi.com/products").then(function (responce) {
    const products = [];

    // Iterate over the data and add the first 10 products to the products array
    responce.data.forEach((product) => {
        if (products.length < 12) {
            products.push(product);
            // create a new cols
            var col = document.createElement("div");
            col.classList.add("col-12");
            col.classList.add("col-lg-3");
            col.classList.add("col-md-6");
            row.appendChild(col);

            // create a new box clasname "box"
            var box = document.createElement("div");
            box.classList.add("box");
            col.appendChild(box)


            // create a new images
            var img = document.createElement("img");

            // Create a new attribute object
            var src = document.createAttribute("src");


            // Set the name of the attribute
            src.name = "src";

            // Set the value of the attribute
            src.value = product.image;

            // Add the attribute to the img element
            img.attributes.setNamedItem(src);
            box.appendChild(img)
            img.style.width = "100%";
            img.style.height = "250px";
            img.style.borderRadius = "30px"
            img.style.cursor = "pointer"
            box.style.padding = "20px"


            //create a new h5 element for the title
            var h5 = document.createElement("h5")
            box.appendChild(h5)
            h5.style.fontSize = "12px"
            h5.style.marginBottom = "8px"
            h5.innerText = product.title;
            
            //create a new p element for prices
            var p = document.createElement("p")
            box.appendChild(p)

            var span1 = document.createElement("span")
            p.appendChild(span1)

            var span = document.createElement("span")
            p.appendChild(span)

            span1.innerText = "price: "
            span1.style.color = "#000"
            span1.style.fontWeight = "600"
            span1.style.fontSize = "12px"

            span.innerText = product.price + "$"
            span.style.color = "rgb(30, 233, 30)"
            span.style.fontWeight = "600";
            span.style.fontSize = "14px"
            p.classList.add("discrip")

            


            // create  a link for discription link / it has onclick atribut wich shov abd hidden discriptions
            var a = document.createElement("a");
            box.appendChild(a)
            a.innerText = "discription"
            a.style.cursor = "pointer"
            a.style.textDecoration = "underline"
            a.style.fontSize = "12px"
            a.style.color = "#5c0707"
            // Set the text content of the link
            a.textContent = "discription";

            // function to be executed when the link is clicked
            a.onclick = function foo() {
                
                if (p1.style.display === "none") {
                    p1.style.display = "block"
                } else {
                    p1.style.display = "none"
                }
            };

            // create p element for discription
            var p1 = document.createElement("p")
            box.appendChild(p1)
            p1.innerText = product.description;
            p1.style.height = "100px"
            p1.style.fontSize = "10px"
            p1.style.display = "none"


            console.log(product);

           
        }


    });

})










