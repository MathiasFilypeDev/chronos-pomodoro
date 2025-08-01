import type { TaskModel } from './Models';

export type TaskStateModel = {
  tasks: TaskModel[]; //Histórico, MainForm
  secondRemaining: number; //Home, CountDown, MainForm, Button
  formatSecondRemaining: string; //Título, CountDown
  activeTask: TaskModel | null; //Home, CountDown, MainForm, Button
  currentCycle: number; //Home
  config: {
    workType: number;
    shortWorkTime: number;
    longWorkTime: number;
  };
};
