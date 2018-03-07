var collectionOfButtons = 	document.getElementsByClassName('descriptionToggle');
var collectionOfDivs = 		document.getElementsByClassName('descriptionDiv');
var collectionOfButtons2 = 	document.getElementsByClassName('locationToggle');
var collectionOfDivs2 = 	document.getElementsByClassName('locationDiv');
var pageNavHeader = 		document.getElementById('pageNavHeader');
var pageNavButton = 		document.getElementById('pageNavToggle');
var pageNavDiv = 			document.getElementById('pageNavDiv');
var informationHeader =		document.getElementById('informationHeader');
var informationButton =		document.getElementById('informationToggle');
var informationDiv =		document.getElementById('informationDiv');

var pageNavToggle = 		false;
var informationToggle = 	false;
var descriptionDivToggle = 	false;
var locationDivToggle = 	false;

var bodyRect = 		0;
var elementRect = 	0;
var offset = 		0;
var topOffset = 	0;
var index = 		0;

var descriptionDivPosArray = [];
var locationDivPosArray = [];

/*************************************************************
 ************************************************************* 
 *************************************************************/

//Shows the following Buttons
//<noscript>: 'pageNavButton' is displayed as 'none' by default
//<noscript>: 'informationButton' is displayed as 'none' by default
//<noscript>: 'descriptionToggle' buttons / collectionOfButtons is displayed as 'none' by default
//<noscript>: 'locationToggle' buttons / collectionOfButtons2 is displayed as 'none' by default

function showButtons()
{
	pageNavButton.style.display = 'inherit';
	pageNavButton.style.display = 'inline-block';
	
	informationButton.style.display = 'inherit';
	informationButton.style.display = 'inline-block';
	
	for(var i = 0; i < collectionOfButtons.length; i++)
	{
		collectionOfButtons[i].style.display = 'inherit';
		collectionOfButtons[i].style.display = 'inline-block';
	}
	
	for(var k = 0; k < collectionOfButtons2.length; k++)
	{
		collectionOfButtons2[k].style.display = 'inherit';
		collectionOfButtons2[k].style.display = 'inline-block';
	}
}

//Hides the following Div's
//<noscript>: 'pageNavDiv' is displayed as 'block' by default
//<noscript>: 'informationDiv' is displayed as 'block' by default
//<noscript>: 'descriptionDiv's are displayed as 'table-cell' by default
//<noscript>: 'locationDiv's are displayed as 'table-cell' by default

function hideDivs()
{
	pageNavHeader.style.marginBottom = '1em';
	pageNavButton.innerHTML = 'Show Quick Links';
	pageNavDiv.style.display = 'none';
	
	informationHeader.style.marginBottom = '1em';
	informationButton.innerHTML = 'Show Information';
	informationDiv.style.display = 'none';
	
	for(var i = 0; i < collectionOfDivs.length; i++)
	{
		collectionOfDivs[i].style.display = 'none';
	}
	
	for(var i = 0; i < collectionOfDivs2.length; i++)
	{
		collectionOfDivs2[i].style.display = 'none';
	}
}

function setButtonIds()
{
	for(var i = 0; i < collectionOfButtons.length; i++)
	{
		collectionOfButtons[i].id = 'id_' + i;
	}
	
	for(var k = 0; k < collectionOfButtons2.length; k++)
	{
		collectionOfButtons2[k].id = 'id2_' + k;
	}
}

function togglePageNavDiv()
{
	if(pageNavToggle == false)
	{
		pageNavDiv.style.display = 'inherit';
		pageNavDiv.style.display = 'block';
		pageNavButton.innerHTML = 'Hide Quick Links';
		pageNavHeader.style.marginBottom = '0em';
	}
	else
	{
		pageNavDiv.style.display = 'none';
		pageNavButton.innerHTML = 'Show Quick Links';
		pageNavHeader.style.marginBottom = '1em';
	}
	pageNavToggle = !pageNavToggle;
}

function toggleInformationDiv()
{
	if(informationToggle == false)
	{
		informationDiv.style.display = 'inherit';
		informationDiv.style.display = 'block';
		informationButton.innerHTML = 'Hide Information';
		informationHeader.style.marginBottom = '0em';
	}
	else
	{
		informationDiv.style.display = 'none';
		informationButton.innerHTML = 'Show Information';
		informationHeader.style.marginBottom = '1em';
	}
	informationToggle = !informationToggle;
}

