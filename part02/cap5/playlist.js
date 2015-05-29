window.onload = init;
function init(){
	var button = document.getElementById('addButton');
	button.onclick = handleButtonClick;
}
function handleButtonClick(){

	/*var songTextInput = document.getElementById("songTextInput");
	var text = songTextInput.value;
	if(text==""){
		alert("Campo vazio");
	}else{
		var li = document.createElement("li");
		li.innerHTML = text;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		*/

		open("www.google.com");

		var fido = {
			name: "Fido",
			weight: 40,
			bree: "Mixed",
			loves: ["Walks", "Brincar"]
		};


		var prop;
		for(prop in fido){
			alert("Fido has a "+ prop+" property ");
			if(prop == "name"){
				alert("This is" + fido[prop]);
			}
		}
	}