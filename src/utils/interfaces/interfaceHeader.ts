export interface IHeaderUpperLink {
  top?: string;
  bottom: string;
  path?: string;
}

export interface IHeaderOptions {
  name: string;
  content: string;
}

export interface IHeaderSearch {
  options: Array<IHeaderOptions>;
  title: string;
}

export interface IHeaderCart {
  name: string;
  path: string;
}

export interface IHeaderTopLine {
  deliver: IHeaderUpperLink;
  search: IHeaderSearch;
  language: {
    title: string;
  };
  account: IHeaderUpperLink;
  orders: IHeaderUpperLink;
  cart: IHeaderCart;
}

export interface IHeaderBottomLink {
  name: string;
  path: string;
}

export interface IHeaderBottomLine {
  bottomAll: {
    name: string;
  };
  bottomLinks: Array<IHeaderBottomLink>;
}

export interface IHeader {
  topLine: IHeaderTopLine;
  bottomLine: IHeaderBottomLine;
}
