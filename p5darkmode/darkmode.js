
//because we din't use id in html so queryselector allows you to select html element or clss
const toggleSwitch = document.querySelector('input[type="checkbox"]');


function switchTheme(event){
// console.log(event.target.checked);

if (event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');

}else{
    document.documentElement.setAttribute('data-theme', 'light');
}
}
//Event listener
toggleSwitch.addEventListener('change', switchTheme);
 