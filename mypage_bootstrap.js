function addCard(input_div){
	console.log("working");
	//var tweet = "test";
	console.log(input_div.id);
	//var tweet = $('<div class="card" > <img class="card-img-top" src="..." alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Card title</h5> <p class="card-text">Sample Tweet.</p> <button type="button" class="btn btn-warning btn-circle" onclick="deleteCard("input_div")"><i class="fa fa-plus"> </i> </button> </div>');
	if(input_div.id == "interest1"){
	var tweet = $('<div class="card" id="card1" > <img class="card-img-top" src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Sample Tweet </h5> <button type="button" class="btn btn-warning btn-circle" onclick="deleteCard(card1)"><i class="fa fa-times"> </i> </button> </div> </div>');
	}
	else if(input_div.id == "interest2"){
                var tweet = $('<div class="card" id="card2"> <img class="card-img-top" src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Sample Tweet </h5> <button type="button" class="btn btn-warning btn-circle" onclick="deleteCard(card2)"><i class="fa fa-times"> </i> </button> </div> </div>');
	}
	else if(input_div.id == "interest3"){
                var tweet = $('<div class="card" id="card3"> <img class="card-img-top" src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Sample Tweet </h5> <button type="button" class="btn btn-warning btn-circle" onclick="deleteCard(card3)"><i class="fa fa-times"> </i> </button> </div> </div>');
	}
	console.log(input_div);
	//input_div.innerHTML += tweet;
	tweet.appendTo(input_div);
	console.log(input_div.innerHTML);
}

function deleteCard(input_div){
	input_div.remove();
}

