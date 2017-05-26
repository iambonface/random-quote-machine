/**
 * @file Random Quote Machine Script; A freeCodeCamp Project
 * @author Bonface Mudiri 
 * Email: tastywebapps@gmail.com
 * Web: https://www.linkedin.com/in/bonface/
 */

 		

 	$(document).ready(function(){

 		var urlShortener = "http://tiny.cc/newquotes";
 		var hashtags = "quotes";

  		var startQuote = "I want to live my life such that when I get out of bed in the morning," + 
  		                  "the devil says,\'aw shit, he's up!\'";
 		var startAuthor = "Steve Maraboli";

 		$("#quote").html(startQuote);
 		$("#author").html(startAuthor);

 		//make a 140 character tweet for initial quote
 		$("#twitterIcon").attr("href", 'https://twitter.com/intent/tweet?text=' 
 							+ encodeURIComponent('"' + startQuote + '"') 
 							+ "%20" + "&hashtags=" + hashtags + "%20" + urlShortener);

  		function getQuoteAPI(){

 			var root = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'; 			

 			$.ajax({

 				headers:{
 					"X-Mashape-Key": "FNEeUmn6UTmshk5zlX0dMecVnNC8p18yke7jsnqjVeRNRvCo0p",
 					"Content-Type": "application/x-www-form-urlencoded",
 					"Accept": "application/json"

 				},
 				url: root,
 				dataType: 'json',
 				method: 'GET',
 				success: function(data){

 					$(data).each(function(index, value){
 						//console.log(value.quote);
 						var q = value.quote;
 						var a = value.author;

 						$("#quote").html(q);
 						$("#author").html(a);

 						$("#twitterIcon").attr("href", 'https://twitter.com/intent/tweet?text=' 
 							+ encodeURIComponent('"' + q + '"') +"%20" 
 							+ encodeURIComponent(a) +"&hashtags=" + hashtags +"%20" + urlShortener);

 					});
 				}
 			});


 		}

		 		
 		$("#btnQuote").click(function(){
 		
 			getQuoteAPI();

  		});


 		


 	});