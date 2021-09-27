//Buttons
function changeTimespan(e){
    if(e.target.id === 'daily'){
        console.log('showing daily')
        $('.show-weekly').hide()
        $('.show-monthly').hide()
        $('.show-daily').show()
        
        $('#weekly').removeClass('active')
        $('#monthly').removeClass('active')
        $('#daily').addClass('active')
    }
    else if(e.target.id === 'weekly'){
        console.log('showing weekly')
        $('.show-monthly').hide()
        $('.show-daily').hide()
        $('.show-weekly').show()
        
        $('#weekly').addClass('active')
        $('#monthly').removeClass('active')
        $('#daily').removeClass('active')
    }
    else if(e.target.id === 'monthly'){
        console.log('showing monthly')
        $('.show-daily').hide()
        $('.show-weekly').hide()
        $('.show-monthly').show()

        
        $('#weekly').removeClass('active')
        $('#monthly').addClass('active')
        $('#daily').removeClass('active')
    }
}


const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

daily.addEventListener('click', changeTimespan)
weekly.addEventListener('click', changeTimespan)
monthly.addEventListener('click', changeTimespan)
