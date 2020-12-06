function getData(){
	let data = []
	// Если данные в localStorage есть, то получаем их, иначе берём заготовленные
	if(localStorage.getItem('data_news') == null){
		data = [
			{
				"id": 1,
				"heading": "Полиция арестовала австралийца, написавшего на пакетике с наркотиками свои данные на случай потери",
				"author": "tjournal.ru/",
				"date": "4 сен 2017",
				"time": "22:48",
				"link_more": "https://tjournal.ru/flood/59024-policiya-arestovala-avstraliyca-podpisavshego-paketik-s-narkotikami-na-sluchay-poteri",
				"readed": false
			},
			{
				"id": 2,
				"heading": "В Китае женщина родила на улице и пошла дальше с покупками",
				"author": "ria.ru",
				"date": "4 сен 2017",
				"time": "17:03",
				"link_more": "https://ria.ru/20170904/1501732594.html",
				"readed": false
			},
			{
				"id": 3,
				"heading": "Австралийцы с битами ворвались в пекарню, чтобы украсть чизкейки",
				"author": "Гордеев А.С.",
				"date": "1 сен 2017",
				"time": "10:41",
				"link_more": "https://life.ru/p/1039915",
				"readed": false
			},
			{
				"id": 4,
				"heading": "В Челябинской области полицейский бросил работу ради поездки на велосипеде в Уфу",
				"author": "Ufa1.ru.",
				"date": "28.07.2017",
				"time": "06:16:24",
				"link_more": "https://ufa1.ru/text/gorod/51186201/",
				"readed": false
			},
			{
				"id": 5,
				"heading": "Кузбасский дворник украл у мужчины сумку с собранными за несколько лет кулинарными рецептами",
				"author": "sib.fm.",
				"date": "7 сен 2017",
				"time": "08:50",
				"link_more": "https://sib.fm/news/2017/09/07/kuzbasskij-dvornik-ukral-u-muzhchiny-sumku-s-receptami",
				"readed": false
			},
			{
				"id": 6,
				"heading": "В Екатеринбурге несколько старушек обокрали детей, которые выступали на концерте в честь Дня пенсионера",
				"author": "ura.news",
				"date": "1 сен 2017",
				"time": "03:25",
				"link_more": "https://ura.news/news/1052302621",
				"readed": false
			},
			{
				"id": 7,
				"heading": "Судам угрожает защитник, который съедает доказательства из дел",
				"author": "news.rambler.ru",
				"date": "7 сен 2017",
				"time": "22:48",
				"link_more": "https://news.rambler.ru/crime/37841551-sudam-ugrozhaet-zaschitnik-kotoryy-sedaet-dokazatelstva-iz-del/",
				"readed": false
			},
			{
				"id": 8,
				"heading": "Житель архангельского села тайком проникал в дом соседа и пользовался его телефоном",
				"author": "interfax.ru",
				"date": "6 сен 2017",
				"time": "10:51",
				"link_more": "https://www.interfax.ru/russia/577959",
				"readed": false
			},
			{
				"id": 9,
				"heading": "Слепому инвалиду на Сахалине чиновники страхового фонда подарили телевизор",
				"author": "vesti.ru",
				"date": "6 сен 2017",
				"time": "11:35",
				"link_more": "https://www.vesti.ru/article/1627631",
				"readed": false
			},
			{
				"id": 10,
				"heading": "Мультфильм «Свинку Пеппу» снова признали опасной для жизни из-за совета играть с пауками",
				"author": "lenta.ru",
				"date": "5 сен 2017",
				"time": "19:28",
				"link_more": "https://lenta.ru/news/2017/09/05/spiderpeppa/",
				"readed": false
			},
			{
				"id": 11,
				"heading": "Англичанка два года срывала бывшему свидания, притворяясь офицером полиции",
				"author": "knife.media",
				"date": "5 сен 2017",
				"time": "09:00",
				"link_more": "https://knife.media/jealous-girlfriend/",
				"readed": false
			},
			{
				"id": 12,
				"heading": "Британка получила наркотики, купив чехол для телефона на eBay",
				"author": "life.ru",
				"date": "5 сен 2017",
				"time": "17:55",
				"link_more": "https://life.ru/p/1041067",
				"readed": false
			}
		]
		localStorage.setItem('data_news', JSON.stringify(data))
	}
	else{
		data = JSON.parse(localStorage.getItem('data_news'))
	}
	return data
}

