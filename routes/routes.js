const express = require("express");
const router = express.Router();

var rfc;

router.get('/', (req,res) => {
    res.render('index', {rfc});
});

router.get('/sobre', (req,res) => {
    res.render('sobre');
});

router.get('/contacto', (req,res) => {
    res.render('contacto');
});

router.post('/rfc', (req,res) => {
    rfc = rfc_generator(req.body);
    res.redirect('/');
});

function rfc_generator(data){
    $1 = data.apellido_paterno[0];
    $2 = searchVowel(data.apellido_paterno);
    $3 = data.apellido_materno[0];
    $4 = data.primer_nombre[0];
    $5 = fecha(data.fecha_nacimiento);
    $6 = generateString();
    rfc_gen = $1 + $2 + $3 + $4 + $5 + $6;

    rfc = rfc_gen.toLowerCase();
    return rfc;
}

function searchVowel(apellido){
    var vowel;
    for(var i = 0; i <= apellido.length - 1; i++){
        if(apellido[i] == 'a' || apellido[i] == 'e' || apellido[i] == 'i' || apellido[i] == 'o' || apellido[i] == 'u'){
            vowel = apellido[i];
            break;
        }
    }
    return vowel;
}

function fecha(fecha_nacimiento){
    year1 = fecha_nacimiento.charAt(2);
    year2 = fecha_nacimiento.charAt(3);
    month1 = fecha_nacimiento.charAt(5);
    month2 = fecha_nacimiento.charAt(6);
    day1 = fecha_nacimiento.charAt(8);
    day2 = fecha_nacimiento.charAt(9);
    nFecha = year1 + year2 + month1 + month2 + day1 + day2;
    return nFecha;
}

function generateString() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    const charactersLength = characters.length;
    for ( var i = 0; i < 2; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    result += Math.floor(Math.random() * 9);

    return result;
}

module.exports = router;