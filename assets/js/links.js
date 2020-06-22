$('.port-item').on('click', (e) => {
    console.log(e.target.parentElement.id);
    $("#myModal").modal();
    // switch (e.target.parentElement.id) {
    //     case 'item1':
    //         window.open('https://github.com/pubIO-2020/pubIO', '_blank');
    //         break;
    //     case 'item2':
    //         window.open('https://tan-x.github.io/weather_dashboard/', '_blank');
    //         break;
    //     case 'item3':
    //         window.open('https://tan-x.github.io/code_quiz/', '_blank');
    //         break;
    //     case 'item4':
    //         window.open('https://github.com/tan-x/organize-mobilize', '_blank');
    //         break;
    //     case 'item5':
    //         window.open('https://tan-x.github.io/drum_kit/', '_blank');
    //         break;
    //     case 'item6':
    //         window.open('https://tan-x.github.io/work_day_scheduler/', '_blank');
    //         break;
    // }
})