//USE https://jsfiddle.net/

//USING JS
function jsFunction(value)
{
    alert(value);
}

//USING HTML
<select id ="ddl" name="ddl" onmousedown="this.value='';" onchange="jsFunction(this.value);">
  <option value='1'>One</option>
  <option value='2'>Two</option>
  <option value='3'>Three</option>
</select>

//USING Jquery
