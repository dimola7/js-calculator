// let showCalc = document.form.view.value;

const insert = (num) => {
  document.form.view.value = document.form.view.value + num;
};

const equal = () => {
  let input = document.form.view.value;
  if (input) {
    document.form.view.value = eval(input);
  }
};

const clean = () => {
  document.form.view.value = "";
};

const percentage = () => {
  document.form.view.value = document.form.view.value / 100;
};

const back = () => {
  let input = document.form.view.value;
  document.form.view.value = input.substring(0, input.length - 1);
};
