
export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: any;
  path: string;
  subItems?: SubMenuItem[];
}
