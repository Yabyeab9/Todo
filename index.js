let my1 = [];
function Add1() {
    Todo1 = document.getElementsByClassName("in1")[0].value;
    my1.push(Todo1)
    console.log(my1)

    document.querySelector(".p1").innerHTML = my1
}
let my2 = [];
function Add2() {
    let Html_2 = ''
    let Todo2 = document.getElementsByClassName("in2")[0].value;
    my2.push(Todo2);
    let len = my2.length
    for (i = 0; i < len; i++) {
        let todo_2 = my2[i]

        let html_2 = `<p>${todo_2}</p>`
        Html_2 += html_2

    }

}
let my3 = [];
let my3date = [];
function Add3() {
    let m3 = document.getElementsByClassName("in3")[0].value;
    let m3date = document.getElementsByClassName("indate")[0].value;
    my3.push(m3);
    my3date.push(m3date);

    let todohtml = '';
    let tododate = '';
    for (let i = 0; i < my3.length; i++) {
        let tod = `<p><span>${my3[i]}</span> <span>${my3date[i]}</span> <span><button class="delete" onclick="deleteTodo(${i})">Delete</button> </span></p>`

        todohtml += tod

    }

    document.querySelector('.pin3').innerHTML = todohtml;
}
function deleteTodo(index) {
    my3.splice(index, 1);
    my3date.splice(index, 1);

    let todohtml = '';
    for (let i = 0; i < my3.length; i++) {
        let tod = `<p>${my3date[i]} ${my3[i]} <button class="delete" onclick="deleteTodo(${i})">Delete</button></p>`;
        todohtml += tod;
    }

    document.querySelector('.pin3').innerHTML = todohtml;
}