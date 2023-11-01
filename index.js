let taskName = document.querySelector("#task-name");
let submit = document.querySelector("#submit");
let fromTime = document.querySelector("#from-time");
let toTime = document.querySelector("#to-time");
let list = document.querySelector(".tasks-list");

submit.addEventListener("click",(e)=>{
    if(taskName.value!="" && fromTime.value!="" && toTime.value!=""){
        var task = document.createElement("li");
        var checkBox = document.createElement("input");
        var time = fromTime.value + "-" + toTime.value;

        checkBox.type="checkbox";
        task.classList.add("task-item");
        checkBox.classList.add("checkbox");

        task.appendChild(checkBox);
        task.appendChild(document.createTextNode(time + " " + taskName.value));

        list.appendChild(task);

        setTimeout(() => {
            task.classList.add("appear");
        }, 300);

        taskName.value = "";
        fromTime.value = "";
        toTime.value = "";

        checkBox.addEventListener("change",(e)=>{
            if(checkBox.checked){
                task.classList.add("fade-out");
                setTimeout(()=>{
                    list.removeChild(task);
                },300)
            }
        });
    }
}); 