import 'bootstrap';
import $ from 'jquery';
import { enableCases } from './controllers/cases';
import { enableTodo } from './controllers/todo';
import { enableVoices } from './controllers/voices';
import { enableRouting } from './routing';

async function main() {
  enableCases();
  enableTodo();
  enableVoices();

  enableRouting();
}

$(document).ready(main);
