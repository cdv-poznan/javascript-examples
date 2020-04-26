import $ from 'jquery';
import 'bootstrap';
import { enableRouting } from './routing';
import { enableCases } from './controllers/cases';

async function main() {
  enableCases();

  enableRouting();
}

$(document).ready(main);
