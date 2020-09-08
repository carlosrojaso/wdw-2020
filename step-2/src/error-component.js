class ErrorComponent extends HTMLElement {
  constructor() {
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.templates = document.createElement('div');
      this.container = document.createElement('div');
      this.root.appendChild(this.templates);
      this.root.appendChild(this.container);
      this.templates.innerHTML = ErrorComponent.template();
      const kind = this.getAttribute(`kind`) || `none`;
      this.updateStyle = this.updateStyle.bind(this);

      this.updateStyle(kind);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`${name}-${oldValue}-${newValue}`);
    this.updateStyle(newValue);
  }

  static get observedAttributes() { return ['kind']; }

  updateStyle(kind) {
    const template = this.templates.querySelector(`template.${kind}-type`);
    if (template) {
        const clone = template.content.cloneNode(true);
        this.container.innerHTML = '';
        this.container.appendChild(clone);
    }
  }

 static template () {
      return `
      <template class="warning-type">
          <style>
              .warning {
                  background-color: yellow;
                  padding: 15px;
                  color: black;
              }
          </style>
          <div class="warning">
              <slot>Error component<slot>
          </div>
      </template> 
      <template class="error-type">
          <style>
              .error {
                  background-color: red;
                  padding: 15px;
                  color: black;
              }
          </style>
          <div class="error">
              <slot>Error component<slot>
          </div>
      </template> 
      <template class="none-type">
          <style>
              .none {
                  background-color: gray;
                  padding: 15px;
                  color: black;
              }
          </style>
          <div class="none">
              <slot>Error component<slot>
          </div>
      </template>    
      `;
  }

}
customElements.define('error-component', ErrorComponent);