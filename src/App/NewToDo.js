import { ProjectList } from './ProjectList';
export class NewToDoElement {
  constructor(title, body, moreInfo) {
    this.title = title;
    this.body = body;
    this.moreInfo = moreInfo;
  }

  render() {
    const liElement = document.createElement('li');
    liElement.id = Math.random();
    liElement.className = 'card';
    liElement.draggable = true;
    liElement.setAttribute('data-extra-info', `${this.moreInfo}`);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.title;

    const pElement = document.createElement('p');
    pElement.textContent = this.body;

    const moreInfoBtnElement = document.createElement('button');
    moreInfoBtnElement.className = 'alt';
    moreInfoBtnElement.textContent = 'More Info';

    const finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finish';

    liElement.appendChild(h2Element);
    liElement.appendChild(pElement);
    liElement.appendChild(moreInfoBtnElement);
    liElement.appendChild(finishBtn);
    document
      .querySelector(`#active-projects ul`)
      .insertAdjacentElement('afterbegin', liElement);

    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList),
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList),
    );
  }
}
