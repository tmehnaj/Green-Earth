// global variable
let totalPrice = 0;

const loadCategoryData = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
        displayCategories(data.categories);
    })
}

const loadCategoriesPlants = (id) =>{
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeActive();
        const activeBtn = document.getElementById(`btn-category-${id}`);
        activeBtn.classList.add('active');
        displayCategoriesPlants(data.plants);
    })
}

const loadAllPlants = () =>{
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
        // removeActive();
        // const activeBtn = document.getElementById(`btn-category-${id}`);
        // activeBtn.classList.add('active');
        displayCategoriesPlants(data.plants);
    })
}

const loadModalData = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    displayModal(data.plants);
  })
}

const removeActive = () => {
    const allCategoryBtn = document.querySelectorAll('.category');
    allCategoryBtn.forEach(btn => btn.classList.remove("active"));
}

const manageSpinner = (status) => {
    if(status === true){
        document.getElementById('spinner').classList.remove("hidden");
        document.getElementById('plants-container').classList.add("hidden");
    }else{
        document.getElementById('plants-container').classList.remove("hidden");
        document.getElementById('spinner').classList.add("hidden");
    }
}

  //  "id": 1,
  //   "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
  //   "name": "Mango Tree",
  //   "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
  //   "category": "Fruit Tree",
  //   "price": 500

const displayModal = (details) => {
  const detailsContainer = document.getElementById('modal-container');
  // detailsContainer.innerHTML = '';
  detailsContainer.innerHTML = `
    <h2 class="font-bold text-black text-2xl pb-2">${details.name}</h2>
    <figure>
      <img src="${details.image}" alt="plant" class="rounded-xl max-h-72 w-full">
    </figure>
    <p class="pt-2"><strong>Category:</strong> ${details.category}</p>
    <p><strong>Price:</strong> ৳<span>${details.price}</span></p>
    <p><strong>Description:</strong> ${details.description}</p>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  `
  document.getElementById('plant_modal').showModal();
}


const displayCategoriesPlants = (plants) => {
    const plantsContainer = document.getElementById('plants-container');
    plantsContainer.innerHTML = '';
    plants.forEach(plant => {
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="plant-card bg-white rounded-xl space-y-3 p-5 h-full flex  flex-col justify-between">
          <figure >
            <img src="${plant.image}" alt="plant" class="rounded-xl h-60 w-full">
          </figure>
         <div class="space-y-3">
          <div>
            <h3 onclick="loadModalData(${plant.id})" class="font-semibold text-lg">${plant.name}</h3>
            <p class="text-gray-700 text-justify pt-3 ">${plant.description}</p>
          </div>
          <div class="flex justify-between items-center">
            <span class="bg-[#DCFCE7] text-[#15803D] rounded-3xl px-5 py-1">${plant.category}</span>
            <p class="text-black font-semibold font-bangla">৳<span>${plant.price}</span></p>
          </div>
          <div>
            <button class="cart-btn btn btn-primary shadow-none border-none bg-[#15803D] hover:bg-[#1eb354] text-white rounded-3xl w-full">Add to Cart</button>
          </div>
         </div>
        </div>
        `
        plantsContainer.append(div);
    })
     manageSpinner(false);
}

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categories-container');
  categoriesContainer.innerHTML = '';
  categories.forEach(category => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
           <button id="btn-category-${category.id}" onclick="loadCategoriesPlants(${category.id})" class="category btn btn-soft bg-[#f0fef5] hover:bg-[#15803D] hover:text-white w-full shadow-none border-none hover:shadow-sm md:justify-start pl-2 py-6 my-[1px] text-xl text-gray-700 ">${category.category_name}</button>
          </div>
    `
    categoriesContainer.append(div);
  });
}


// add to cart
document.getElementById('plants-container').addEventListener('click', function (event) {
  if(event.target.closest('.cart-btn')){
    const targetBtn = event.target;
    const name = targetBtn.parentNode.parentNode.children[0].children[0].innerText;
    const price = targetBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
    const cartHistory = document.getElementById('cart-container');

    // alert
    alert(`${name} has been added to the cart`);
    // cartHistory.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="flex items-center justify-between p-2 py-3 my-2 bg-[#f0fef5] rounded-lg">
            <div>
              <h3 class="font-semibold text-xl text-[##1F2937] pb-1">${name}</h3>
            <p class="text-gray-700 text-lg font-bangla">৳<span>${price}</span></p>
            </div>
            <i class="fa-solid fa-xmark text-gray-700 cross-mark"></i>
          </div>
    `
    cartHistory.append(div);
    totalPrice = Number(totalPrice) + Number(price);
    document.getElementById('total-price').innerText = totalPrice;
   
  }
})

//delete cart

document.getElementById('cart-container').addEventListener('click', function (event) {
  if(event.target.closest('.cross-mark')){
    const targetDiv = event.target.parentNode;
    targetDiv.classList.add('hidden');
    const price = event.target.parentNode.children[0].children[1].children[0].innerText;
    totalPrice = Number(totalPrice) - Number(price);
     document.getElementById('total-price').innerText = totalPrice;
  }
})




loadCategoryData();
loadAllPlants();