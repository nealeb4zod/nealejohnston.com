const logo = document.querySelectorAll('#logo path');

for (let index = 0; index < logo.length; index++) {
  console.log(`Letter ${index} is ${logo[index].getTotalLength()}`);
}
