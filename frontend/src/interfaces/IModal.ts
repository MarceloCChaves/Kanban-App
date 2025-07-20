export interface IModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
};