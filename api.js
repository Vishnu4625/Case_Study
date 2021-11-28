function dispList(){
    document.getElementById("container").hidden=false;
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             let jFile=JSON.parse(this.responseText);

            setTable(jFile);
        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
}

//table format
function setTable(obj){
    document.getElementById("button");
    let item=obj;
    let table ="<thead><tr><th>Title</th><th>Completed</th><th>Status</th></tr></thead>";
    for(let i=0;i<item.length;i++)
    {        
        if(item[i].completed == true){   
            table+="<tr>";
            table+="<td>"+item[i].title+"</td><td>"+item[i].completed+"</td><td><input type=checkbox checked disabled></td>";
            table+="</tr>";
        }
        else{
            table+="<tr>";
            table+="<td>"+item[i].title+"</td><td>"+item[i].completed+"</td><td><input type=checkbox onChange=changeFun()></td>";
            table+="</tr>";
        }
    }
    table+="</table>";
    document.getElementById("gList").innerHTML=table;
}