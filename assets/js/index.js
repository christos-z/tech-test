/**
 * Created by Christos on 13/01/2017.
 */
$('#collapseExample').on('shown.bs.collapse', function() {
    console.log("shown");
}).on('show.bs.collapse', function() {
    console.log("show");
});