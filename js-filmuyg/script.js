const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
getFromLocalStorage();
total();
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        total();
        
    }
});

select.addEventListener('change', function(e){
    total();
});

function total(){
    const selectedSeats=container.querySelectorAll('.seat.selected');
    
    const seatArray=[];
    const selectedSeatArray =[];

    selectedSeats.forEach(function(seat){
        selectedSeatArray.push(seat);
    });

    seats.forEach(function(seat){
        seatArray.push(seat);
    });

    let selectedSeatIndexs = selectedSeatArray.map(function(seat){
        return seatArray.indexOf(seat);
    });
    
    let = selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
    saveToLocalStorage(selectedSeatIndexs);
}
function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats != null && selectedSeats.length >0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index)> -1 ){
                seat.classList.add('selected');
            }
        })
    }
   
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !=null){
        select.selectedIndex = selectedMovieIndex;

    }
}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}
