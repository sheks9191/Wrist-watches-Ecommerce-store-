// Header Section

const header = document.getElementById('header')
const navB = document.querySelector('.navB-container')

window.addEventListener('scroll', navBar);

function navBar() {
     if(window.scrollY > header.offsetHeight + 80) {
         navB.classList.add('active')
     } else {
        navB.classList.remove('active')
     }
}

// Menu Bar

const menuBar = document.querySelector('.menu-bar')
const mobileNav = document.querySelector('.mobile-nav')

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active')
    mobileNav.classList.toggle('active')
})


// Intro Text
const introTxt = document.querySelector('.text');
const text = "Welcome/Bienvenue"
let index = 1

setInterval(introText, 500);
function introText() {
  introTxt.innerText = text.slice(0, index)

  index++ 

  if(index > text.length)
   index = 1
}

// Intro Background

const backgroundImages = [
    {
        image: "./images/bg-3.jpg"
    },

    {
        image: "./images/bg-4.jpg"
    },

    {
        image: "./images/bg-5.jpg"
    },

    {
        image: "./images/bg-6.jpg"
    },

    {
        image: "./images/bg-2.jpg"
    },

    {
        image: "./images/bg-7.jpg"
    },

    {
        image: "./images/bg-8.jpg"
    },

    {
        image: "./images/bg-1.jpg"
    }

]

const introBackground = document.querySelector('.intro-content')

let img = 1;

function backgroundUpdate() {
    const {image} = backgroundImages[img]
    introBackground.style.backgroundImage = `url(${image})`;
    

    img++

    if(img === backgroundImages.length - 1) {
        img = 0
    }
}

setInterval(backgroundUpdate, 5000)


// Brand

const brands = [

    {
         photo :"./images/brand-1.png"
     },
     
     {
        photo:"./images/brand-3.png"
    },
    
    {
        photo:"./images/brand-4.png"
    },


    {
        photo :"./images/brand-5.png"
    },
    
    {
        photo :"./images/brand-7.png"
    },

    {
        photo :"./images/brand-8.png"
    },

    {
        photo :"./images/brand-9.png"
    },

    {
        photo :"./images/brand-10.png"
    },
    
    {
        photo :"./images/brand-12.png"
    },
    
    {
        photo :"./images/brand-14.png"
    },
    
    {
        photo :"./images/brand-15.png"
    },
    
    {
        photo :"./images/brand-16.png"
    },
    
    {
        photo :"./images/brand-17.png"
    }
    
]

const brandImg = document.querySelector('.brand-img img')

let brand = 1

function brandUpdate() {
     const {photo } = brands[brand]
     brandImg.src = photo

    brand++

     if(brand === brands.length - 1) {
        brand = 0
     }
}

setInterval(brandUpdate, 3000)

// Intro Section & Login Form
const introBtn = document.getElementById('intro-btn'),
      loginCon = document.querySelector('.login-container'),
      signUpCon = document.querySelector('.signup-container'),
      loginBtn = document.querySelector('.login-btn'),
      signUpBtn = document.querySelector('.signup-btn'),
      closeBtn = document.querySelector('.fa-times-circle');

introBtn.addEventListener('click', () => {
    document.querySelector('.intro').classList.add('active')
})

loginBtn.addEventListener('click', () => {
   loginCon.classList.add('active')
})

signUpBtn.addEventListener('click', () => {
   signUpCon.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    loginCon.classList.remove('active')

})

document.querySelector('.signup-container i').addEventListener('click', () => {
    signUpCon.classList.remove('active')
})


const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText  
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})



//..................Products Array.....................................................



