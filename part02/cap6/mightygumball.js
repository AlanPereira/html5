window.onload = init;


var lastReportTime = 0;

function init(){
	setInterval(handleRefresh, 3000);
}


function handleRefresh(){
	var url = "http://gumball.wickedlysmart.com/?callback=updateSales"+
			"&lastreporttime="+lastReportTime+
			"&random="+(new Date()).getTime();
	var script = document.createElement('script');
	script.setAttribute("src", url);
	script.setAttribute("id", "jsonp");

	var antScript = document.getElementById('jsonp');
	var head = document.getElementsByTagName('head')[0];

	if(antScript == null)
		head.appendChild(script);
	else
		head.replaceChild(script, antScript);
}

function updateSales(sales){
	var salesDiv = document.getElementById('sales');
	//var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale  = sales[i];
		var div = document.createElement('div');
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name+ " sold "+ sale.sales + " gumball";
		salesDiv.appendChild(div);
	}
	if(sales.length > 0)
		lastReportTime = sales[sales.length-1].time;
}