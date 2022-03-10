const classCharlies = [
    "https://almostheaven52.github.io/Professor-Doge-2.0/",
    "https://codepen.io/cdman814/full/qBPJGzK",
    "https://peytonjunjulas.github.io/labCharlie/",
    "https://frosty9424.github.io/frostgames/",
    "https://kenrick95.github.io/c4/",
    "https://laurenmalone01.github.io/echo-lab/",
    "https://errorless-stone.github.io/edgy-bourbon/",
    "https://htmlgames.github.io/htmlgames/differences/jump/index.html",
    "https://kobyingram11.github.io/scaling-palm-tree/",
    "https://sleep-calculator.vercel.app/",

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