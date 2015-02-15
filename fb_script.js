// $(document).ready(function(){

	function replaceWith(fbName, newName, imgUrl){
		var name = fbName;
		var replaceName = newName;
		var replaceImage = imgUrl;

		// Check chat log for person
		if ($( ".fbChatOrderedList div:contains("+name+") img").length > 0) {

			// replace image in chat list
			$( ".fbChatOrderedList div:contains("+name+") img" ).attr('src', replaceImage);
			// replace name in chat list
			$(".fbChatOrderedList div:contains("+name+") span").html(replaceName);
		}

		// Check conversations for person
		if ($("a.titlebarText:contains('Savannah Copland')").length > 0) {
			// set variable to profile pic url
			var originalImageUrl = $(".fbNubFlyout:has(a:contains("+name+")) .conversation div img:first").attr('src')
			// replace all profile pictures with the same source to imgUrl input by user
			$("img[src*="+originalImageUrl+"]").attr('src', replaceImage);
			// select the chat flyout
			$(".fbNubFlyout:has(a:contains("+name+"))");
			// replace name in conversation headline
			$("a.titlebarText:contains("+name+")").html(replaceName);

		}




		// find profile picture URL

		// replace image in chat list
		// $( ".fbChatOrderedList div:contains("+name+") img" ).attr('src', image);
		// replace name in chat list
		// $(".fbChatOrderedList div:contains("+name+") span").html(replaceName);

		// replace ALL profile images matching the profile URL on the page
		// $("img[src*='https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c5.0.32.32/p32x32/10997472_10153124051135879_3417971091019109939_n.jpg?oh=a13ab7489af773fe3a1c4dfe27712a4c&oe=5592D2DD&__gda__=1432011051_04748bf415e1519f259112b48be1836c']").attr('src', 'https://occamsrazormag.files.wordpress.com/2014/08/cthulhu.jpg')
	}

// });