function card_news(data){
	// Функция, представляющая шаблон карточки новости

	let heading = data.heading
	let author = data.author
	let date = data.date
	let time = data.time
	let link_more = data.link_more
	let link_text = 'Подробнее...'
	let readed = data.readed
	let id = data.id


	heading = `<h2>${heading}</h2>`
	link_more = `<a onclick="data_update(this)" href="${link_more}" target="_blank">${link_text}</a>`
	date = `<span class="data-n-time__first">${date}</span>`
	time = `<span class="data-n-time__last">${time}</span>`
	author = `<span>${author}</span>`
	readed = `<span>Прочитано: ${(readed ? '<i class="far fa-check-circle"></i>':'<i class="far fa-times-circle"></i>')}</span>`


	let date_block = `<div class="widget__block__body__footer__author__data-n-time">${date} в ${time}</div>`
	let author_image = '<div class="widget__block__body__footer__author__image"><i class="fas fa-user-circle"></i></div>'
	let author_block = `<div class="widget__block__body__footer__author">${author_image}<div>${author} ${date_block}</div></div>`
	let readed_block = `<div class="widget__block__body__footer__readed">${readed}</div>` 

	let heading_block = `<div class="widget__block__body__head">${heading}</div>`
	let content_block = `<div class="widget__block__body__content">${link_more}</div>`
	let footer_card = `<div class="widget__block__body__footer">${author_block} ${readed_block}</div>`
	
	// Полностью готовая карточка
	let block = `<div id="${id}" class="widget__block__body">${heading_block} ${content_block} ${footer_card}</div>`

	return block

}


function data_update(elem){
	// Функция обновления данных (пока что только чтение)
	let id = Number(elem.parentNode.parentNode.getAttribute('id'))
	for(let i = 0; i<data.length; i++){
		if(data[i].id == id){
			data[i].readed = true
			new_data = data[i]
		}
	}
	// Замена старой карточки обновлёнными данными
	elem.parentNode.parentNode.parentNode.innerHTML = card_news(new_data)
	// Обновление данных в localStorage
	localStorage.setItem('data_news', JSON.stringify(data))
}


function show_news(n){
	data = getData()
	// Функция показа новостей. n - количество выводимых новостей
	let all_news = document.getElementsByClassName('widget__block__body')
	let id_add_news = []
	for(let i = 0; i < all_news.length; i++)
	{
		// Получение уже имеющихся новостей
	    id_add_news.push(Number(all_news[i].getAttribute('id')))
	}
	i = 0
	for(let j = 0; j < data.length; j++){
		if(id_add_news.indexOf(data[j].id) == -1 && i < n){
			data_card = data[j]
			let element = document.createElement('div')
			element.className = 'widget__block'
			element.innerHTML = card_news(data_card)
			document.getElementsByClassName('widget__show-button')[0].before(element)
			id_add_news.push(data[j].id)
			i++
		}
	}

	let button = document.getElementsByClassName('widget__show-button')[0]
	if(id_add_news.length == data.length)
		// Скрыть кнопку, если кол-во добавленных новостей равно кол-ву всех имеющихся
		button.remove() 
	else
		// Иначе, обновить кнопку и заменить данные
		button.innerHTML = 'Показать сообщения('+String(data.length - id_add_news.length)+')'	
}

document.addEventListener('DOMContentLoaded', function(){
	console.log('Go!');
	let data = undefined

	// Иммитируем задержку данных
	setTimeout(function(){
		data = getData()
	}, 1000)
	document.body.innerHTML = '<div class="load"><h1>Ждём данные...</h1></div>'
	// Ждём, пока не получим ответ
	let timeId = setInterval(function(){
		if(data != undefined){
			document.body.innerHTML = '<div class="widget"><h1 class="widget__h1">Новостная лента</h1></div>';
			let button = document.createElement('button')
			button.className = 'widget__show-button'
			button.setAttribute('onclick', 'show_news(3)')
			button.innerHTML = 	'Показать сообщения('+String(data.length)+')'
			document.getElementsByClassName('widget')[0].appendChild(button)
			show_news(3)
			clearInterval(timeId)
		}
	}, 0)
})