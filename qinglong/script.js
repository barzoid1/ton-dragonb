const text = document.querySelector('#text').innerText
const copybtn = document.querySelector('#copybtn')

async function copyToClipboard () {
    try{
        await navigator.clipboard.writeText(text)
    }
    catch (error){
        console.log('Error copying')
    }
}
 
const copy = async () => {
    copyToClipboard()
    let confirm = document.querySelector('.confirmed')
    confirm.classList.add("show");   
    setTimeout(() => {
        confirm.classList.remove("show");   
    }, 2000);
}
copybtn.addEventListener('click', copy);


// const value = document.querySelector('#supply')
// const section = document.querySelector('#tokenomics')
// function totalSupplyCounter (){
//     start = 0
//     end = 690000000000
//     counter = Math.floor(end / 100)

//     let current = start

//     const timer = setInterval(() => {
//         current += counter
//         value.innerText = current

//         if (current >= end){
//             value.innerText = end
//             clearInterval(timer)
//         }
    
//     }, 30);
// }
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5 // Adjust the threshold value as needed
//   };
  
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         totalSupplyCounter()
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);
  
//   observer.observe(section);
  
//   let icon = document.querySelector('#toTop')
//   window.onscroll = () => scrollUp()
//  const scrollUp = () => {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
//         icon.style.display = 'block'
//     }
//     else{
//         icon.style.display = 'none'
//     }
//  }

//  icon.onclick = () => scroll()
//  const scroll = () => {
//     document.body.scrollTop=0;
//     document.documentElement.scrollTop=0
//  }
        


