export interface ActiveElement {
  onChange?(type: string): void;
  active?: string;
  id: string;
  children: React.ReactNode;
}

export interface IIcons {
  width: string;
  href?: string;
  onClick?(): void;
  className?: string;
}

export interface ICardExperience {
  title: string;
  description: string;
  date: string;
  href: string;
  company: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export interface IBlobs {
  className: string;
}

export interface ICard {
  children: React.ReactNode;
}

export interface ILoader {
  show: boolean;
}

export interface ILayout {
  children: React.ReactNode;
  id: string;
  className?: string;
  reverse?: boolean;
  invert?: boolean;
}

export interface IMainActionsProps {
  social?: boolean;
}

export interface IScrollGuide {
  id: string;
  top?: boolean;
}

export interface ITalkBtn {
  onChange?(value: boolean): void;
  fullScreen?: boolean;
  text?: string;
  className?: string;
}
