const city = document.getElementById('city');
const category = document.getElementById('category');

const zipcode = document.getElementById('zipcodeList');
zipcode.style.display = 'none';

const legalCategory = document.getElementById('legalCategoryList');
legalCategory.style.display = 'none';

const step3 = document.getElementById('step3');

city.addEventListener('keyup', searchCityList);
category.addEventListener('keyup', searchCategoryList);

city.addEventListener('click', () => {
  zipcode.style.display = 'block';
});

city.addEventListener('blur', (e) => {
  setTimeout(delay, 200);
});

category.addEventListener('click', () => {
  legalCategory.style.display = 'block';
});

category.addEventListener('blur', () => {
  setTimeout(delay, 200);
});

zipcode.onclick = function (e) {
  city.value = e.target.innerText;
  zipcode.style.display = 'none';
};

// Open Step 3
legalCategory.onclick = function (e) {
  legalCategory.style.display = 'none';
  step3.style.display = 'block';
  document.body.style.overflow = 'hidden';
  category.value = e.target.innerText;
  document.getElementsByClassName('highlighted')[0].innerHTML = category.value;
};

// Open Modal
let modalBtns = document.querySelectorAll(".reviewBtn");
modalBtns.forEach(function addBtnClickEvent (btn) {
  btn.onclick = function showModal () {
    document.body.style.overflow = 'hidden';
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

// Close Modal
function findClosestElement (el, selector) {
  let doc = el.document || el.ownerDocument;
  let matches = doc.querySelectorAll(selector);
  let i;
  while (el) {
    i = matches.length - 1;
    while (i >= 0) {
      if (matches.item(i) === el) {
        return el;
      }
      i -= 1;
    }
    el = el.parentElement;
  }
  return el;
}

let closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function addCloseClickEvent (btn) {
  btn.onclick = function closeModal () {
    document.body.style.overflow = 'scroll';
    let modal = findClosestElement(btn, ".modal");
    modal.style.display = "none";
  };
});

// Filter Zipcode
function searchCityList (e) {
  let filter, txtValue, span, i;
  filter = city.value.toUpperCase();
  list = zipcode.getElementsByTagName('li');

  for (i = 0; i < list.length; i++) {
    span = list[i].getElementsByTagName('span')[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// Filter Legal Category
function searchCategoryList (e) {
  let filter, txtValue, span, i;
  filter = category.value.toUpperCase();
  list = legalCategory.getElementsByTagName('li');

  for (i = 0; i < list.length; i++) {
    span = list[i].getElementsByTagName('span')[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// Close search box
function delay () {
  zipcode.style.display = 'none'
  legalCategory.style.display = 'none';
}