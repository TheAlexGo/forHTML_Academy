function getData(){
	let data = []
	// Если данные в localStorage есть, то получаем их, иначе берём заготовленные
	if(localStorage.getItem('data_news') == null){
		data = [
			{
				"id": 1,
				"heading": "Какой-то рандомный день... Тяжело нынче жить",
				"author": "Гордеев А.С.",
				"date": "01.11.2020",
				"time": "22:48:02",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 2,
				"heading": "'yuganda sekai ni dan dan boku wa sukitootte mienaku natte"+
				"mitsukenaide boku no koto wo mitsumenaide' или как я посмотрел Токийский Гуль",
				"author": "Гордеев А.С.",
				"date": "25.05.2019",
				"time": "10:10:10",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 3,
				"heading": "Сбросить лишние 30 килограмм - легко! Нужно просто пить на ночь...",
				"author": "Гордеев А.С.",
				"date": "30.07.2018",
				"time": "15:50:21",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 4,
				"heading": "А у кого-то сегодня День Рождения! Ура!!",
				"author": "Гордеев А.С.",
				"date": "28.07.2017",
				"time": "06:16:24",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 5,
				"heading": "Да кто такая эта ваша школа...",
				"author": "Гордеев А.С.",
				"date": "01.09.2016",
				"time": "09:00:00",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 6,
				"heading": "Эх, хороший день... Жаль, что не для меня",
				"author": "Гордеев А.С.",
				"date": "14.02.2015",
				"time": "18:10:56",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 7,
				"heading": "Какой-то рандомный день... Тяжело нынче жить",
				"author": "Гордеев А.С.",
				"date": "01.11.2020",
				"time": "22:48:02",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 8,
				"heading": "'yuganda sekai ni dan dan boku wa sukitootte mienaku natte"+
				"mitsukenaide boku no koto wo mitsumenaide' или как я посмотрел Токийский Гуль",
				"author": "Гордеев А.С.",
				"date": "25.05.2019",
				"time": "10:10:10",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 9,
				"heading": "Сбросить лишние 30 килограмм - легко! Нужно просто пить на ночь...",
				"author": "Гордеев А.С.",
				"date": "30.07.2018",
				"time": "15:50:21",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 10,
				"heading": "А у кого-то сегодня День Рождения! Ура!!",
				"author": "Гордеев А.С.",
				"date": "28.07.2017",
				"time": "06:16:24",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 11,
				"heading": "Да кто такая эта ваша школа...",
				"author": "Гордеев А.С.",
				"date": "01.09.2016",
				"time": "09:00:00",
				"link_more": "#!",
				"readed": false
			},
			{
				"id": 12,
				"heading": "Эх, хороший день... Жаль, что не для меня",
				"author": "Гордеев А.С.",
				"date": "14.02.2015",
				"time": "18:10:56",
				"link_more": "#!",
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


	heading = '<h1>'+heading+'</h1>'
	link_more = '<a onclick="data_update(this)" href="'+link_more+'">'+link_text+'</a>'
	date = '<span class="data-n-time__first">'+date+'</span>'
	time = '<span class="data-n-time__last">'+time+'</span>'
	author = '<span>'+author+'</span>'
	readed = '<span>Прочитано: '+(readed ? '<i class="far fa-check-circle"></i>':'<i class="far fa-times-circle"></i>') +'</span>'


	let date_block = '<div class="widget__body__footer__author__data-n-time">'+
		date+time+'</div>' 
	let author_image = '<div class="widget__body__footer__author__image">'+
		'<i class="fas fa-user-circle"></i></div>'
	let author_block = '<div class="widget__body__footer__author">'+author_image+'<div>'+author+date_block+'</div>'+'</div>'
	let readed_block = '<div class="widget__body__footer__readed">'+readed+'</div>' 

	let heading_block = '<div class="widget__body__head">'+heading+'</div>'
	let content_block = '<div class="widget__body__content">'+link_more+'</div>'
	let footer_card = '<div class="widget__body__footer">'+author_block+readed_block+'</div>'
	
	// Полностью готовая карточка
	let block = '<div id="'+id+'" class="widget__body">'+heading_block+content_block+footer_card+'</div>'

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
	let all_news = document.getElementsByClassName('widget__body')
	let id_add_news = []
	for(let i = 0; i < all_news.length; i++)
	{
		// Получение уже имеющихся новостей
	    id_add_news.push(Number(all_news[i].getAttribute('id')))
	}
	i = 0
	for(let j = 0; j < data.length; j++){
		if(id_add_news.indexOf(data[j]['id']) == -1 && i < n){
			data_card = data[j]
			let element = document.createElement('div')
			element.className = 'block-widget'
			element.innerHTML = card_news(data_card)
			document.getElementsByClassName('show-button')[0].before(element)
			id_add_news.push(data[j].id)
			i++
		}
	}

	let button = document.getElementsByClassName('show-button')[0]
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
			button.className = 'show-button'
			button.setAttribute('onclick', 'show_news(3)')
			button.innerHTML = 	'Показать сообщения('+String(data.length)+')'
			document.getElementsByClassName('widget')[0].appendChild(button)
			show_news(3)
			clearInterval(timeId)
		}
	}, 0)
})