import type { ButtonProps, InputComponent, InputProps } from 'src/components';

import type { Props, Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './chat-input.hbs?raw';

export interface ChatInputProps extends Props {
  input: InputProps;
  sendButton: ButtonProps;
}

export class ChatInputComponent extends Block<ChatInputProps, Refs> {
  constructor(props: ChatInputProps) {
    super(
      {
        ...props,
        input: {
          name: 'chat-input',
          ref: 'chat-input',
          type: 'text',
          value: '',
          placeholder: 'Type your message',
          onInput: (e: Event) => {
            console.log('Input:', e);
          },
        },
        sendButton: {
          type: 'button',
          label: 'Send',
          onClick: () => {
            const input = this.refs['chat-input'] as InputComponent;
            const value = input.getValue();

            const { socket } = window.store.getState();

            if (socket) {
              socket.send(value);
            }

            input.clear();
          },
        },
      },
      'div',
    );
  }

  init(): void {
    const { onInput } = this._meta.props.input;

    if (onInput) {
      this._meta.events = {
        input: onInput?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
