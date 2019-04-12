"use strict";

$('#addNewComment').validate({
  rules: {
    nameUser: {
      required: true,
      minlength: 2
    },
    phoneNumber: {
      required: true,
      digits: true,
      minlength: 9
    },
    date: {
      required: true
    },
    commentType: {
      required: true
    }
  },
  messages: {
    nameUser: {
      required: "Вы не ввели ваше имя!",
      minlength: "Минимальное количество символов 2"
    },
    phoneNumber: {
      required: "Не введен номер телефона!",
      digits: "Только цифры!",
      minlength: "Нужен номер телефона с кодом"
    },
    date: {
      required: "Дата обязательна"
    },
    commentType: {
      required: "Причина обращения должна быть указана!"
    }
  }
});


function addNewString(){
  var table = $('#tableBody'),
      tableTR = $('<tr></tr>'),
      tableTDName = $('<td></td>'),
      tableTDPhoneNumber = $('<td></td>'),
      tableTDDate = $('<td></td>'),
      tableTDType = $('<td></td>')
      ;

  if ( $('#addNewComment').valid() === true ) {
    tableTDName.text( $('#nameUser').val() );
    tableTDPhoneNumber.text( $('#phoneNumber').val() );
    tableTDDate.text( $('#date').val() );
    tableTDType.text( $('#commentType option:selected').val() );
  
    tableTR.append(tableTDName, tableTDPhoneNumber, tableTDDate, tableTDType);
    table.append(tableTR);
  } 
}

function deleteUserItem(){
  $("#tableBody .ui-selected").remove();
}

var simpleDialog = $("#dialog").dialog({
      autoOpen: false,
      buttons: {
        "Добавить": function(){
          addNewString();
          $('#addNewComment').trigger('reset');
          simpleDialog.dialog("close");
        },
          "Отмена": function(){
          $('#addNewComment').trigger('reset');
          simpleDialog.dialog("close");
        },
      },
    }),

    deleteDialog = $('#deleteDialog').dialog({
      autoOpen: false,
      buttons: {
        "ОК": function(){
            deleteUserItem();
            deleteDialog.dialog("close");
        },
        "Отмена": function(){
            deleteDialog.dialog("close");
        }
      }
    })
    ;     

$( "#tableBody" ).selectable();

$( "#openButton" ).click(function(){
  simpleDialog.dialog("open");
});

$( "#deleteItem" ).click( function(){
  deleteDialog.dialog("open");
});