import { css, Props } from 'atomico'

export type Type = 'button' | 'submit'

export interface Button {
  type?: Type
  disabled?: boolean
}

export function ButtonElement(props: Props<Button>) {
  
  const onSubmit = (element: HTMLElement) => {
    const proxy = document.createElement('button')
    proxy.type = (element as HTMLButtonElement).type
    element.insertAdjacentElement('afterend', proxy)
    proxy.click()
    proxy.remove()
  }

  const onClick = () => {
    (props.type.includes('submit')) && onSubmit(this)
  }

  return (
    <host shadowDom>
      <button 
        type={props.type}
        onmousedown={onClick} 
        disabled={props.disabled}>
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
    background: var(--button-disabled-bg, #EEEEEE);
    color: var(--button-disabled-color, #AAAAAA);
    pointer-events: none;
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