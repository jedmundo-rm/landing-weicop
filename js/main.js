jQuery(function ($) {

    function headerTexts(button, text, hiddentext) {
        $(hiddentext).hide();
        $(button).click(function () {
            $(text).toggle();
            $(hiddentext).toggle();
            $(this).toggleClass("activebutton");
        });
    }
    headerTexts(".btn1", "#text1", "#hidden1");
    headerTexts(".btn2", "#text2", "#hidden2");
    headerTexts(".btn3", "#text3", "#hidden3");




    $("#menu img").click(function () {


    });


    var action = 1;

    $("#menu img").on("click", viewSomething);

    function viewSomething() {
        if (action == 1) {
            $(this).attr("src", "./img/cerrar.svg");
            action = 2;
        } else {
            $(this).attr("src", "./img/menu.svg");
            action = 1;
        }
    }

    /////////////////
    $("a#someId").on("click", function () {

        //Put the code from above here.
        $.post("modal.html", function (data) {

            $("#myModalDiv").html(data).fadeIn();

        });

    });



    var contentModal = document.getElementById('contentModal');
    var modalIframe = document.getElementById('modaliframe');

    contentModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var linkhref = button.getAttribute('href');
        modalIframe.setAttribute('src', linkhref);
    });
});