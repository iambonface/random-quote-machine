/**
 * @file Random Quote Machine Script; A freeCodeCamp Project
 * @author Bonface Mudiri 
 * Email: tastywebapps@gmail.com
 * Web: https://www.linkedin.com/in/bonface/
 */

 	$(document).ready(function(){

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
 						console.log(value.quote);
 					});
 				}
 			});


 		}

 		$("#btnQuote").click(function(){

 			getQuoteAPI();

 		});
 	});