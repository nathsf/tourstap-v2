/*carousel*/
$('.slide-descuentos').owlCarousel({
            responsiveClass: true,
            autoplay:false,
            items: 3,
            dots: false,
            nav: false,
        });

//upload selfie 

function foto(numeroInput) {
    $("#fileToUpload"+numeroInput).change(function(){
        $("#file"+numeroInput).val($("#fileToUpload"+numeroInput).val());

        var val = $(this).val();

        switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
            case 'gif': case 'jpg': case 'png': case 'jpeg':
                break;
            default:
                $(this).val('');
                // error message here
                alert("Formato invalido. Suba una foto en formato jpg, jpeg, png o gif");
                break;
        }

    });
}