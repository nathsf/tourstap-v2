
/*Collage ranking*/
$('.Collage').collagePlus(
    {
        // change this to adjust the height of the rows
        'targetHeight' : 100,
        // change this to try different effects
        // valid effets = effect-1 to effect-6
        'effect' : "effect-1"
        
    }
);
/*carousel descuentos perfil*/
$('.slide-descuentos').owlCarousel({
            responsiveClass: true,
            autoplay:false,
            items: 3,
            dots: false,
            nav: false,
        });
/*carousel descuentos*/

$('.contain-descuento').owlCarousel({
            responsiveClass: true,
            autoplay:false,
            items: 3,
            dots: false,
            nav: true,
            navText: [
              "<img src='assets/icon/flecha-izq.png' class=''></img>",
              "<img src='assets/icon/flecha-der.png' class=''></img>"
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1210:{
                    items:3
                }
            }
        });

//upload profile photo 
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