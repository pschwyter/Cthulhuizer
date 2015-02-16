// $(document).ready(function(){

	function replaceWith(fbName, newName, newImgUrl){
		var name = fbName;
		var replaceName = newName;
		var replaceImage = newImgUrl;

		// Check chat log for person
		function checkChatSideBar(){
			if ($( ".fbChatOrderedList div:contains("+name+") img").length > 0) {

				// replace image in chat list
				$( ".fbChatOrderedList div:contains("+name+") img" ).attr('src', replaceImage);
				// replace name in chat list
				$(".fbChatOrderedList div:contains("+name+") span").html(replaceName);
			}
		}				
		// Check conversations for person
		function checkConversations(){
			console.log('checkConversations called');
			if (typeof originalImageUrl == 'undefined') {
				console.log(originalImageUrl);
				var originalImageUrl = $(".fbNubFlyout:has(a:contains("+name+")) .conversation div img:first").attr('src');
			}
			// replace all profile pictures with the same source to newImgUrl input by user
			$("img[src*='"+originalImageUrl+"']").attr('src', replaceImage);
			// select the chat flyout
			$(".fbNubFlyout:has(a:contains("+name+"))");
			// replace name in conversation headline
			$("a.titlebarText:contains("+name+")").html(replaceName);
		}


		// when bottom chat is toggled we need to replace the names again!
		$('.clearfix.fbNubFlyoutTitlebar.titlebar').click(function(){
			$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
		});
		$('.name.fwb').click(function(){
			$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
		});

		// when person's name is clicked in the chat sidebar, run checkConversations function 
		// and reset click handlers
		$(".fbChatOrderedList a:has(span:contains("+name+"))").click(function(){
			console.log('chat sidebar toggled');
			// need to set a timeout since click events are executed immediately
			setTimeout(function(){
				checkConversations();
				// when bottom chat is toggled we need to replace the names again!
				$('.clearfix.fbNubFlyoutTitlebar.titlebar').click(function(){
					$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
				});
				$('.name.fwb').click(function(){
					$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
				});
			}, 200);
		});

		// $(".fbChatOrderedList a:has(span:contains("+replaceName+"))").click(function(){
		// 	checkConversations();
		// 	console.log('new name toggled');

		// 	// when bottom chat is toggled we need to replace the names again!
		// 	$('.clearfix.fbNubFlyoutTitlebar.titlebar').click(function(){
		// 		$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
		// 	});
		// 	$('.name.fwb').click(function(){
		// 		$(".fbDockWrapperRight div.name.fwb:contains("+name+")").html(replaceName);
		// 	});
		// });

		// call functions on script load
		checkChatSideBar();
		checkConversations();
	}

// });