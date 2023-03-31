import { ProjectList } from './App/ProjectList';
import { addToDoForm } from './App/Add-to-do';

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    const toDoForm = new addToDoForm('.modal');
    const addToDoButton = document.querySelector('.add-to-do-button');
    addToDoButton.addEventListener('click', () => {
      toDoForm.show();
    });

    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList),
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList),
    );
  }
}

App.init();
