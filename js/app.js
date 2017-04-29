var title = React.createElement('h1', null, 'React!'),
    image = React.createElement('img', { src: 'https://facebook.github.io/react/img/logo.svg' }),
    subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов'),
    container = React.createElement('div', { className: 'container' }, image, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));
