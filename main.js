const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item')
// Select tab content  item

function selectItem(e){
    
    borderRemoved();
    showRemoved();
    // Add border to current tab;
    this.classList.add('tab-border');
    console.log(this.id);
    // Grab tab content Item
    
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
    
    
}

function borderRemoved(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function showRemoved(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}
// Listen for tab Click

tabItems.forEach(item => item.addEventListener('click',selectItem))