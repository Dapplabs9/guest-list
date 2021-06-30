var names = [];
function add(){
    var input = document.getElementById("input1").value;
    names.push(input);
    console.log(names);
}
function show(){
    document.getElementById("list_label").innerHTML = names;
}
function searching(){
    var input2 = document.getElementById("search").value;
    var found = 0;
    for (var i = 0; i < names.length; i++) {
        if (input2 == names[i]) {
            found = found + 1;
            document.getElementById("searched_found").innerHTML = "This name was found " + found + " time/s";
        }
    }
}