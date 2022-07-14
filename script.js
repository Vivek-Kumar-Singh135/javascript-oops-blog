/* Fill your code*/

/* Progression 1 */
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    addDescription() {
        var description = document.createElement('p');
        description.setAttribute("id", "blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML += this.detail + '<br>' + "14/07/22 16:39:55";
    }
}

let blog = new Blog("My Blog", "This is my first blog");
blog.addTitle();
blog.addDescription();

/* Progression 2 */

function addEventListeners() {
    var buttons = document.createElement('div');
    buttons.setAttribute("class", "card-buttons");
    console.log(buttons);
    document.getElementById("flashcard").appendChild(buttons);

    var a1 = document.createElement('a');
    a1.setAttribute("id", "a1");
    console.log(a1);
    buttons.appendChild(a1);

    var button1 = document.createElement('button');
    button1.setAttribute("type", "button");
    button1.setAttribute("id", "edit");
    console.log(button1);
    document.getElementById("a1").appendChild(button1);
    button1.innerHTML = "EDIT";

    var spn = document.createElement('span');
    console.log(spn);
    buttons.appendChild(spn);
    spn.innerHTML = "       |       ";

    var a2 = document.createElement('a');
    a2.setAttribute("id", "a2");
    console.log(a2);
    buttons.appendChild(a2);

    var button2 = document.createElement('button');
    button2.setAttribute("type", "button");
    button2.setAttribute("id", "delete");
    console.log(button2);
    document.getElementById("a2").appendChild(button2);
    button2.innerHTML = "DELETE";
}

addEventListeners();