jQuery(function(){
    $('.projects__item').on('click', function(event){
        let i = $(this).data('filter')
        $('.projects__item').removeClass('projects__item--activ')
        $(this).addClass('projects__item--activ')
        if(i == 1) {
            $('.projects__element').show()
        }else {
            $('.projects__element').hide()
            $('.projects__element.filter__' + i).show()
        }
    })


    let activ = $('.blogs__item.blogs__item--activ').data('filter')
    $('.blogs__element').hide()
    $('.blogs__element.filter__' + activ).show()
    $('.blogs__item').on('click', function (event) {
        let i = $(this).data('filter')
        $('.blogs__item').removeClass('blogs__item--activ')
        $(this).addClass('blogs__item--activ')
        $('.blogs__element').hide()
        $('.blogs__element.filter__' + i).show()
    })

    $('.footer__item').on('click', function(event){
        event.preventDefault()
        $('.footer__item a').removeClass('footer__active')
        $(this).children('a').addClass('footer__active')

        let currentBlock = $(event.target).attr('href')
        let distanceBlock = $(currentBlock).offset().top
        $('html, body').animate({
            scrollTop: distanceBlock
        }, 500)
    })

    $('.menu__link').on('click', function(event){
        event.preventDefault()
        $('.menu__link').removeClass('menu__link--active')
        $(this).addClass('menu__link--active')

        let id = $(event.target).attr('href')
        let hige = $(id).offset().top
        $('html, body').animate({
            scrollTop: hige
        }, 500)

    })
})