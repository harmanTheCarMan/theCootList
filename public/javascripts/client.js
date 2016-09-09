$(document).ready( function() {
  $('.task input[type=checkbox]').change( function() {
    var url = '/tasks/' +
      ( $(this).is( ':checked' ) ? 'complete' : 'uncomplete' ) +
      'Task'
    var id = $(this).data( 'id' )

    console.log( url, id )
    $.post( url, { id: id } )
  })
})
