export interface ActiveElement {
  onChange(type: string): void;
  active: string;
  id: string;
  children: React.ReactNode;
}
