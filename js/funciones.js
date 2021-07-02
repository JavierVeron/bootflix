function validarFormSuscripcion(id_form, id_campo, id_respuesta) {
    var form = $("#" + id_form);

    if (validarCampoSuscripcion(id_campo, id_respuesta)) {
        form.submit();
    }
}

function validarCampoSuscripcion(id_campo, id_respuesta) {
    var campo = $("#" + id_campo);
    var respuesta = $("#" + id_respuesta);

    if (campo.val() == "") {
        var texto = "Ingrese un Email!";
        campoError(id_campo, id_respuesta, texto);

        return false;
    } else if (campo.val().length < 5) {
        var texto = "Ingrese al menos 5 caracteres!";
        campoError(id_campo, id_respuesta, texto);

        return false;
    } else {
        if (!validarEmail(campo.val())) {
            var texto = "Ingrese un email válido!";
            campoError(id_campo, id_respuesta, texto);
            
            return false;
        }
    }

    campoOk(id_campo, id_respuesta);

    return true;
}

function validarEmail(email) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function campoOk(id_campo, id_respuesta) {
    var campo = $("#" + id_campo);
    var respuesta = $("#" + id_respuesta);

    campo.removeClass("is-invalid");
    campo.addClass("is-valid");
    respuesta.hide();
}

function campoError(id_campo, id_respuesta, texto) {
    var campo = $("#" + id_campo);
    var respuesta = $("#" + id_respuesta);

    campo.removeClass("is-valid");
    campo.addClass("is-invalid");
    campo.focus();
    respuesta.html(texto);
    respuesta.show();
}

$("#btn_suscripcion1").click(function () {
    validarFormSuscripcion("form_suscripcion1", "campo_suscripcion1", "res_suscripcion1");
});

$("#btn_suscripcion2").click(function () {
    validarFormSuscripcion("form_suscripcion2", "campo_suscripcion2", "res_suscripcion2");
});

$("#campo_suscripcion1").keyup(function () {
    validarCampoSuscripcion("campo_suscripcion1", "res_suscripcion1");
});

$("#campo_suscripcion2").keyup(function () {
    validarCampoSuscripcion("campo_suscripcion2", "res_suscripcion2");
});