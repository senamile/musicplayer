function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function closeSidebar(event){
    event.preventDefault(); // Prevent default behavior of anchor element
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


