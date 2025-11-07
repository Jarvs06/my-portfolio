import '../../../components/widgets/Buttons/button.css';

const Button = ({ color, link, text, target = '_self' }) => {
  return (
    <a
      href={link}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      className={`button ${color}`}
    >
      {text}
    </a>
  );
};

export default Button;