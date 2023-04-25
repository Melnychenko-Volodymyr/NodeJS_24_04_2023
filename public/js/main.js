let cont = document.querySelector('.container');
let contHTML = "";

const run = async () => {
	const result = await axios.get('/prod?vendor=Lenovo&display=15');
    let res = result.data;
    for (let i=0; i<res.length; i++) {
	contHTML += `
		<div>
		--- ID:       ${res[i].id}
		--- Тип  :    ${res[i].type}
		--- Виробник: ${res[i].vendor}
		--- Модель:   ${res[i].model}
		--- Процесор: ${res[i].cpu}
		--- Дисплей:  ${res[i].display}
		--- ОЗУ, Гб:  ${res[i].memory}
		--- SSD, Гб:  ${res[i].ssd}
		</div>`;

}

cont.innerHTML = contHTML;
  };

  run();

