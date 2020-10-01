const city = document.getElementById('city');
const category = document.getElementById('category');

const zipcode = document.getElementById('zipcode');
zipcode.style.display = "none";
const legalCategory = document.getElementById('legalCategory');
legalCategory.style.display = "none";

city.addEventListener('input', (event) => {
  let filter, txtValue, span, i;
  filter = event.target.value;
  list = zipcode.getElementsByTagName('li');

  for (i = 0; i < list.length; i++) {
    span = list[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
});

city.addEventListener('click', (event) => {
  zipcode.style.display = "block";
});

city.addEventListener('blur', (event) => {
  zipcode.style.display = "none";
});

category.addEventListener('input', (event) => {
  let filter, txtValue, span, i;
  filter = event.target.value;
  list = legalCategory.getElementsByTagName('li');

  for (i = 0; i < list.length; i++) {
    span = list[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
});

category.addEventListener('click', (event) => {
  legalCategory.style.display = "block";
});

category.addEventListener('blur', (event) => {
  legalCategory.style.display = "none";
});
