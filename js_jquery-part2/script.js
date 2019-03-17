$.ajax('https://jsonplaceholder.typicode.com/albums', {
	method: 'GET',
	dataType: 'json',
	error: function(jqXHR, textStatus, errorThrown) {
		console.log("Ошибка: " + textStatus, errorThrown);
	},
	success: function(albumData){
		albumData.forEach(function(elem){
			var nameAlbum = 
				$('.albumSelect').append( "<option value=" + "'" + elem.title + "'" + " id=" + "'" + elem.id + "'" + ">" + elem.title + "</option>" );
		});

		$.ajax('https://jsonplaceholder.typicode.com/photos', {
			method: 'GET',
			dataType: 'json',
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Ошибка: " + textStatus, errorThrown);
			},
			success: function(photosData){
				photosData.forEach(function(element){
					var photos = 
						$('.albumPhotos').append("<img src=" + "'" + element.url + "'" + " id=" + "'"+ element.albumId + "' class=" + "'" + element.albumId + "'" + ">");

				});
				
				console.log(photosData[15].albumId);

				$('.albumPhotos img').hide();

				$('.button').click(function(){
					var album =  $('.albumSelect option:selected'),
						photo = album.id
						;

					photosData.forEach(function(item){
						if ( photo === item.userId){
							$('.albumPhoto img').attr('id', '"' + item.userId + '"' ).show();
						}
					});
				});
			}
		});
	}
});