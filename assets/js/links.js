$('.port-item').on('click', (e) => {
    $("#myModal").modal();
    switch (e.target.parentElement.id) {
        case 'item1':
            // window.open('https://github.com/pubIO-2020/pubIO', '_blank');
            $(".modal-title").text('pubIO');
            $('.modal-text').text('Pub Crawl App built in React Native');
            $(".modal-img").attr('src', './assets/images/pubioHoriB.png');
            $('#repo').attr('href', 'https://github.com/pubIO-2020/pubIO');
            $('#link').attr('href', 'https://expo.io/@pubio/pubIO');
            break;
        case 'item2':
            // window.open('https://tan-x.github.io/weather_dashboard/', '_blank');
            $(".modal-title").text('Weather Dashboard');
            $('.modal-text').text('Weather App using OpenWeather API')
            $(".modal-img").attr('src', './assets/images/webSS.PNG');
            $('#repo').attr('href', 'https://github.com/tan-x/weather_dashboard');
            $('#link').attr('href', 'https://tan-x.github.io/weather_dashboard/');
            break;
        case 'item3':
            // window.open('https://tan-x.github.io/code_quiz/', '_blank');
            $(".modal-title").text('Coding Quiz');
            $('.modal-text').text('Web Development coding quiz')
            $(".modal-img").attr('src', './assets/images/codequiz.PNG');
            $('#repo').attr('href', 'https://github.com/tan-x/code_quiz');
            $('#link').attr('href', 'https://tan-x.github.io/code_quiz/');
            break;
        case 'item4':
            // window.open('https://github.com/tan-x/organize-mobilize', '_blank');
            $(".modal-title").text('Organize Mobilize');
            $('.modal-text').text('Web app built with React')
            $(".modal-img").attr('src', './assets/images/orgmobfull.png');
            $('#repo').attr('href', 'https://github.com/tan-x/organize-mobilize');
            $('#link').attr('href', 'https://github.com/tan-x/organize-mobilize');
            break;
        case 'item5':
            // window.open('https://tan-x.github.io/drum_kit/', '_blank');
            $(".modal-title").text('Drum Kit');
            $('.modal-text').text('Keyboard drum kit built with JS')
            $(".modal-img").attr('src', './assets/images/drumKit.PNG');
            $('#repo').attr('href', 'https://github.com/tan-x/drum_kit');
            $('#link').attr('href', 'https://tan-x.github.io/drum_kit/');
            break;
        case 'item6':
            // window.open('https://tan-x.github.io/work_day_scheduler/', '_blank');
            $(".modal-title").text('Work Day Scheduler');
            $('.modal-text').text('Simple scheduler built with JS using local storage')
            $(".modal-img").attr('src', './assets/images/scheduler.PNG');
            $('#repo').attr('href', 'https://github.com/tan-x/work_day_scheduler');
            $('#link').attr('href', 'https://tan-x.github.io/work_day_scheduler/');
            break;
    }
})