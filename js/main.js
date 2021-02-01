fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data);
	displayData(data)
})
function displayData(info){
	var body=document.querySelector("body");

var row=document.createElement("section")
row.classList.add("row","justify-content-center");
body.append(row);
info.mobiles.map(value=>{
    var column=document.createElement("article");
    column.classList.add("col-sm-10","col-md-6","col-lg-3");
    row.append(column);
    //card
    var card=document.createElement("div");
    card.classList.add("card","mt-3");

    //card-body
    var cardbody=document.createElement("div");
    cardbody.classList.add("card-body");

    //image
    var imageElement=document.createElement("img");
    imageElement.src=value.image;
    imageElement.classList.add("img.responsive");
    imageElement.alt=value.name;
    //name
    var name=document.createElement("h2");
    name.textContent=value.name;
    name.classList.add("text-center","text-primary");
    //price
    var price=document.createElement("p");
    price.classList.add("text-secondary","text-center");
    price.innerHTML="<s>₹"+value.price+"/-<s>";
    //original price
     var oprice=document.createElement("p");
    oprice.classList.add("text-danger","text-center");
    oprice.innerHTML="<s>₹"+value.oprice+"/-<s>";
    //button
    var buttonParent=document.createElement("div");
    buttonParent.classList.add("d-grid","gap-2");
    var button=document.createElement("button");
    button.classList.add("btn","btn-primary","btn-block");
    button.textContent="Add to cart";
    buttonParent.append(button);
    cardbody.append(imageElement);
    cardbody.append(name);
    cardbody.append(price);
    cardbody.append(oprice);
    cardbody.append(buttonParent);
    card.append(cardbody);
    column.append(card);

})

}
