$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
		var name = $("#Name").val();
		var comment = $("#Comment").val();
        var picture = $("#Picture").val(); 
		jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
		$("#jediPic").prepend('<img src="' + picture + '"height = "150" width="200"/>');
		var urlJedi = "https://yoda.p.mashape.com/yoda?sentence=" + comment;
		console.log(picture);
		$.ajax({
		  	url:urlJedi,
			headers: 
				{"X-Mashape-Key":"3aVX64zAMWmsh8J22FFnDfuFkGl7p1jwVwJjsnj6SKXhiv6aVj",
				Accept:"text/plain"},
		  success: function(result,textStatus) {
			  	//console.log(result);
				$("#jedi").html(name + ": Yoda master, " + result);
		  }
		});
		
		$("#yoda").text("Please wait...");
		var urlYoda = "https://yoda.p.mashape.com/yoda?sentence=you+will+learn+how+to+speak+like+me+someday.++Oh+wait.";
		$.ajax({
		  	url:urlYoda,
			headers: 
				{"X-Mashape-Key":"3aVX64zAMWmsh8J22FFnDfuFkGl7p1jwVwJjsnj6SKXhiv6aVj",
				Accept:"text/plain"},
		  success: function(result,textStatus) {
			  	//console.log(result);
				$("#yoda").html("Yoda: Jedi " + name + ", " + result);
		  }
		});
		
		var url = "comment";
		$.ajax({
		  url:url,
		  type: "POST",
		  data: jobj,
		  contentType: "application/json; charset=utf-8",
		  success: function(data,textStatus) {
			  $("#done").html(textStatus);
		  }
		});


	});

      $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      });
    });
});
