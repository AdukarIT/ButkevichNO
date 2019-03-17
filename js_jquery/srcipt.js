$(function(){

	function ckeckValidInputs(){

		if ( !($('#name').val() === '') ) {
			$('#namespan').addClass('inputChecked');
			$('#namespan').removeClass('namespan');
		} else {
			$('#namespan').addClass( 'namespan' );
		} 

		if ( $('#email').val().match(/.+\@.+\..+/ig) ){
			$('#emailspan').addClass('inputChecked');
			$('#emailspan').removeClass('emailspan');
		} else {
			$('#emailspan').addClass( 'emailspan' );
		}

		if ( $('#phonenumber').val().match(/\+\d{11}/i) ) {
			$('#phonenumberspan').addClass('inputChecked');
			$('#phonenumberspan').removeClass('phonenumberspan');
		} else {
			$('#phonenumberspan').addClass( 'phonenumberspan' );
		}
		
		if ( $('#message').val().match(/.{10,1000}/i) ){
			$('#messagespan').addClass('inputChecked');
			$('#messagespan').removeClass('messagespan');
		} else {
			$('#messagespan').addClass( 'messagespan' );
		}
	}

	function submitForm(){
		$('#feedbackform').submit(function(e){
			if ( confirm("Отправить форму?") ) {
				alert ('Форма отправлена! Спасибо ;)');
				return;
			} else {
				alert ('Форма не была отправлена!');
			}
		
			e.preventDefault();
		});
	}	

	$('#submit').click(ckeckValidInputs);
	$('#submit').click(function(){
		if ( $('#namespan').hasClass('namespan') || $('#emailspan').hasClass( 'emailspan' ) || $('#phonenumberspan').hasClass( 'phonenumberspan' ) || $('#messagespan').hasClass( 'messagespan' ) ) {
			alert("НЕ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ!!!");
		}

		if ( $('#namespan').hasClass('inputChecked') && $('#emailspan').hasClass( 'inputChecked' ) && $('#phonenumberspan').hasClass( 'inputChecked' ) && $('#messagespan').hasClass( 'inputChecked' ) ) {
			submitForm();
		}

	});

});