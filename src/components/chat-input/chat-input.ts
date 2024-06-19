import type { ButtonProps, InputProps } from 'src/components';

import type { Props, Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import { messageValidator } from 'src/utils/validators/message/message.ts';

import template from './chat-input.hbs?raw';

export interface ChatInputProps extends Props {
  input: InputProps;
  sendButton: ButtonProps;
  onSubmit?: (event: Event) => void;
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
          placeholder: 'Type your message',
        },
        onSubmit: (event: Event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          const message = new FormData(form).get('chat-input') as string;

          const { isValid } = messageValidator(message);
          const { socket } = window.store.getState();

          if (isValid && socket) {
            socket.send(message);
          }

          form.reset();
        },
      },
      'div',
    );
  }

  init(): void {
    this._meta.events = {
      ...this._meta.events,
      ...(this._meta.props.onSubmit && { submit: this._meta.props.onSubmit }),
      ...(this._meta.props.input.onInput && { input: this._meta.props.input.onInput }),
    };
  }

  render(): string {
    return template;
  }
}
