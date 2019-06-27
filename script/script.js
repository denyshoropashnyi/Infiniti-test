'use strict'

let findDealerBtn = document.getElementById('findDealerBtn');
findDealerBtn.addEventListener('click', goToFindDealerPage);

function goToFindDealerPage() {
    window.location = 'https://www.infinitiretailgroup.co.uk/contact-us/';
}

let viewUsedCarsBtn = document.getElementById('viewUsedCarsBtn');
viewUsedCarsBtn.addEventListener('click', goToUsedCarsPage);

function goToUsedCarsPage() {
    window.location = 'https://www.infinitiretailgroup.co.uk/used-cars/';
}