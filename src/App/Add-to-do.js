import { NewToDoElement } from './NewToDo';

export class addToDoForm {
  constructor() {
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show() {
    const modalElements = document.importNode(
      this.modalTemplateEl.content,
      true,
    );
    this.modalElement = modalElements.querySelector('.modal');
    this.backdropElement = modalElements.querySelector('.backdrop');

    document.body.insertAdjacentElement('afterbegin', this.modalElement);
    document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    this.render();
  }

  render() {
    const contentTemplateEl = document.querySelector('.modal');
    const form = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.textContent = 'Title:';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.required = true;

    const bodyLabel = document.createElement('label');
    bodyLabel.htmlFor = 'body';
    bodyLabel.textContent = 'Description:';

    const bodyInput = document.createElement('input');
    bodyInput.type = 'text';
    bodyInput.name = 'body';
    bodyInput.required = true;

    const moreInfoLabel = document.createElement('label');
    moreInfoLabel.htmlFor = 'moreInfo';
    moreInfoLabel.textContent = 'More Info:';

    const moreInfoInput = document.createElement('input');
    moreInfoInput.type = 'text';
    moreInfoInput.name = 'moreInfo';
    moreInfoInput.required = true;

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Add';

    form.className = 'form';
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(bodyLabel);
    form.appendChild(bodyInput);
    form.appendChild(moreInfoLabel);
    form.appendChild(moreInfoInput);
    form.appendChild(submit);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const value1 = titleInput.value;
      const value2 = bodyInput.value;
      const value3 = moreInfoInput.value;
      this.hide();
      const newEl = new NewToDoElement(value1, value2, value3);
      newEl.render();
      console.log(`Input values: ${value1}, ${value2}, ${value3}`);
    });

    contentTemplateEl.appendChild(form);
  }

  hide() {
    if (this.modalElement) {
      this.modalElement.remove();
      this.backdropElement.remove();

      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}
