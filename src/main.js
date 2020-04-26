import 'bootstrap';
import $ from 'jquery';
import { enableCases } from './controllers/cases';
import { enableTodo } from './controllers/todo';
import { enableRouting } from './routing';

async function main() {
  enableCases();
  enableTodo();

  enableRouting();
}

$(document).ready(main);
