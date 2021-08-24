import styles from './Button.module.css';

const Button = (props) => {
  const style = {};

  if (props.color) {
    style['--current-color'] = `var(--color-${props.color})`;
    style['--current-color-darker'] = `var(--color-${props.color}-darker)`;
  }

  return (
    <button
      className={[styles.button, props.className].join(' ')}
      style={style}
    >
      {props.children}
    </button>
  );
};

export default Button;
