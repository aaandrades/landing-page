export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID || "";

interface IWindow extends Window {
  gtag(type: string, id: string, options: any): void;
}

export const pageview = (url: string) => {
  (window as unknown as IWindow).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface IEvent {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const event = ({ action, category, label, value }: IEvent) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
