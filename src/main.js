import 'bootstrap';
import $ from 'jquery';
import { enableCases } from './controllers/cases';
import { enableExchange } from './controllers/exchange';
import { enableTodo } from './controllers/todo';
import { enableVoices } from './controllers/voices';
import { enableRouting } from './routing';

async function main() {
  enableCases();
  enableExchange();
  enableTodo();
  enableVoices();

  enableRouting();
}

$(document).ready(main);
