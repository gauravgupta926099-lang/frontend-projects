let addBtn = document.querySelector("#btn");
 let taskadd = document.querySelector("#taskadd");
 let clearBtn=document.querySelector("#clearBtn");

 clearBtn.addEventListener("click",function(){
    if(confirm("are you sure you want to clear list")){
        localStorage.clear();
        render("");
    }
 })
function render(newTask) {
    let currentList = JSON.parse(localStorage.getItem("taskArr")) || [];
    if(newTask!==""){
    currentList.unshift({ task: newTask, status: false });
     } localStorage.setItem("taskArr", JSON.stringify(currentList));
    let taskDiv = document.querySelector("#tasks");
    taskDiv.innerHTML = "";
    if (currentList.length > 0) {
        currentList.forEach((val,index) => {
            let s = val.task;
            let taskcard = document.createElement("div");
            let t = document.createElement("span");
            taskcard.classList.add("taskCard");
            t.textContent = s;
            t.classList.add("name");
            let tick = document.createElement("button");
            tick.innerHTML = "&#10004";
            tick.classList.add("tick");
            let cross = document.createElement("button");
            cross.innerHTML = "&#10006";
            cross.classList.add("cross");
            let btns = document.createElement("div");
            tick.addEventListener("click",(e)=>{
                val.status=true;
            localStorage.setItem("taskArr",JSON.stringify(currentList));
            render("");
            })
            cross.addEventListener("click",(e)=>{
            currentList.splice(index,1);
            localStorage.setItem("taskArr",JSON.stringify(currentList));
            render("");
            })

            btns.prepend(cross);
            btns.prepend(tick);
            taskcard.appendChild(t);
            taskcard.appendChild(btns);
            if (val.status === true) {
                t.classList.add("completed");
                tick.remove();
            }
            taskDiv.appendChild(taskcard);
            
        }
        )
        taskadd.value="";
    }
}
 
function addTask() {
    let s = document.querySelector("#taskadd").value;
    let regex = /^[a-zA-Z0-9_-]+( [a-zA-Z0-9_-]+)*$/;
    if (regex.test(s)) {
        render(s);
    }

}
render("");
addBtn.addEventListener("click", addTask);