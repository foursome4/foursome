class Accounts {
  nickname: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: Promise<void>;

  created_at: Date;
}

export { Accounts };
