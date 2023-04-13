let ulTasks = $('#ulTasks')
let btnAdd = $("#btnAdd")
let btnReset = $("#btnReset")
let btnSort = $("#btnSort")
let btnCleanup = $("#btnCleanup")
let inpNewTask = $("#inpNewTask")

function addItem(){
    let listItem = $('<li>' , {
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    // created a list item using jquery and assigned it the new task that we entered

    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    //when we will click on the list item if the done class is already present on the list element then it is removed and vice versa

    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
    // list item is appended to the ulTasks and box input box is cleared 
    // toggle Input buttons are called to change the active status of buttons
}

function toggleInputButtons(){
    btnReset.prop('disabled' , inpNewTask.val()=='')
    btnAdd.prop('disabled' , inpNewTask.val()=='')
    //if there is no content in the input area than add button and reset button is disabled and vice versa

    btnSort.prop('disabled' , ulTasks.children().length<1)
    btnCleanup.prop('disabled', ulTasks.children().length<1)
    //if unordered list has no elements then sort and cleanup button is disabled
    
}

//giving functions to the buttons
btnAdd.click(addItem)
// when add button is clicked the item given as input is added in the list

btnReset.click(()=>{
    inpNewTask.val('')
    toggleInputButtons()
})
// when reset button is clicked the value inside the input field is deleted and buttons are disabled

function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
  }
btnCleanup.click(clearDone)
// when cleanup button is clicked the list items which have done class gets removed

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
  }
btnSort.click(sortTasks)
//when sort button is clicked all the list items which have class done are appended at the last of the list


inpNewTask.keypress((e)=>{
    if(e.which == 13) addItem()
})
inpNewTask.on('input' , toggleInputButtons)