function toggleDescriptionDivs()
{
	if(descriptionDivToggle == false)
	{
		for(var i = 0; i < collectionOfDivs.length; i++)
		{
			collectionOfDivs[i].style.display = 'inherit';
			collectionOfDivs[i].style.display = 'table-cell';
		}
		
		for(var j = 0; j < collectionOfButtons.length; j++)
		{
			collectionOfButtons[j].innerHTML = 'Hide Descriptions';
		}
	}
	else
	{
		for(var i = 0; i < collectionOfDivs.length; i++)
		{
			collectionOfDivs[i].style.display = 'none';
		}
		
		for(var j = 0; j < collectionOfButtons.length; j++)
		{
			collectionOfButtons[j].innerHTML = 'Show Descriptions';
		}
	}
	descriptionDivToggle = !descriptionDivToggle;
}

function toggleLocationDivs()
{
	if(locationDivToggle == false)
	{
		for(var i = 0; i < collectionOfDivs2.length; i++)
		{
			collectionOfDivs2[i].style.display = 'inherit';
			collectionOfDivs2[i].style.display = 'table-cell';
		}
		
		for(var j = 0; j < collectionOfButtons2.length; j++)
		{
			collectionOfButtons2[j].innerHTML = 'Hide Locations';
		}
	}
	else
	{
		for(var i = 0; i < collectionOfDivs2.length; i++)
		{
			collectionOfDivs2[i].style.display = 'none';
		}
		
		for(var j = 0; j < collectionOfButtons2.length; j++)
		{
			collectionOfButtons2[j].innerHTML = 'Show Locations';
		}
	}
	locationDivToggle = !locationDivToggle;
}

function setDivPositionArray()
{
	descriptionDivPosArray.splice(0, descriptionDivPosArray.length);
	locationDivPosArray.splice(0, locationDivPosArray.length);
	
	bodyRect = document.body.getBoundingClientRect();
	
	for(var i = 0; i < collectionOfButtons.length; i++)
	{
		elementRect = collectionOfButtons[i].getBoundingClientRect();
		offset = elementRect.top - bodyRect.top;
		
		descriptionDivPosArray.push(offset);
		//console.log(collectionOfButtons[i].className + ' ' + collectionOfButtons[i].id + ' ' + offset);
	}
	//console.log('--------');
	
	for(var k = 0; k < collectionOfButtons2.length; k++)
	{
		elementRect = collectionOfButtons2[k].getBoundingClientRect();
		offset = elementRect.top - bodyRect.top;
		
		locationDivPosArray.push(offset);
		//console.log(collectionOfButtons2[k].className + ' ' + collectionOfButtons2[k].id + ' ' + offset);
	}
	//console.log('--------');
}

function adjustWindowPos(elementId)
{
	index = elementId.id.slice(3,5);
	window.scrollTo(0, descriptionDivPosArray[index] - topOffset);
	//console.log(index + ': ' + descriptionDivPosArray[index] + ' - ' + topOffset + ' = ' + (descriptionDivPosArray[index] - topOffset));
	//console.log('--------');
}

function adjustWindowPos2(elementId)
{
	index = elementId.id.slice(4,6);
	window.scrollTo(0, locationDivPosArray[index] - topOffset);
	//console.log(index + ': ' + locationDivPosArray[index] + ' - ' + topOffset + ' = ' + (locationDivPosArray[index] - topOffset));
	//console.log('--------');
}

function addEventListners()
{
	pageNavButton.addEventListener('click', function()
	{
		togglePageNavDiv();
		setDivPositionArray();
	}, false);
	
	informationButton.addEventListener('click', function()
	{
		toggleInformationDiv();
		setDivPositionArray();
	}, false);
	
	for(var k = 0; k < collectionOfButtons.length; k++)
	{
		collectionOfButtons[k].addEventListener('click', function()
		{
			topOffset = collectionOfButtons[this.id.slice(3,5)].getBoundingClientRect().top
			toggleDescriptionDivs();
			setDivPositionArray();
			adjustWindowPos(this);
		}, false);
	}
	
	for(var h = 0; h < collectionOfButtons2.length; h++)
	{
		collectionOfButtons2[h].addEventListener('click', function()
		{
			topOffset = collectionOfButtons2[this.id.slice(4,6)].getBoundingClientRect().top
			toggleLocationDivs();
			setDivPositionArray();
			adjustWindowPos2(this);
		}, false);
	}
}

/*************************************************************
 ************************************************************* 
 *************************************************************/

showButtons();
hideDivs();
setButtonIds();
addEventListners();