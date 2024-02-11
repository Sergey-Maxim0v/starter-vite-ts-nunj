const appElement = document.querySelector<HTMLDivElement>('#app');
const Vite = () => {
  if (!appElement) {
    return;
  }

  appElement.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 40px">Vite + TypeScript</h1>
    
    <div class="card">
        <button id="counter" type="button" class="button" style="padding: 4px 20px"></button>
    </div>
`;
};

export default Vite();