const productsContent = [
    {
        id: 1,
        img: "./images/nibosi-1a.png",
        title: 'Nibosi-A',
        price: 200.99,
        rating:111,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

      {
        id: 2,
        img: './images/hublot-8a.png',
        title: 'Hublot-7A',
        price: 430.00,
        rating: 654,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

     {
        id : 3,
        img : './images/hublot-1a.png',
        title : 'Hublot-1A',
        price : 789.03,
        rating: 99,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 4,
        img : './images/wooden-1a.png',
        title : 'Wooden-A',
        price : 1200.99,
        rating: 69,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 5,
        img : './images/hublot-4a.png',
        title : 'Hublot-4A',
        price : 600.11,
        rating: 720,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 6,
        img : './images/rolex-2a.png',
        title : 'Rolex-A',
        price : 897.90,
        rating: 76,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 7,
        img : './images/binbond-1e.png',
        title : 'Binbond-E',
        price : 500.02,
        rating: 303,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 8,
        img : './images/timex-1a.png',
        title : 'Timex-A',
        price : 389.50,
        rating: 68,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 9,
        img : './images/rolex-2b.png',
        title : 'Rolex-B',
        price : 898.00,
        rating: 71,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 10,
        img : './images/binbond-1d.png',
        title : 'Binbond-D',
        price : 150.98,
        rating:121,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 11,
        img : './images/nibosi-1b.png',
        title : 'Nibosi-B',
        price : 209.12,
        rating: 86,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 12,
        img : './images/timex-1b.png',
        title : 'Timex-B',
        price : 208.99,
        rating:65,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 13,
        img : './images/hublot-2a.png',
        title : 'Hublot-2A',
        price : 700.00,
        rating: 54,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 14,
        img : './images/rolex-2c.png',
        title : 'Rolex-C',
        price : 600.00,
        rating: 80,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 15,
        img : './images/nibosi-1c.png',
        title : 'Nibosi-C',
        price : 287.87,
        rating: 25,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 16,
        img : './images/timex-1c.png',
        title : 'Timex-C',
        price : 800.98,
        rating:79,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 17,
        img : './images/versace-1a.png',
        title : 'Versace-A',
        price : 890.00,
        rating: 502,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 18,
        img : './images/rolex-2d.png',
        title : 'Rolex-D',
        price : 2010.75,
        rating:67,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 19,
        img : './images/olevs-2f.png',
        title : 'Olevs-F',
        price : 2000.00,
        rating: 101,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 20,
        img : './images/rolex-2e.png',
        title : 'Rolex-E',
        price : 1200.60,
        rating:72,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 21,
        img : './images/nibosi-1d.png',
        title : 'Nibosi-D',
        price : 330.00,
        rating:65,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 22,
        img : './images/micheal-1d.png',
        title : 'Micheal-Kors D',
        price : 689.11,
        rating: 890,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 23,
        img : './images/timex-1d.png',
        title : 'Timex-D',
        price : 400.00,
        rating: 91,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 24,
        img : './images/hublot-9a.png',
        title : 'Hublot-9A',
        price : 207.98,
        rating: 450,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 25,
        img : './images/versace-1b.png',
        title : 'Versace-B',
        price : 650.00,
        rating: 190,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 26,
        img : './images/kapten_son-1a.png',
        title : 'Kapten_Son-E',
        price : 404.44,
        rating:98,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 27,
        img : './images/glashutte.png',
        title : 'Glashutte',
        price : 605.55,
        rating: 63,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 28,
        img : './images/micheal-1e.png',
        title : 'Micheal-Kors E',
        price : 2050.80,
        rating:209,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 29,
        img : './images/olevs-2a.png',
        title : 'Olevs-A',
        price : 900.88,
        rating:54,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 30,
        img : './images/olevs-2g.png',
        title : 'Olevs-G',
        price : 705.55,
        rating:67,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 31,
        img : './images/rolex-2f.png',
        title : 'Rolex-F',
        price : 2009.99,
        rating:121,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

    {
        id : 32,
        img : './images/olevs-2b.png',
        title : 'Olevs-B',
        price : 1010.87,
        rating:110,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

    {
        id : 33,
        img : './images/binbond-1b.png',
        title : 'Hublot-A',
        price : 200.99,
        rating:76,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

    {
        id : 34,
        img : './images/hublot-10a.png',
        title : 'Hublot-10A',
        price : 260.98,
        rating:320,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 35,
        img : './images/kapten_son-3a.png',
        title : 'Kapten_Son C',
        price : 768.15,
        rating:44,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

     {
        id : 36,
        img : './images/hublot-5a.png',
        title : 'Hublot-5A',
        price : 200,
        rating:2050.93,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

     {
        id : 37,
        img : './images/binbond-1a.png',
        title : 'Binbond-A',
        price : 620.23,
        rating:39,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 38,
        img : './images/kapten_son-2a.png',
        title : 'Kapten_Son B',
        price : 720.54,
        rating:115,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

     {
        id : 39,
        img : './images/versace-1f.png',
        title : 'Versace-F',
        price : 489.00,
        rating:106,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

     {
        id : 40,
        img : './images/olevs-2c.png',
        title : 'Olevs-C',
        price : 950.23,
        rating:67,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 41,
        img : './images/rolex-2h.png',
        title : 'Rolex-H',
        price : 1111.10,
        rating: 88,
         info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

     {
        id : 42,
        img : './images/hublot-7a.png',
        title : 'Hublot-7A',
        price : 200,
        rating: 130,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 43,
        img : './images/micheal-1c.png',
        title : 'Micheal-Kors C',
        price : 2000.08,
        rating: 91,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

     {
        id : 44,
        img : './images/micheal-1b.png',
        title : 'Micheal-Kors B',
        price : 950.40,
        rating: 102,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 45,
        img : './images/rolex-2i.png',
        title : 'Rolex-I',
        price : 800.17,
        rating: 77,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
    },

     {
        id : 46,
        img : './images/hublot-6a.png',
        title : 'Hublot-6A',
        price : 400.12,
        rating:90,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse placeat accusantium neque iste nisi facere pariatur sunt qui ut.'
    },

     {
        id : 47,
        img : './images/micheal-1a.png',
        title : 'Micheal-Kors A',
        price : 802.00,
        rating:89,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem nesciunt corrupti perspiciatis quasi incidunt aliquam officia fuga enim porro.'
    },

     {
        id : 48,
        img : './images/olevs-2e.png',
        title : 'Olevs-E',
        price : 250.00,
        rating: 57,
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla laborum itaque, alias minus aperiam ea dignissimos modi consequuntur quis.'
         
    }
];

const featuredContent = document.querySelector('.featured-content')

let productContent = productsContent.map(product => {

     const { img, title, price, info, rating } = product

   return  `  <div class="content">

                <img src="${img}" class="content-img" alt="${title}">
                <h3 class="content-title">${title}</h3>  
                <div class="content-price" >$${price}</div> 
                <button class="preview-btn">Preview</button> 
                <i class="fa fa-shopping-cart fa-2x cart-btn"></i>

                <div class="product-review">
                <div class= "rating">
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i> <br>
                  <span>( ${rating} ) </span>
                </div>
                   <p>${info}</p>
                </div>
            </div>
    ` 
})

productContent = productContent.join('');
featuredContent.innerHTML = productContent

document.querySelectorAll('.preview-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        let previewBtn = e.target.parentElement;
        let productReview =  previewBtn.getElementsByClassName('product-review')[0];
        let preview = previewBtn.getElementsByClassName('preview-btn')[0];

        productReview.classList.toggle('active')
        
       
        if(preview.innerHTML === "Preview") {
            preview.innerHTML = "&#8592;";
            preview.style.width = `${80}px`;
            preview.style.border = `solid ${2}px peachpuff`
        } else {
            preview.innerHTML = "Preview";
            preview.style.width = '';
            preview.style.border = `solid ${2}px peru`
        }
    })
})


//..................New Arrival Js............................................................

const arrivalImgCon = document.querySelector('.arrival-images'),
      arrivalImg = document.querySelectorAll('.arrival-images img'),
      leftBtn = document.querySelector('.left-btn'),
      rightBtn = document.querySelector('.right-btn'),
      rightArrow = document.querySelector('.right-arrow'),
      ratingRow = document.querySelector('.rating-row'),
      ratingCol = document.querySelectorAll('.rating-column');





let image = 0

const imgInterval = setInterval(slideImg, 2000)

function slideImg() {
    image++
    imgSliding()  
}

function imgSliding() {

     if(image > arrivalImg.length - 1) {
        image = 0;
    }else if( image < 0) {
        image = arrivalImg.length - 1
    }
    arrivalImgCon.style.transform = `translateX(${image * -300}px)`
}

rightBtn.addEventListener('click', () => {
    image--
    imgSliding()
})

leftBtn.addEventListener('click', () => {
    image++
    imgSliding()
})




rightArrow.addEventListener('click', () => {
    image++
     if(image > ratingCol.length - 1) {
        image = 0;
    }

    ratingRow.style.transform = `translateX(${image * -400}px)`

})

//..............Cart Section...............................

let counter = 0;
const cartIcon = document.querySelector('.cart');
cartIcon.addEventListener('click', () => {
    document.querySelector('.table-container').classList.toggle('active');
})

class Cart {
    constructor(img, title, price){
        this.img = img;
        this.title = title;
        this.price = price;
        
    }
}

class UI {
    addCartContent(cart) {
        const tableBody = document.getElementById('table-body');
        const newRow = document.createElement('tr')

        newRow.innerHTML = `
               <td>
                    <img src=${cart.img} alt="" class="cart-image">
                    <h4 class="cart-title">${cart.title}</h4>
                </td>
                <td>
                    <input type="number" value="1" class="cart-input">
                </td>
                <td>
                    <span class="cart-price">${cart.price}</span>
                </td>
                <td>
                    <button class="delete-btn">X</button>
                </td>
        `;

        tableBody.appendChild(newRow);

    }

    cartDelete(target) {
             if(target.className === 'delete-btn'){
               target.parentElement.parentElement.remove()
             }         
    }

    updateTotal() {
        let tableBody = document.getElementById('table-body');
        let cartContents = tableBody.getElementsByTagName('tr');
        let total = 0;
        for(let i = 0; i < cartContents.length; i++) {
            let cartContent = cartContents[i]
            let priceEl = cartContent.querySelector('.cart-price')
            let quantityEl = cartContent.querySelector('.cart-input')

            let price = parseFloat(priceEl.innerText.replace('$', ''))
            let quantity = quantityEl.value

            total += (price * quantity)



        }
        document.querySelector('.total-price').innerText = '$' + (total).toFixed(2)
    }

    changeQuantity(target) {
        if(target.className === 'cart-input') {
            if(isNaN(target.value) ||target.value <= 0) {
                target.value = 1
    }
        }

    }

    clearPurchases() {
 
      document.getElementById('table-body').innerHTML = ''
      document.querySelector('.cart-counter').style.display = 'none'
      
  }


    
    addCounterToCart(){    
    counter += 1
    document.querySelector('.cart-counter').textContent = counter
    document.querySelector('.cart').classList.add('active');  
   }

    removeCartCounter(){
    counter -= 1
    document.querySelector('.cart-counter').textContent = counter

    if(counter <= 0) {
        document.querySelector('.cart').classList.remove('active')
    } else {
        document.querySelector('.cart').classList.add('active')
    }
    
   }

}



document.querySelectorAll('.cart-btn').forEach(cart => {
    cart.addEventListener('click', (e) => {

        let productCont = e.target.parentElement;
        let img = productCont.getElementsByClassName('content-img')[0].src
        let title = productCont.getElementsByClassName('content-title')[0].textContent
        let price = productCont.getElementsByClassName('content-price')[0].textContent

       
        const cart = new Cart(img, title, price)
        const ui = new UI()

        ui.addCartContent(cart);
        ui.addCounterToCart();
        ui.updateTotal();

    })
});


document.getElementById('table-body').addEventListener('click', (e) => {
   if(e.target.className === 'delete-btn') {
    const ui = new UI();
    ui.cartDelete(e.target);
    ui.removeCartCounter();
    ui.updateTotal();  
   }   
});

document.getElementById('table-body').addEventListener('change', (e) => {
    if(e.target.className === 'cart-input') {
        const ui = new UI();
        ui.updateTotal(); 
        ui.changeQuantity(e.target);
    }   
} );


document.querySelector('.purchase-btn').addEventListener('click', () => {
    const ui = new UI();
    ui.clearPurchases();
    ui.updateTotal();
})



//............Brand Selection......................................................

const brandBtn = document.querySelector('.brand-button')
const brandList = document.querySelector('.brand-list')

brandBtn.addEventListener('click', () => {
    brandBtn.classList.toggle('active')
    brandList.classList.toggle('active')
})



// Product Filter
const search = document.getElementById('search'),
      brandLists = document.querySelectorAll('.brand-list li');
      
      brandLists.forEach(brandList => {
          brandList.addEventListener('click',(e) => {
             let brand = e.target.id
             document.querySelectorAll('.content').forEach(product => {
                 let productTitle = product.querySelector('.content-title').innerText.slice(0,4) 
                 if(brand.includes(productTitle.toLowerCase())) {
                     product.style.display = "block";
                 } else {
                      product.style.display = "none";
                 }
             })

             
          })
    
      })


function productFilter(e) {

    const text = e.target.value.toLowerCase() 

   document.querySelectorAll('.content').forEach(product => {
      const productTitle = product.querySelector('.content-title').innerText

      if(productTitle.toLowerCase().indexOf(text) !== -1) {
         product.style.display = 'block';
        }else {
         product.style.display = 'none';
         
     }
   })
  }

  search.addEventListener('keyup', productFilter)



 



