export type TUsers = {
  id: string;
  password: string;
  needdedPassword: boolean;
  role: string;
  isDelete: boolean;
  status: string;
  createAt: Date;
  updateAt: Date;
};

export type TnewUser = {
  password: string;
  id: string;
  role: string;
};
