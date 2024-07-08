// filter-form search-results

const formElement = document.querySelector('.filter-form');
const countElement = document.querySelector('#count');
const resultsElement = document.querySelector('.search-results');

const productList = [

    {

        id:1,
        name:'Green Shirt',
        price:650.00,
        quanity:0,
        img: 'assets/p1.jpeg',
        variants: {

            color: ['green'],
            size: ['S','M','L'],
            type: 'Shirt'
        }
    },
    {

        id:2,
        name:'Black Shirt',
        price:950.50,
        quanity:15,
        img: 'assets/p2.jpeg',
        variants: {

            color: ['black'],
            size: ['XL','XXL','L'],
            type: 'Shirt'
        }
    },
    {

        id:3,
        name:'Yellow Shirt',
        price:1650.50,
        quanity:30,
        img: 'assets/p3.jpeg',
        variants: {

            color: ['yellow'],
            size: ['XL','XXL','L'],
            type: 'Shirt'
        }
    },
    {

        id:4,
        name:'Maroon Shirt',
        price:450.90,
        quanity:60,
        img: 'assets/p4.jpeg',
        variants: {

            color: ['maroon'],
            size: ['XL','XXL','L'],
            type: 'Shirt'
        }
    },
    {

        id:5,
        name:'Yellow T-shirt',
        price:890.90,
        quanity:60,
        img: 'assets/p5.jpeg',
        variants: {

            color: ['yellow'],
            size: ['XL','XXL','L'],
            type: 'T-shirt'
        }
    },
    {

        id:6,
        name:'Orange T-shirt',
        price:790.90,
        quanity:60,
        img: 'assets/p6.jpeg',
        variants: {

            color: ['orange'],
            size: ['XL','XXL','L'],
            type: 'T-shirt'
        }
    },
    {

        id:7,
        name:'red T-shirt',
        price:500.90,
        quanity:60,
        img: 'assets/p7.jpeg',
        variants: {

            color: ['red'],
            size: ['XL','XXL','L'],
            type: 'T-shirt'
        }
    },
    {

        id:8,
        name:'white Polo T-shirt',
        price:950.90,
        quanity:60,
        img: 'assets/p8.jpeg',
        variants: {

            color: ['white'],
            size: ['XL','XXL','L'],
            type: 'Polo'
        }
    },
    {

        id:9,
        name:'Blue Polo T-shirt',
        price:500.90,
        quanity:60,
        img: 'assets/p9.jpeg',
        variants: {

            color: ['blue'],
            size: ['XL','XXL','L'],
            type: 'Polo'
        }
    },
    {

        id:10,
        name:"Blue Women's Blouse",
        price:864.90,
        quanity:60,
        img: 'assets/p10.jpeg',
        variants: {

            color: ['blue'],
            size: ['XL','XXL','L'],
            type: 'Blouse'
        }
    },
    {

        id:11,
        name:"Pink Women's Blouse",
        price:920.90,
        quanity:60,
        img: 'assets/p11.jpeg',
        variants: {

            color: ['pink'],
            size: ['XL','XXL','L'],
            type: 'Blouse'
        }
    },
    {

        id:12,
        name:"White Women's Blouse",
        price:630.90,
        quanity:60,
        img: 'assets/p12.jpeg',
        variants: {

            color: ['white'],
            size: ['XL','XXL','L'],
            type: 'Blouse'
        }
    },
    {

        id:13,
        name:'Blue Polo T-shirt',
        price:740.90,
        quanity:60,
        img: 'assets/p13.jpeg',
        variants: {

            color: ['black'],
            size: ['XL','XXL','L'],
            type: 'Blouse'
        }
    },

]

let filteredList = productList;

const showResults = (filteredList) => {

    countElement.innerHTML = filteredList.length;

    resultsElement.innerHTML = '';

    filteredList.forEach((i,idx) => {

        const itemElement = document.createElement('div');
        itemElement.classList.add('item');      

        const imgElmt = document.createElement('img');
        imgElmt.src = i.img;

        itemElement.appendChild(imgElmt);

        const nameElmt = document.createElement('div');
        nameElmt.classList.add('itemname');
        nameElmt.innerHTML = i.name;

        itemElement.appendChild(nameElmt);

        const priceElmt = document.createElement('div');
        priceElmt.classList.add('itemprice'); 
        priceElmt.innerHTML = 'SGD$' + ((i.price).toFixed(2)).toLocaleString();     
        
        itemElement.appendChild(priceElmt);

        resultsElement.appendChild(itemElement)


        
    })
}

showResults(filteredList);

formElement.addEventListener('submit',(e) => {

    e.preventDefault();

    const searchElement = e.target.elements;

    filteredList = productList.filter((i) => {

        if(searchElement.type.value != ''){

            if(i.variants.type != searchElement.type.value){

                return false;
            }

            
        }
        if(searchElement.color.value != ''){

            if(!i.variants.color.includes(searchElement.color.value)){

                return false;
            }

            
        }
        if(searchElement.itemname.value != ''){

            if(!i.name.includes(searchElement.itemname.value)){

                return false;
            }

            
        }
        if(searchElement.minprice.value != ''){

            if(i.price < searchElement.minprice.value){

                return false;
            }
     
        }
        if(searchElement.maxprice.value != ''){

            if(i.price > searchElement.maxprice.value){

                return false;
            }
     
        }

        return true;
    })

    showResults(filteredList);
})

