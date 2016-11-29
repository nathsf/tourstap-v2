
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
function fotoPerfil(numeroInput) {
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

//upload selfie reto
function fotoSelfie(numeroInput) {
    $(document).ready(function() {
        var readURL = function(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#profilePic').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#file-upload" + numeroInput).on('change', function() {
            readURL(this);
        });
        $("#uploadButton" + numeroInput).on('click', function() {
            $("#fileUpload" + numeroInput).click();
        });
    });
}
