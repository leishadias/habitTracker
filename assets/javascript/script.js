const categorybtns = document.querySelectorAll('.categ');
const deletebtn = document.getElementById('deletebtn');
const checkbox = document.querySelectorAll('.checkbox');
const deadlinebtn = document.querySelectorAll('.deadlinebtn');
const date = document.querySelectorAll('.date span');

/*setting colors to the category buttons*/
function setCategoryColor(){
    for (var i=0; i<categorybtns.length; i++){
        if (categorybtns[i].innerText=='WORK'){
            categorybtns[i].style.backgroundColor="green";
        }else if (categorybtns[i].innerText=='SCHOOL'){
            categorybtns[i].style.backgroundColor="purple";
        }else if (categorybtns[i].innerText=='CLEANING'){
            categorybtns[i].style.backgroundColor="palevioletred";
        }else if (categorybtns[i].innerText=='OTHER'){
            categorybtns[i].style.backgroundColor="blue";
        }else if (categorybtns[i].innerText=='PERSONAL'){
            categorybtns[i].style.backgroundColor="orange";
        }
    }
}
/*function called to toggle status of task*/
function toggleTask (event) {
    event.preventDefault();
    let taskid = event.target.getAttribute("value"); //id saved in value attribute
    window.location.href = `./update-item/?id=${encodeURIComponent(taskid)}`;
}
/*function called for deleting items*/
function deleteItems(){
    window.location.href = './delete-item'
}
/*checking if task has crossed due date*/
function checkDueDate(){
    for (var i=0; i< deadlinebtn.length; i++){
        // Convert the givenDate to a Date object
        const givenDateObj = new Date(date[i].innerText);
        // Get the current date
        const currentDateObj = new Date();
        // Compare the dates
        console.log(date[i].innerText);
        if (givenDateObj < currentDateObj) {
            deadlinebtn[i].classList.remove('hide');
        }
    }
}
/*initialise*/
function initialise(){
    for (var i=0; i<checkbox.length; i++){
        checkbox[i].addEventListener('click', toggleTask);
    }
    deletebtn.addEventListener('click', deleteItems);

    setCategoryColor();
    checkDueDate();
}

initialise();