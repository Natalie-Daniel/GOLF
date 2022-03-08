const classCharlies = [
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
    "link",
];

$.each(classCharlies, function(index, value) {
    $("body").append(
        '  <div class="mx-auto w-25 card text-center bg-primary"> <div class="card-header">Game No. ' +
        index +
        '</div>   <div class="card-body">    <a href="' +
        value +
        '">' +
        value +
        "</a>  </div></div> "
    );
});

const info = ["dodle@una.edu", "CIS-376", "University of North Alabama"];



for (j = 0; j < info.length; j++) {
    //do something
    $("#arrayOutput").append(info[j] + "<br/>");
}