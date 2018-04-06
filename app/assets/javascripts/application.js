// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

$('document').ready(function(){
  console.log('Hello! Thanks for inspecting!');

  // creating new tasks
  $('#submit-new-task').on('click', function(){

    if($('#new-task').val().length !== 0){

      var taskParam = {task:'', participant:''};
      taskParam['task'] = $('#new-task').val();
      //  participant param
      // due date param

      // ajax request to hit POST create
      $.ajax({
         url: '/todos',
         type: 'POST',
         data: {params: taskParam},
         success: function(response) {
           location.reload();
         }
      });

    }
  })

  // complete a task
  $('.check').on('click', function(){
    console.log('checking ' + $(this).children().attr('id'));

    var toCheckId = $(this).children().attr('id');
    // ajax request to hit DELETE destroy
    $.ajax({
       url: '/todos/'+ toCheckId,
       type: 'PUT',
       data: {id: toCheckId},
       success: function(response) {
         location.reload();
       }
    });
  })

  // deleting old tasks
  $('.bin').on('click', function(){
    console.log('deleting ' + $(this).children().attr('id'));

    var toDeleteId = $(this).children().attr('id');
    // ajax request to hit DELETE destroy
    $.ajax({
       url: '/todos/'+ toDeleteId,
       type: 'DELETE',
       data: {id: toDeleteId},
       success: function(response) {
         location.reload();
       }
    });
  });
});
