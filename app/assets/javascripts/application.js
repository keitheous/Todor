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

  $('#submit-new-task').on('click', function(){
    console.log('creating new task');

    console.log('obtaining input');
    var taskParam = {task:'', participant:''};
    taskParam['task'] = $('#new-task').val();


    console.log('requesting ajax request');
    $.ajax({
       url: '/todos',
       type: 'POST',
       data: {params: taskParam},
       success: function(response) {
         location.reload();
       }
    });
  })
});
