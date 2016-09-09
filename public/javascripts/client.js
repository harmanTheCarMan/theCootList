$(document).ready( function() {
  $('.task input[type=checkbox]').change( function() {
    var url = '/tasks/' +
      ( $(this).is( ':checked' ) ? 'complete' : 'uncomplete' ) +
      'Task'
    var id = $(this).data( 'id' )

    $.post( url, { id: id } )
  })

  $('input.task-description').on( 'keypress', function(event) {
    if( event.charCode === 13 ) {
      var id = $(this).data( 'id' )
      var value = $(this).val()

      $.post( '/tasks/update', { id: id, value: value } )
    }
  })
})
