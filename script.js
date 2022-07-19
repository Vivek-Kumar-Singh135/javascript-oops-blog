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
        let today = new Date();
        let tdate = today.getDate();
        let month = today.getMonth();
        if (tdate < 10)
            tdate = "0" + tdate;
        if (month < 10)
            month = "0" + month;
        let date = tdate + "/" + month + "/" + today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        if (hour < 10)
            hour = "0" + hour;
        if (minute < 10)
            minute = "0" + minute;
        if (second < 10)
            second = "0" + second;
        description.innerHTML += this.detail + '<br>' + date + " " + hour + ":" + minute + ":" + second;
    }
}
let flag = true;

function displayBlog() {
    let ttl = document.getElementById("heading").value
    let cnt = document.getElementById("content").value
    let heading = document.getElementById("heading");
    heading.remove();
    let content = document.getElementById("content");
    content.remove();
    let submit = document.getElementById("submit");
    submit.remove();
    let blog = new Blog(ttl, cnt);
    blog.addTitle();
    blog.addDescription();
    if (flag)
        addEventListeners();
}

function addNewPost() {
    let box = document.getElementById("card-text");
    let heading = document.createElement('input');
    heading.setAttribute("id", "heading");
    heading.setAttribute("placeholder", "Title");
    let content = document.createElement('textarea');
    content.setAttribute("id", "content");
    content.setAttribute("rows", "5");
    content.setAttribute("cols", "15");
    content.setAttribute("placeholder", "Your Blog...")
    let submit = document.createElement('button');
    submit.setAttribute("id", "submit");
    submit.setAttribute("onclick", "displayBlog()");
    submit.innerText = "SUBMIT";
    box.appendChild(heading);
    box.appendChild(content);
    box.appendChild(submit);
}

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
    button1.setAttribute("onclick", "editBlog()");
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
    button2.setAttribute("onclick", "deleteBlog()");
    console.log(button2);
    document.getElementById("a2").appendChild(button2);
    button2.innerHTML = "DELETE";
}

function deleteBlog() {
    let heading = document.getElementById("blog-title");
    heading.remove();
    let content = document.getElementById("blog-description");
    content.remove();
    let edit = document.getElementById("edit");
    edit.remove();
    let del = document.getElementById("delete");
    del.remove();
}

function editBlog() {
    flag = false;
    let headingText = document.getElementById("blog-title").innerText;
    console.log("ht " + headingText);
    let contentText = document.getElementById("blog-description").innerText;
    contentText = contentText.substr(0, contentText.length - 19);
    console.log("ct " + contentText);
    document.getElementById("blog-title").remove();
    document.getElementById("blog-description").remove();
    let box = document.getElementById("card-text");
    let heading = document.createElement('input');
    heading.setAttribute("id", "heading");
    heading.setAttribute("value", headingText);
    let content = document.createElement('textarea');
    content.setAttribute("id", "content");
    content.setAttribute("rows", "5");
    content.setAttribute("cols", "15");
    content.innerText = contentText;
    let submit = document.createElement('button');
    submit.setAttribute("id", "submit");
    submit.setAttribute("onclick", "displayBlog()");
    submit.innerText = "SUBMIT";
    box.appendChild(heading);
    box.appendChild(content);
    box.appendChild(submit);
}