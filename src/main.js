import 'bootstrap';
import $ from 'jquery';
import { enableCases } from './controllers/cases';
import { enableChart } from './controllers/chart';
import { enableExchange } from './controllers/exchange';
import { enableNotify } from './controllers/notify';
import { enableTodo } from './controllers/todo';
import { enableVoices } from './controllers/voices';
import { enableRouting } from './routing';

async function main() {
  enableCases();
  enableChart();
  enableExchange();
  enableNotify();
  enableTodo();
  enableVoices();
  enableRouting();
}

$(document).ready(main);
