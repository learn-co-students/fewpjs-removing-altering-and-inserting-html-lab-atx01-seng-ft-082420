// let element = document.createElement('div')
// document.body.appendChild(element)
// let ul = document.createElement('ul')
// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     ul.appendChild(li)
//   }
   
//   element.appendChild(ul)

// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left'

// element.className = "dog"
// element.className = "pet-listing dog"

// ul.removeChild(ul.querySelector('li:nth-child(2)'))
// ul.remove()
// let element = document.getElementById('main');
// document.remove(element);

main.remove()


// let newHeader = document.createElement("h1");
// let newHeader = document.getElementById("h1#victory");
// // let newid = document.createAttribute("id");
// // newid.value = "victory"
// // newHeader = document.querySelector("h1#victory");
// // document.head.appendChild(newHeader);
// // newHeader = document.getElementById("h1#victory")

// newHeader.innerHTML = "<h1>Devin is the champion</h1>"


let newHeader = document.createElement('h1'); //create new header element
let newid = document.createAttribute("id"); //create an id attribue
newid.value = "victory"; //set id = victory
newHeader.setAttributeNode(newid); //connect id attribute to header
newHeader.innerHTML = "Devin is the champion"; //set html of header to desired string