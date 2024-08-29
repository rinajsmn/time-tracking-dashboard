let buttons = document.querySelectorAll('button');
const card = document.querySelectorAll('.card');

function activateButton(button) {
  buttons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
      activateButton(button);
  })
});

async function getData() {
    const response = await fetch('./data.json');
    return await response.json();
} 

async function daily() {
  const data = await getData();

  card.forEach((element) => {
    let attribute = data.find(card => card.title == element.getAttribute('id')) 
    document.getElementById(attribute.title+"Current").innerHTML = attribute.timeframes.daily.current + "hrs";
    document.getElementById(attribute.title+"Previous").innerHTML = "Yesterday - " + attribute.timeframes.daily.previous + "hrs";
  });
}

async function weekly() {
  const data = await getData();

  card.forEach((element) => {
    let attribute = data.find(card => card.title == element.getAttribute('id')) 
    document.getElementById(attribute.title+"Current").innerHTML = attribute.timeframes.weekly.current + "hrs";
    document.getElementById(attribute.title+"Previous").innerHTML = "Last Week - " + attribute.timeframes.weekly.previous + "hrs";
  });
}
async function monthly() {
  const data = await getData();

  card.forEach((element) => {
    let attribute = data.find(card => card.title == element.getAttribute('id')) 
    document.getElementById(attribute.title+"Current").innerHTML = attribute.timeframes.monthly.current + "hrs";
    document.getElementById(attribute.title+"Previous").innerHTML = "Last Month - " + attribute.timeframes.monthly.previous + "hrs";
  });
}
