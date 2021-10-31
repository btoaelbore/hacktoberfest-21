import './src/index'
import { c, css } from 'atomico'

function RootApp() {
  return (
    <host shadowDom>
      <koi-button>Button</koi-button>
      <koi-button class="secondary">Secondary</koi-button>
      <koi-button disabled>Disabled</koi-button>
    </host>
  )
}

RootApp.styles = css `
  :host {
    display: grid;
    row-gap: 10px;
  }

  .secondary {
    --button-bg-color: #FFFFFF;
    --button-border: 1px solid #2772C7; 
    --button-text-color: #2772C7;
  }
`

customElements.define('root-app', c(RootApp))
