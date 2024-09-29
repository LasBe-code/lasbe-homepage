const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-header">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-body">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-footer">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <span className="modal-title">{children}</span>;
};

const Button = ({
  children,
  color,
  ...rest
}: { children: React.ReactNode; color?: 'blue' | 'gray' } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const getColor = () => {
    switch (color) {
      case 'blue':
        return '#0D74CE';
      case 'gray':
        return '#63635E';
      default:
        return '#0D74CE';
    }
  };
  return (
    <button className="modal-button" style={{ backgroundColor: getColor() }} {...rest}>
      {children}
    </button>
  );
};

export const ModalStyle = {
  Header,
  Body,
  Footer,
  Title,
  Button,
};
