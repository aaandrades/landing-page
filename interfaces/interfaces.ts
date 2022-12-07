export interface ActiveElement {
  onChange(type: string): void;
  active: string;
  id: string;
  children: React.ReactNode;
}

export interface IIcons {
  width: string;
  href?: string;
  onClick?(): void;
  className?: string;
}
