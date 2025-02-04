export function createComponent(componentName: string, componentHtml: string) {
  const component = document.createElement(componentName);
  component.innerHTML = componentHtml;
  return component;
}




