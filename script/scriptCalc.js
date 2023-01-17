function display(data)
{
    operation.value+=data;
}
function clearDisplay()
{
    operation.value="";
}

function result()
{
    operation.value=operation.value.replace('^','**');
    console.log(operation.value);
    operation.value=eval(operation.value);
}
function backspace()
{
    operation.value=operation.value.slice(0,-1)
}