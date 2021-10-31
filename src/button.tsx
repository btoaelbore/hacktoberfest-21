import { css, Props, useEvent } from 'atomico'

export type Type = 'button' | 'submit'

export interface Button {
  type?: Type
  disabled?: boolean
}

export function ButtonElement({ type, disabled }: Props<Button>) {
  const dispatchEvent = useEvent('click')

  const onClick = (event: Event) => {
    dispatchEvent()
    event.preventDefault()
  }

  return (
    <host shadowDom>
      <button 
        type={type}
        disabled={disabled}
        onclick={onClick}
        touchstart={onClick}>
        <span>
          <slot></slot>
        </span>
      </button>
    </host>
  )
}

ButtonElement.props = {
  type: { type: String, reflect: true, value: 'button' },
  disabled: { type: Boolean, reflect: true }
}

ButtonElement.styles = css `
  :host {
    font-family: var(--button-font-family, var(--font-family));
  }

  :host([disabled]) button {
    --button-bg-color: var(--button-disabled-bg, #EEEEEE);
    --button-text-color: var(--button-disabled-color, #AAAAAA);
    --button-pointer-events: none;
    --button-border: 1px solid #CCCBCB;
  }

  button {
    border-radius: var(--button-border-radius, 27px);
    color: var(--button-text-color, #FFFFFF);
    background-color: var(--button-bg-color, #1991F0);
    border: var(--button-border, none);
    font-weight: var(--button-font-weight, 400);
    font-size: var(--button-font-size, 16px);
    width: var(--button-width, 100%);
    height: var(--button-height, 40px);
    pointer-events: var(--button-pointer-events, auto);
    cursor: pointer;
    display: inline-block;
    line-height: inherit;
  }

  span::slotted(*) {
    display: grid;
    align-items: center;
    justify-content: center;
  }
`