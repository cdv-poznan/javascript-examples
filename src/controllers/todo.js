import $ from 'jquery';
import { v4 as uuid } from 'uuid';
import { remove, isEmpty, filter } from 'lodash';

const LOCAL_STORAGE_KEY = 'cdv-todos-list';

function loadTodos() {
  return filter(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [], (todo) => todo.status === 'todo');
}

function saveTodos(todos) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

export async function enableTodo() {
  $('#todo-text-alert').hide();

  const todosList = loadTodos();

  function addTodo(todo) {
    $('#todo-empty-alert').hide();
    $('#todo-list').append(
      $('<li>')
        .addClass('list-group-item')
        .append(
          $('<div>')
            .addClass('input-group')
            .append(
              $('<div>')
                .addClass('input-group-prepend')
                .append(
                  $('<button>')
                    .addClass('btn btn-outline-success')
                    .append($('<i>').addClass('fas fa-check'))
                    .click(($event) => {
                      todo.status = 'done';
                      $($event.currentTarget).prop('disabled', true).addClass('btn-success').removeClass('btn-outline-success');
                      $($event.currentTarget)
                        .parents('.list-group-item')
                        .find('.input-group-append .btn.btn-outline-secondary')
                        .removeClass('btn-outline-secondary')
                        .addClass('btn-secondary')
                        .prop('disabled', true);
                      saveTodos(todosList);
                    }),
                ),
            )
            .append($('<input>').attr('type', 'text').addClass('form-control').val(todo.text).prop('disabled', true))
            .append(
              $('<div>')
                .addClass('input-group-append')
                .append(
                  $('<button>')
                    .addClass('btn btn-outline-secondary')
                    .append($('<i>').addClass('fas fa-edit'))
                    .click(($event) => {
                      const $input = $($event.target).parents('.input-group').find('input');
                      $input.prop('disabled', false).focus();
                      $input.blur(() => $input.prop('disabled', true));
                      $input.change(($changeEvent) => {
                        todo.text = $($changeEvent.target).val();
                        saveTodos(todosList);
                      });
                    }),
                )
                .append(
                  $('<button>')
                    .addClass('btn btn-outline-danger')
                    .append($('<i>').addClass('fas fa-trash'))
                    .click(($event) => {
                      $($event.target).parents('li').remove();
                      remove(todosList, (el) => el.id === todo.id);
                      console.log(todosList);
                      if (isEmpty(todosList)) {
                        $('#todo-empty-alert').show();
                      }
                      saveTodos(todosList);
                    }),
                ),
            ),
        ),
    );
  }

  todosList.forEach(addTodo);

  $('#todo-form').submit(($event) => {
    $event.preventDefault();
    const text = $('#todo-input').val();
    if (text) {
      const todo = { text, status: 'todo', id: uuid() };
      $('#todo-input').val('');
      todosList.push(todo);
      saveTodos(todosList);
      addTodo(todo);
    } else {
      $('#todo-text-alert').show();
      setTimeout(() => {
        $('#todo-text-alert').hide();
      }, 4000);
    }
  });

  $('#todo-input').on('keydown', () => {
    $('#todo-text-alert').hide();
  });
}
